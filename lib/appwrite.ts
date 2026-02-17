import { Account, Avatars, Client } from "appwrite";

export const client = new Client()
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("6990bf36002e0ce470c7");

export const account = new Account(client);
export const avatars = new Avatars(client);
