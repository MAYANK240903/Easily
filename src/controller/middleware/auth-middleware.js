export const auth = (req , res , next)=>{
    if (req.session.name){
        next();
    }
    else{
        const errorMessage = "only recruiter is allowed to access this page, login as recruiter to continue";
        res.render('oops' , {errorMessage});
    }
}