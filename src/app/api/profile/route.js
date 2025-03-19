//Profile
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const headerList = await headers();
  const username = headerList.get("username");

  return NextResponse.json({
    status: "success",
    message: "Profile fetched successfully",
    username
  },{status:200});
}
