import React from 'react';
// import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';


const Employees = (props) => {
   console.log(props, '<---propszzzzzzzz')
   const employeesList = props.employees.map((employee) => {
      
      
      const dob = `${new Date(employee.birthDate)}`
      return (
         <span key={employee._id}>
            <img src={employee.thumb} alt={employee.name}/><br/>
            <span>Employee Name: {employee.name}</span><br/>
            <span>Position: {employee.position}</span><br/>
            <span>Dept: {employee.department}</span><br/>
            <span>DOB: {dob.replace(/.{42}$/,'').replace(/^.{4}/,'')}</span><br/>
            <span>Annual Salary: {employee.annualSalary}</span><br/>
            <button onClick={props.showModal.bind(null, employee)}>Edit Employee</button>
            <button onClick={props.deleteEmployee.bind(null, employee._id)}>delete</button><br></br>
         </span>
      )
   })
   
   return( 
   <div>
      <div>
         {employeesList}
      </div>
   </div>
   )
}

export default Employees