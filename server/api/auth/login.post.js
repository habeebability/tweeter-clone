import { getUserByUsername } from "~/server/db/users";
import bcrypt from "bcrypt";
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt";
import { userTransformer } from "~/server/transformers/user";
import { createRefreshToken } from "~/server/db/refreshTokens";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid Credentials",
      })
    );
  }

  // is user registered
  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid Credentials",
      })
    );
  }

  // is password correct
  const doesPasswordMatch = await bcrypt.compare(password, user.password);

  if (!doesPasswordMatch) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid Credentials",
      })
    );
  }
  // create token

  //   access token

  //  refresh token

  const { accessToken, refreshToken } = generateTokens(user);

  //   save refresh token to db
  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  //   Add http only cookie
  sendRefreshToken(event, refreshToken);
  console.log(event);
  return {
    access_token: accessToken,
    user: userTransformer(user),
  };
});
