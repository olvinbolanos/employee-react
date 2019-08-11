import React from 'react';
import Hello from '../Hello'

const Employees = (props) => {
   console.log(props, '<--- props in employee list')
   const employeesList = props.employees.map((employee) => {
      
      return (
         <li key={employee._id}>
            <span>{employee.name}</span>
         </li>
      )
   })
   
   return( 
   <div>
      <ul>
         {employeesList}
      </ul>
   </div>
   )
}

export default Employees