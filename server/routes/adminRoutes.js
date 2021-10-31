
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
  dashboard: {
    component: AdminJS.bundle('../client/src/components/admindashboard'),
  },
  databases: [mongoose],
  rootPath: '/admin',
  logoutPath: '/home',
  resources:[
    {resource:  Project, options: { listProperties: ['title', 'domain', 'year'] }},
    {resource: Contact, options: { listProperties: ['name', 'role'] } }, 
    {resource:  Event, options: { listProperties: ['title', 'eventdate', 'eventtype'] }},  
  ],
  branding:{
    logo:`https://img.icons8.com/office/80/000000/control-panel.png`,
    softwareBrothers: false,
    companyName: "Code Club",
    favicon: `data:image/png;base64,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`,
  },
  locale: {
    translations: {
        labels: {
            loginWelcome: 'Code Club',
            navigation : 'Code Club DATABASE',
            
        },
        messages:{
          welcomeOnBoard_title: '',
          welcomeOnBoard_subtitle: '',
          loginWelcome: 'Welcome to Sairam Code Club Admin Panel',
          addingResources_title: '',
          addingResources_subtitle: '',
          customizeResources_title: '',
          customizeResources_subtitle: '',
          customizeActions_title: '',
          customizeActions_subtitle: '',
          writeOwnComponents_title: '',
          writeOwnComponents_subtitle: '',
          customDashboard_title: '',
          customDashboard_subtitle: '',
          roleBasedAccess_title: '',
          roleBasedAccess_subtitle: '',
          community_title: '',
          community_subtitle: '',
          foundBug_title: '',
          foundBug_subtitle: '',
          needMoreSolutions_title: '',
          needMoreSolutions_subtitle: '',
          invalidCredentials: 'Wrong Admin Email and/or Admin Password',
        }

    },
 
},
})
const ADMIN={
    email : keys.ADMINEMAIL, 
    password: keys.ADMINPASSWORD
}
const router = AdminJSExpress.buildAuthenticatedRouter(adminJs,{
    cookieName: keys.COOKIENAME, 
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