import express from 'express';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import JobController from './src/controller/job-controller.js';
import UserController from './src/controller/user-controller.js';
import { uploadFile } from './src/controller/middleware/file-upload.js';
import { auth } from './src/controller/middleware/auth-middleware.js';
import sendMail from './src/controller/middleware/email-confirm.js';
import { setlastVisit } from './src/controller/middleware/lastVisit.js';
import confirmation from './src/controller/middleware/confirmation.js';
import { validRequest } from './src/controller/middleware/validation.js';


const server =express();
server.use(express.urlencoded({ extended:true }));
server.set("view engine" ,"ejs");
server.set("views" , path.join(path.resolve(),"src", "views"));
server.use(express.static("public"));
server.use(cookieParser());
server.use(session({
    secret:'SecretKey',
    resave:'false',
    saveUninitialized: true,
    cookie: {secure:false},
    })
);
server.use(ejsLayouts);



const jobController = new JobController();
const userController = new UserController();

server.get('/' ,setlastVisit ,jobController.get);
server.get('/jobs' ,setlastVisit,jobController.getJob);
server.post('/job/filter',setlastVisit , jobController.getFilter);
server.get('/job/:id' , jobController.getjob1);
server.post('/register' , userController.postRegister);
server.get('/login' , userController.getLogin);
server.post('/login' ,userController.postLogin);
server.get('/postjob' ,auth ,jobController.getpostJob);
server.post('/postjob' , jobController.postJob);
server.post('/apply/:id' ,uploadFile.single("resume"),validRequest,sendMail,jobController.postApply);
server.get('/job/applicants/:id' ,auth ,jobController.getApplicant);
server.post('/job/delete/:id' ,jobController.getdelete);
server.get('/job/update/:id' , jobController.getUpdate);
server.get('/logout' , userController.logout);
server.post('/job/update/:id' , jobController.postUpdate );





server.listen(3200);

