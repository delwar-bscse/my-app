import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
// import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { jwtVerify } from "jose";

export const middleware = async(req,res,next) => {
  if(req.nextUrl.pathname.startsWith('/api/profile')){
    try {
      const headerList = new Headers(req.headers);
      const Token = headerList.get('token');
      const Key = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
      
      const decodeValue = await jwtVerify(Token, Key);
      const username = decodeValue.payload.username;
      // console.log(username);

      headerList.set('username',username);
      return NextResponse.next({
        request:{headers:headerList}
      });

    } catch (error) {
      return NextResponse.json({
        status: "failed - middleware",
        message: "Unauthorised access"
      }, { status: 401 });
    }
  }
}

// export const middleware = async(req,res,next) => {
//   if(req.nextUrl.pathname.startsWith('/api/product')){

//     const headerList = new Headers(req.headers);
//     const token = headerList.get('token');
    
//     if(token==='12345-ABCDE'){
//       headerList.set('user-id','12345');
//       console.log("I am middleware - api/product");
//       return NextResponse.next({headers:headerList});
//     }else{
//       return NextResponse.json({ error: "You are not authorized" }, { status: 401 });
//     }
//   }
// }

// export const config = {
//   matcher: ['/api/:path*']
// }