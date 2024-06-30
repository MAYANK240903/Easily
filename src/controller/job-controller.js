import { name } from "ejs";
import RecruiterModel from "../model/Recruiter.js";
import JobModel from "../model/jobModel.js";

export default class JobController{
    get(req,res){
        res.render("home" ,{name:req.session.name});
    }
    getJob(req,res){
        const alljobs = JobModel.getJob();
        res.render("jobs" , {jobs:alljobs,name:req.session.name});
    }
    getjob1(req,res){
        const id = req.params.id;
        const jobdetail = JobModel.getJobDetail(id);

        res.render('indi-job',{name:req.session.name , job:jobdetail });
    }
    getpostJob(req,res){
        res.render('postJobs',{name:req.session.name});
    }
    postJob(req,res){
        JobModel.addJob(req.body);
        res.redirect('/jobs');
    }

    getFilter(req,res){
        const job = JobModel.getfilter(req.body.search);


        if (job.length==0){
            const errorMessage="No result found";
            res.render("oops" , {errorMessage,name:req.session.name});
        }
        else{
            res.render("jobs" , {jobs:job,name:req.session.name});
        }
    }
    postApply(req,res){
        const id = req.params.id;
        const {name , email , contact} = req.body;
        const resume = 'images/'+req.file.filename;
        JobModel.applyjob(id , name , email , contact , resume);
        res.redirect("/jobs");
    }
    getApplicant(req,res){
        const id = req.params.id;
        const objects  = JobModel.getapp(id);
        res.render('applicants' , {objects,name:req.session.name});
    }
    getdelete(req,res){
        const id = req.params.id;
        const help = JobModel.delete(id);
        res.redirect('/jobs');
    }
    getUpdate(req,res){
        const id = req.params.id;
        const job = JobModel.getJobDetail(id);
        res.render('updatejob' , {job,name:req.session.name});
    }
    postUpdate(req,res){
        const id = req.params.id;
        JobModel.update(id , req.body);
        res.redirect('/job/'+id);
    }
    
}