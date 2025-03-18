//New API
import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";

//GET Request
export async function GET(req, res) {

  const { searchParams } = new URL(req.url);

  const Name = searchParams.get('name');
  const Age = searchParams.get('age');

  return NextResponse.json({
    body: {
      msg: "I am GET",
      name: Name,
      age: Age
    }
  });
}

//POST
export async function POST(req, res) {
  const reqBody = await req.json();
  const name = reqBody['name'];
  const age = reqBody['age'];

  return NextResponse.json({ body:{
    msg: "I am POST",
    name: name,
    age: age
  }});
}


//PUT
export async function PUT(req, res) {

  const reqBody = await req.formData();

  const name = reqBody.get('name');
  const age = reqBody.get('age');

  return NextResponse.json({ body: {
    msg: "I am PUT",
    name: name,
    age: age
  }});
}


//PATCH
export async function PATCH(req, res) {
  return NextResponse.json({ body: "I am PATCH" });
}


//DELETE
export async function DELETE(req, res) {
  return NextResponse.json({ body: "I am DELETE" });
}