const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose')
const mongoose=require("mongoose");
const Event=require("../models/events");
const Project=require("../models/projects");
const Contact=require("../models/contacts");
const keys=require("../keys"); 

AdminJS.registerAdapter(AdminJSMongoose)
const adminJs = new AdminJS({
  databases: [mongoose],
  rootPath: '/admin',
  resources:[Event,Project,Contact]
})
const ADMIN={
    email : keys.ADMINEMAIL, 
    password: keys.ADMINPASSWORD
}
const router = AdminJSExpress.buildAuthenticatedRouter(adminJs,{
    cookieName: keys.COOkIENAME, 
    cookiePassword: keys.COOKIEPASSWORD, 
    authenticate: async(email,password)=>{
        if (email===ADMIN.email && password===ADMIN.password)
        {
            return ADMIN;
        }
        return null;
    }

})

 module.exports=router;