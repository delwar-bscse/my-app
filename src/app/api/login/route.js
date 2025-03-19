import { SignJWT, jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const jsonBody = await req.json();
  const username = jsonBody['username'];
  const password = jsonBody['password'];

  if (username === "ABC" && password === '123') {
    console.log(username, password);
    const payload = { username: username};
    const Key = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

    let token = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(Key);

    return NextResponse.json({
      status: "success",
      message: "Login successful",
      token: token
    }, { status: 200 });
  } else {
    return NextResponse.json({
      status: "failed - Login",
      message: "Login failed"
    }, { status: 401 });
  }
}