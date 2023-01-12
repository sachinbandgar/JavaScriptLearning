

 class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayOfEmployee = [emp_anil, emp_radha, emp_rishi,  emp_sonali,  emp_monika, emp_viny, emp_mahi];
console.log(`Q.1) Find all employee from 'Wipro' company..................... `);
const result = arrayOfEmployee.filter((Employee)=>{
return Employee.emp_company=="Wipro";
})
result.forEach((value)=>{
    console.log(`   Emp Id: ${value.emp_id}  Emp Name: ${value.emp_name}   Emp Dept: ${value.emp_dept}   Emp Salary: ${value.emp_salary}   Emp Company: ${value.emp_company}`);
})           

console.log(`Q.2) Find all employee from 'IT' or 'HR' Dept..................... `);
const resultOFItAndHr = arrayOfEmployee.filter((value)=>{
return value.emp_dept=="IT" || value.emp_dept=="HR";
 });
 resultOFItAndHr.forEach((value)=>{
    console.log(`   Emp Id: ${value.emp_id}  Emp Name: ${value.emp_name}   Emp Dept: ${value.emp_dept}   Emp Salary: ${value.emp_salary}   Emp Company: ${value.emp_company}`);

});
console.log(`--------------------------------------------------------------------------------------------------------`);

console.log(`Q.3) Find all employee whose emp id's are greater than 50  ..................... `);
const empIdGreaterThan50= arrayOfEmployee.filter((value)=>{
return value.emp_id>50;
});
empIdGreaterThan50.forEach((value)=>{
    console.log(`   Emp Id: ${value.emp_id}  Emp Name: ${value.emp_name}   Emp Dept: ${value.emp_dept}   Emp Salary: ${value.emp_salary}   Emp Company: ${value.emp_company}`);

});
console.log(`--------------------------------------------------------------------------------------------------------`);

console.log(`Q.4) Employees whoes Name startWith "A", "V", "M" are ----------------------------`);

const nameOfEmp = arrayOfEmployee.filter((value)=>{
 if (value.emp_name.startsWith("A") || value.emp_name.startsWith("V") || value.emp_name.startsWith("M") ) {
    return value.emp_name;
}

});
nameOfEmp.forEach((value)=>{
    console.log(`   Emp Id: ${value.emp_id}  Emp Name: ${value.emp_name}   Emp Dept: ${value.emp_dept}   Emp Salary: ${value.emp_salary}   Emp Company: ${value.emp_company}`);

});
console.log(`--------------------------------------------------------------------------------------------------------`);

console.log(`Q.5) Find the average salary of the employee for all the department ----------------------------`);
const average = arrayOfEmployee.filter((value)=>{
return value.emp_salary;
});
let counter = 0;
const sumOFEmp=average.reduce((runningTotal, value )=>{
    counter+=1;
return runningTotal+value.emp_salary;
},0);
//console.log(`   Total employee salary : ${sumOFEmp}`);
//console.log(`   Total no. of employee : ${counter}`);

var avrg = sumOFEmp/counter;
console.log(`   Average salary of the employee for all the dept. : ${avrg}`);
console.log(`--------------------------------------------------------------------------------------------------------`);
console.log(`Q.6) Find the average salary of the employee for 'IT' department ----------------------------`);

const itDept=arrayOfEmployee.filter((value)=>{
return value.emp_dept=="IT";
});

itDept.forEach((value)=>{
  //  console.log(`   Emp Id: ${value.emp_id}  Emp Name: ${value.emp_name}   Emp Dept: ${value.emp_dept}   Emp Salary: ${value.emp_salary}   Emp Company: ${value.emp_company}`);

});

const totalSalaryOfItEmp = itDept.filter((value)=>{
return value.emp_salary;
});
let counter1=0;
const totalSalary = totalSalaryOfItEmp.reduce((runningTotal,value)=>{
counter1+=1;
    return runningTotal+value.emp_salary
},0);
//console.log(`Total salary of it employee : ${totalSalary}`);
//console.log(`Total IT Employee : ${counter1}`);
var itAverage = totalSalary/counter1;
console.log(`   Average salary of 'IT' dept : ${itAverage}`);
