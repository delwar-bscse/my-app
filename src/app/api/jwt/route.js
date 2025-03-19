import { SignJWT, jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function GET(req,res){
  const Key = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
  const payload = {email:'abc@gmail.com',id:'12345'};
  
  let token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(Key);

  return NextResponse.json({token:token});
}

export async function POST(req,res){
  const jsonBody = await req.json();
  const Token = jsonBody['token'];
  const Key = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
  
  const value = await jwtVerify(Token, Key);

  return NextResponse.json({value});
}