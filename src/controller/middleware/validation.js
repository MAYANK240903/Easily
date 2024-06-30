import {body , validationResult} from 'express-validator';

export const validRequest = async function(req , res , next){
    console.log(req.body);

    const rules=[
        body('name').notEmpty().withMessage("Name is required"),
        body('email').isEmail().withMessage('Please enter a valid email address'),
  // Phone number validation
        body('contact').isMobilePhone().withMessage('Please enter a valid phone number'),
        //body('imageUrl').isURL().withMessage("Invalid Url"),
        body('resume').custom((value , {req})=>{
            if (!req.file){
                throw new Error("file not found");
            }
            return true;
        }),
    ]
    await Promise.all(rules.map(rule=> rule.run(req)));

    var errors = validationResult(req);


        if (!errors.isEmpty()){
            return res.render('oops' ,{
                errorMessage: errors.array()[0].msg,
            });
        }
        next();
}