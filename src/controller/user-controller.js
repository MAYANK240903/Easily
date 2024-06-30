import RecruiterModel from "../model/Recruiter.js";

export default class UserController{
    postRegister(req,res){
        const {name , email , password} = req.body;
        RecruiterModel.add(name , email , password);
        res.redirect('/login');
    }
    getLogin(req,res){
        res.render('login' , {errorMessage:null});
    }
    postLogin(req,res){
        const {email , password} = req.body;
        const user = RecruiterModel.isValidsUser( email , password);

        if(!user){
            let errorMessage=("Invalid Credentials");
            return res.render('login' , {errorMessage});
        }
        else{
            const name = user.name;
            req.session.name = name;
            res.redirect('/jobs')
        }
    }
    logout(req,res){
        req.session.destroy((err)=>{
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/');
            }
        });
    }
}