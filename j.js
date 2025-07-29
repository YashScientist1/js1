

const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },


    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },


    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    
    //... More employee records can be added here

    ];




    //  Displaying employee

    //   map()

    // here we are going to generate a new array by applying function


const totalEmployees =  employees.map((employees,index) => <p> ${employees.id} : ${employees.name} : ${ employees.department}</p>).join('');

document.getElementById('employeesDetails').innerHTML= totalEmployees



// Now we are going to calculate total salaries

// reduce()

//  it reduces the whole thing into one single result

// acc = accumulator means add up values

function calculateTotalSalaries(){

    const   totalSalaries = employees.reduce((acc,employees) =>  acc + employees.salary,0 );

    alert('Total salaries is equal to $${totalSalaries}')
}



// NOW we are going to calculate all of the HR employees

// Filter()

// it is used to run the function on eevery element of the array and clear and the things only what you  want


function DisplayHREmployees() {

    const hrEmployees = employees.filter( employees => employees.department=== 'HR');

    const hrEmployeesDisplay = hremployees.map((employees, index) =>  <p> ${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>).join('');
    
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;



}



// Now we are going to find a Employee with an employee id 2



function findEmployeeById(employeeID) {



    const foundEmployee =  employees.find(employees => employees.id === employeeID );

    if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    
    }


}
