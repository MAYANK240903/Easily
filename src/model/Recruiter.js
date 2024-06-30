export default class RecruiterModel{
    constructor(id , name , email , password){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
    } 

    static add(name , email , password){
        const newUser = new RecruiterModel(recruiters.length+1 , name , email , password);
        recruiters.push(newUser);
    }

    static isValidsUser(email , password){
        const result =recruiters.find(u=> u.email==email && u.password==password);
        return result;
    }

}

let recruiters=[
    {
        id: 1,
        name: 'Mayank Aggarwal',
        email: 'mayanksaksham246@gmail.com',
        password: '123'
    }
];