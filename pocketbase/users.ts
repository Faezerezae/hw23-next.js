/** @format */

"use server";

import { cookies } from "next/headers";
import PocketBase from "pocketbase";
import moment from "moment";

const sessionKey=process.env.sessionCookieKey as string;
const url = process.env.pocketbaseUrl;

export const getUserByCredentials = async (
  username: string,
  password: string
):Promise<IInternalApiResponse<boolean>> => {
  const client = new PocketBase(url);

try {
       await client.admins.authWithPassword(
      process.env.pocketbaseUsername as string,
      process.env.pocketbasePassword as string
    );
} catch (_) {
    return {error:"Internal server error"}
}
 
  try {
    const user: IUser = await client
      .collection("users")
      .getFirstListItem(`username="${username}"`);
    console.log(user);
    if (!user || user.password !== password) {
      return { error: "User not found" };
    }

  
    try {
        const sessions: IToken[] = await client.collection("tokens").getFullList({
          sort: "-created",
          filter: `userId="${user.id}"`,
        });
        for (const s of sessions) {
          // s.created + s.expiration < today
          const expired = moment(s.created)
            .add(s.expiration, "seconds")
            .isBefore(moment());
          if (expired) {
            await client.collection("tokens").delete(s.id);
          }
        }
      } catch (_) {}

    const data = {
        "userId": user.id,
        "sessionKey": crypto.randomUUID(),
        "expiration":Number(process.env.expirationTime)
    };
    
    await client.collection('tokens').create(data);
    // console.log(cookies().get(sessionKey));
    cookies().set(sessionKey, data.sessionKey);

return{data:user.isAdmin}
  } catch (_) {
    return { error: "User not found" };
  }
};
