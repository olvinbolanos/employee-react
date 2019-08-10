import React, { Component } from 'react';
import CreateEmployee from './CreateEmployee';
class Employee extends Component {
   state = {
      employees: []
   }
   addEmployee = async (employee, e) => {
      e.preventDefault();
      console.log(employee, e, '<-- inside of add employee')
      try {
         const createEmployee = await fetch('http://localhost:9000/api/v1/employee',{
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(employee),
            headers: {
               'Content-Type': 'application/json'
            }
         })
         console.log(createEmployee, '<-- create Employee fetch')
         if(createEmployee.status !== 200){
            throw Error('Resource no found')
         }
         const createEmployeeResponse = await createEmployee.json();
         console.log(createEmployeeResponse.data, ' <-- createEmployeeResponse');
         this.setState({
            employees: [...this.state.employees, createEmployeeResponse.data]
         })
      } catch(err){
         console.log(err, ' add employee')
         return err
      }
   }
   render(){
      return(
         <div>
            <CreateEmployee addEmployee={this.addEmployee}/>
            Sesame Street EMPLOYEES
         </div>
      )
   }
}
export default Employee