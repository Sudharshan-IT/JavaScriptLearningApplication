let student={
    "name":"Sudharshan",
    "id":"1001",
    "location":"Hyderabad",
    "fullname":function(){
        return "Nandyala "+this.name;
    }
}
console.log(student);
console.log(student.fullname())
let employee={
    "name":"Sudharshan",
    "Id":"606316",
    "Location":"Bangalore",
    "PINCODE":"500603"
}
console.log(employee);
for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(element);
        
    }
}