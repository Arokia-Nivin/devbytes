const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose')
const mongoose=require("mongoose");
AdminJS.registerAdapter(AdminJSMongoose)
const Event=require("../models/events");
const Project=require("../models/projects");

const adminJs = new AdminJS({
  databases: [mongoose],
  rootPath: '/admin',
  resources:[Event,Project]
})
const ADMIN={
    email : "nivinjoseph.a@gmail.com", 
    password: "hello@123"
}
const router = AdminJSExpress.buildAuthenticatedRouter(adminJs,{
    cookieName:'adminjs', 
    cookiePassword:"abdcsocsijsfc", 
    authenticate: async(email,password)=>{
        if (email==ADMIN.email && password==ADMIN.password)
        {
            return ADMIN;
        }
        return null;
    }

})

 module.exports=router;