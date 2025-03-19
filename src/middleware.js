import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
// import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const middleware = async(req,res,next) => {
  if(req.nextUrl.pathname.startsWith('/api/product')){
    
    const res = NextResponse.next();
    res.headers.set('res-token','12345-ABCDE-res');

    return res;
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