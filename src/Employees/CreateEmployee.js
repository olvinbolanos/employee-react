import React, { Component } from 'react';
import Hello from '../Hello'

class CreateEmployee extends Component {
   state = {
      name: '',
      position: '',
      birthDate: '',
      department: '',
      annualSalary: ''
   }
   updateEmployee = (e) => {
      this.setState({[e.currentTarget.name] : e.currentTarget.value})
   }
   
   render(){
      return (
         <form onSubmit={this.props.addEmployee.bind(null, this.state)}>
            <label htmlFor='name'>Employee Name:
               <input type='text' name='name' onChange={this.updateEmployee} value={this.state.name}/>
            </label>
            <br/>
            <label htmlFor='position'>Position:
               <input type='text' name='position' onChange={this.updateEmployee}  value={this.state.position}/>
            </label>
            <br/>
            <label htmlFor='birthDate'>DOB:
               <input type='date' name='birthDate' onChange={this.updateEmployee}  value={this.state.birthDate}/>
            </label>
            <br/>
            <label htmlFor='department'>Department:
               <input type='text' name='department' onChange={this.updateEmployee}  value={this.state.department}/>
            </label>
            <br/>
            <label htmlFor='annualSalary'>Annual Salary:
               <input type='text' name='annualSalary' onChange={this.updateEmployee}  value={this.state.annualSalary}/>
            </label>
            <br/>
            <button type='submit'>
               Create Employee
            </button>
         </form>
      )
   }
}
export default CreateEmployee;