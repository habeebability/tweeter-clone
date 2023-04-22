// import {sendError} from "h3";
import { createUser } from "../../db/users.js";

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
  };

  const user = await createUser(userData);

  return {
    body: user,
  };
});
