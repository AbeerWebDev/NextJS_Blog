"use strict";(()=>{var e={};e.id=602,e.ids=[602],e.modules={11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},65704:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>m,originalPathname:()=>g,requestAsyncStorage:()=>p,routeModule:()=>d,serverHooks:()=>l,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>y});var a={};r.r(a),r.d(a,{DELETE:()=>DELETE,GET:()=>GET}),r(78976);var s=r(10884),n=r(16132),i=r(95798),o=r(64551),u=r(66e3);let GET=async(e,{params:t})=>{let{id:r}=t;try{await (0,o.Z)();let e=await u.Z.findById(r);return new i.Z(JSON.stringify(e),{status:200})}catch(e){return new i.Z("Database error!",{status:500})}},DELETE=async(e,{params:t})=>{let{id:r}=t;try{return await (0,o.Z)(),await u.Z.findByIdAndDelete(r),new i.Z("Post has been deletes",{status:200})}catch(e){return new i.Z("Database error!",{status:500})}},d=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/posts/[id]/route",pathname:"/api/posts/[id]",filename:"route",bundlePath:"app/api/posts/[id]/route"},resolvedPagePath:"/Users/abeer/Desktop/Github Clones/NextJS_Blog/myapp/src/app/api/posts/[id]/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:p,staticGenerationAsyncStorage:c,serverHooks:l,headerHooks:m,staticGenerationBailout:y}=d,g="/api/posts/[id]/route"},66e3:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(11185),s=r.n(a);let n=new a.Schema({title:{type:String,required:!0},desc:{type:String,required:!0},img:{type:String,required:!0},content:{type:String,required:!0},username:{type:String,required:!0}},{timestamps:!0}),i=s().models.Post||s().model("Post",n)},64551:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(11185),s=r.n(a);let connect=async()=>{try{await s().connect(process.env.MONGO)}catch(e){throw Error("Connection failed!")}},n=connect}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[199,961],()=>__webpack_exec__(65704));module.exports=r})();