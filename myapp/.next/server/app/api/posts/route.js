"use strict";(()=>{var e={};e.id=990,e.ids=[990],e.modules={11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},88384:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>m,originalPathname:()=>g,requestAsyncStorage:()=>c,routeModule:()=>p,serverHooks:()=>l,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>w});var a={};r.r(a),r.d(a,{GET:()=>GET,POST:()=>POST}),r(78976);var s=r(10884),n=r(16132),o=r(95798),i=r(64551),u=r(66e3);let GET=async e=>{let t=new URL(e.url),r=t.searchParams.get("username");try{await (0,i.Z)();let e=await u.Z.find(r&&{username:r});return new o.Z(JSON.stringify(e),{status:200})}catch(e){return new o.Z("Database error!",{status:500})}},POST=async e=>{let t=await e.json(),r=new u.Z(t);try{return await (0,i.Z)(),await r.save(),new o.Z("New post has been created.",{status:201})}catch(e){return new o.Z("Database error!",{status:500})}},p=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/posts/route",pathname:"/api/posts",filename:"route",bundlePath:"app/api/posts/route"},resolvedPagePath:"/Users/abeer/Desktop/Github Clones/NextJS_Blog/myapp/src/app/api/posts/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:c,staticGenerationAsyncStorage:d,serverHooks:l,headerHooks:m,staticGenerationBailout:w}=p,g="/api/posts/route"},66e3:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(11185),s=r.n(a);let n=new a.Schema({title:{type:String,required:!0},desc:{type:String,required:!0},img:{type:String,required:!0},content:{type:String,required:!0},username:{type:String,required:!0}},{timestamps:!0}),o=s().models.Post||s().model("Post",n)},64551:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(11185),s=r.n(a);let connect=async()=>{try{await s().connect(process.env.MONGO)}catch(e){throw Error("Connection failed!")}},n=connect}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[199,961],()=>__webpack_exec__(88384));module.exports=r})();