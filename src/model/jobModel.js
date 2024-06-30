let jobs=[{
    id: 1,
    job_category: 'Tech',
    job_designation: 'SDE',
    job_location: 'Delhi',
    company_name: 'Google',
    salary: '1crpa',
    number_of_openings: '2',
    skills_required: [ 'React', 'NodeJs', 'Angular', 'C++', 'Data Structures & Algo' ],
    apply_by: '2024-06-25',
    applicants: [],
    date: '6/6/2024, 10:25:23 PM'
  },
  {
    id: 2,
    job_category: 'Tech',
    job_designation: 'Front-End Developer',
    job_location: 'Noida',
    company_name: 'Microsoft',
    salary: '50lpa',
    number_of_openings: '4',
    skills_required: [ 'React', 'Data Structures & Algo' ],
    apply_by: '2024-06-13',
    applicants: [],
    date: '6/6/2024, 10:27:22 PM'
  },
  {
    id:3,
    job_category: 'Tech',
    job_designation: 'MERN Developer',
    job_location: 'Gurgoan',
    company_name: 'Flipkart',
    salary: '25lpa',
    number_of_openings: '6',
    skills_required: [
        'React',
        'NodeJs',
        'Angular',
        'MongoDB',
        'SQL',
        'Express',
        'Data Structures & Algo'
    ],
    apply_by: '2024-06-26',
    applicants: [],
    date: '6/6/2024, 10:29:01 PM'
  }
];
export default class JobModel{

    constructor(id,job_category,
        job_designation,
        job_location,
        company_name,
        salary,
        number_of_openings,
        skills_required ,
        apply_by , applicants , date){
            this.id=id;
            this.job_category=job_category;
            this.job_designation=job_designation;
            this.job_location=job_location;
            this.company_name=company_name;
            this.salary=salary;
            this.number_of_openings=number_of_openings;
            this.skills_required =skills_required;
            this.apply_by=apply_by;
            this.applicants=applicants;
            this.date = date;
        }



    static addJob(Job){
        const {job_category,
        job_designation,
        job_location,
        company_name,
        salary,
        number_of_openings,
        skills_required ,
        apply_by} = Job;
        let now = new Date();
        
        const newjob = new JobModel(jobs.length+1 , job_category,
            job_designation,
            job_location,
            company_name,
            salary,
            number_of_openings,
            skills_required ,
            apply_by , [] , now.toLocaleString());

            jobs.push(newjob);
            

    }
    static getJob(){
        return jobs;
    }
    static getJobDetail(id){
        let a;
        for (let i=0 ; i<jobs.length ; i++){
            if (jobs[i].id == id){
                a= jobs[i];
                break;
            }
        }
        return a;
    }
    static getfilter(name){
        let result = jobs.filter(job => job.company_name.toLowerCase() == name.toLowerCase());
        return result;
    }
    static applyjob(id , name , email ,contact , resume){
        for (let i=0 ; i<jobs.length ; i++){
            if (jobs[i].id==id){
                const object ={
                    name:name,
                    email:email,
                    contact:contact,
                    resume:resume
                }
                jobs[i].applicants.push(object);
                break;
            }
        }
    }
    static getapp(id){
        for (let i=0 ; i<jobs.length ; i++){
            if (jobs[i].id==id){
                return jobs[i].applicants;
            }
        }
    }
    static delete(id){
        const index =jobs.findIndex(p=> p.id==id);
        if (index>=0){
            jobs.splice(index , 1);
            for (let i =0 ; i<jobs.length ; i++){
            jobs[i].id=i+1;
            }
            return true;
        }
        return false;
    }
    static update(id , job){
        for (let i=0 ; i<jobs.length ; i++){
            if (jobs[i].id==id){
                const {job_category,
                    job_designation,
                    job_location,
                    company_name,
                    salary,
                    number_of_openings,
                    skills_required ,
                    apply_by} = job;
                
                jobs[i].job_category = job_category;
                jobs[i].job_designation = job_designation;
                jobs[i].job_location = job_location;
                jobs[i].company_name = company_name;
                jobs[i].salary = salary;
                jobs[i].number_of_openings = number_of_openings;
                jobs[i].skills_required = skills_required;
                jobs[i].apply_by = apply_by;

                break;
            }
        }
    }
}