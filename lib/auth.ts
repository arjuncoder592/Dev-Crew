import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
const key = new TextEncoder().encode(process.env.SESSION_SECRET || "development-only-change-me-please");
export async function createSession(user: { id: string; role: string; name: string }) { return new SignJWT({ role: user.role, name: user.name }).setProtectedHeader({ alg: "HS256" }).setSubject(user.id).setIssuedAt().setExpirationTime("7d").sign(key); }
export async function getSession() { const token = (await cookies()).get("skillbridge_session")?.value; if (!token) return null; try { const { payload } = await jwtVerify(token, key); return { id: payload.sub!, role: String(payload.role), name: String(payload.name) }; } catch { return null; } }
