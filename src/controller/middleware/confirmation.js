export default function confirmation(req,res,next){
    let user = alert("Are you Sure");
    console.log("hi");
    if (user){
        next();
    }
}