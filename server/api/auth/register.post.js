// import {sendError} from "h3";
import { createUser } from "../../db/users.js";
import { userTransformer } from "~/server/transformers/user.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, email, password, repeatPassword, name } = body;

  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Password does not match",
      })
    );
  }

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid Params",
      })
    );
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: "https://i.imgur.com/8Q9QY7C.png",
  };

  const user = await createUser(userData);

  return {
    body: userTransformer(user),
  };
});
