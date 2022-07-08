let Student={
    "studentName":"Sudharshan",
    "studentAddress":"Hyderabad",
    "studentId":"1001"
};
console.log(Student.studentId,Student.studentName,Student.studentAddress);
console.log("***Iteration Object Using For Loop***");
for(let k in Student){
    console.log(k);
}
function Employee(firstname,lastname,location){
    this.firstname=firstname;
    this.lastname=lastname;
    this.location=location;
}
//Creating New Objects....
const e1=new Employee("Nandyala","Sudharshan","Hyderbad");
const e2=new Employee("Adimulama","Pavani","Bangalore");
console.log("Employee 1 Details :::")
console.log(e1);
console.log("Employee 2 Details:::")
console.log(e2);
let person={
    "firstname":"Nandyala",
    "lastname":"Sudharshan",
    "fullname":function(){
        return this.firstname+" "+this.lastname;
    }
}
let finalName=person.fullname();
console.log("Full Name::"+finalName);