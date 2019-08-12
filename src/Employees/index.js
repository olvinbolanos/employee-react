import React, { Component } from 'react';
import CreateEmployee from './CreateEmployee';
import EmployeeList from './EmployeeList'
import EditEmployee from './EditEmployee'
class Employee extends Component {
   state = {
      employees: [],
      showEditModal: false,
      employeeToEdit: {
         _id: null,
         title: '',
         description: ''
      }
   }
   componentDidMount() {
      this.getEmployees();
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
   getEmployees = async () => {
      try {
         const responseGetEmployees = await fetch('http://localhost:9000/api/v1/employee', {
            credentials: 'include',
            method: 'GET'
         });
         console.log(responseGetEmployees, '<--- responseGetEmployees')
         if(responseGetEmployees.status !== 200){
            throw Error('404 from server');
         }
         const employeeResponse = await responseGetEmployees.json();
         console.log(employeeResponse, '<---employeeResponse')
         this.setState({
            employees: [...employeeResponse.data]
         });
      } catch(err){
         console.log(err, ' getEmployees Err0rs <--');
         return err
      }
   }
   handleFormChange = (e) => {
      this.setState({
         employeeToEdit: {
            ...this.state.employeeToEdit,
            [e.target.name] : e.target.value
         }
      })
   }
   showModal = (employee) => {
      console.log(employee, 'employee._ID in show modal')
      this.setState({
         employeeToEdit: employee,
         showEditModal: !this.state.showEditModal
      })
   }
   closeAndEdit = async (e) => {
      e.preventDefault();
      try {
         console.log(this.state.employeeToEdit._id, '<----this.state.employeeToEdit._id <---')
         const editRequest = await fetch('http://localhost:9000/api/v1/employee/' +
         this.state.employeeToEdit._id, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(this.state.employeeToEdit),
            headers: {
               'Content-Type': 'application/json'
            }
         })
         if(editRequest.status !== 200){
            throw Error('editRequest not working')
         }
         const editResponse = await editRequest.json();
         console.log(editResponse, '<---editResponse')

         const editedEmployeeArray = this.state.employees.map((employee) =>{
            if(employee._id === editResponse.data._id){
               employee = editResponse.data
            }
            return employee
         })
         this.setState({
            employees : editedEmployeeArray,
            showEditModal: false
         })
         console.log(editResponse, 'editResponse')
      } catch(err){
         console.log(err, ' error closeAndEdit');
         return err
      }
   }
   
   render(){
      console.log(this.state,'< state in render')
      return(
         <div>
            <CreateEmployee addEmployee={this.addEmployee}/>
            Sesame Street EMPLOYEES
            <EmployeeList employees={this.state.employees} showModal={this.showModal} deleteEmployee={this.deleteEmployee}/>
            {this.state.showEditModal ? <EditEmployee closeAndEdit={this.closeAndEdit} employeeToEdit={this.state.employeeToEdit} handleFormChange={this.handleFormChange}/> : null}
            
         </div>
      )
   }
}
export default Employee