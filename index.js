// Write your solution in this file!
const employee = {
    name: "Kelly",
    streetAddress: "4157 Perry St" 
}

//

function updateEmployeeWithKeyAndValue (employee, key, value){
    const newEmployee = {
        ...employee,
        name: "Sam",
        streetAddress: "11 Broadway"
    };

    return newEmployee
};

//

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
   employee.streetAddress = "12 Broadway";
   employee.name = "Sam";
   return employee
};

//

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
};

//

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee.name;
    return employee;
}
