import { SignJWT, jwtVerify } from "jose";

export type SessionPayload = {
  name: string;
  expiresAt?: Date;
};
const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  const expiresAt = new Date(Date.now() + 2 * 60 * 1000);
  return new SignJWT({ name: payload.name, expiresAt: expiresAt })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}
