import React, { Component } from 'react';
import CreateEmployee from './CreateEmployee';
class Employee extends Component {
   state = {
      employees: []
   }
   addEmployee = async (employee, e) => {
      e.preventDefault();
      console.log(employee, e, '<-- inside of add employee')
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