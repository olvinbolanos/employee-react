import React, { Component } from 'react';
import CreateEmployee from './CreateEmployee';
import EmployeeList from './EmployeeList'
import EditEmployee from './EditEmployee'
class Employee extends Component {
   state = {
      employees: [],
      images: [],
      showEditModal: false,
      employeeToEdit: {
         _id: null,
         title: '',
         description: ''
      }
   }
   async componentDidMount() {
      const allEmp = await this.getEmployees();
      const sesameStreetImages = await this.getImages();
      const employeesCopy = [...allEmp]
      const employeesList2 = await sesameStreetImages.forEach((images, i) => {
         const imgName = images.title
         if (allEmp.length > 0){
         employeesCopy.find(user => user.name === imgName).url = images.image.original.url
         employeesCopy.find(user => user.name === imgName).thumb = images.image.thumb.url
         console.log('if than on line 25')}
      })
   
      this.setState({
         employees: employeesCopy,
         images : sesameStreetImages
      })
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
         if(createEmployee.status !== 200){
            throw Error('Resource no found')
         }
         const createEmployeeResponse = await createEmployee.json();
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
         if(responseGetEmployees.status !== 200){
            throw Error('404 from server');
         }
         const employeeResponse = await responseGetEmployees.json();
         return employeeResponse.data
         // this.setState({
         //    employees: [...employeeResponse.data]
         // });
      } catch(err){
         console.log(err, ' getEmployees Err0rs <--');
         return err
      }
   }
   getImages = async () => {
      try {
         const images = await fetch('https://api.are.na/v2/channels/sempee')
         if(!images.ok){
            throw Error(Response.statusText)
         }
         const sesameImages = await images.json()
         return sesameImages.contents
      } catch(err) {
         console.log(err)
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
      this.setState({
         employeeToEdit: employee,
         showEditModal: !this.state.showEditModal
      })
   }
   closeAndEdit = async (e) => {
      e.preventDefault();
      try {
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
      } catch(err){
         console.log(err, ' error closeAndEdit');
         return err
      }
   }
   deleteEmployee = async (id) => {
      try{
         const deleteEmployee = await fetch('http://localhost:9000/api/v1/employee/' + id, {
            method: 'DELETE',
            credentials: 'include'
         })
         if(deleteEmployee.status !== 200){
            throw Error('something happened while deleting')
         }
         const deleteEmployeeJson = await deleteEmployee.json();
         console.log(deleteEmployeeJson.status.message)
         this.setState({
            employees: this.state.employees.filter((employee) => employee._id !== id)
         })
      } catch(err){
         console.log(err);
         return err
      }

   }
   render(){
      return(
         <div>
            <CreateEmployee addEmployee={this.addEmployee}/>
            Sesame Street EMPLOYEES
            <EmployeeList employees={this.state.employees} images={this.state.images} showModal={this.showModal} deleteEmployee={this.deleteEmployee}/>
            {this.state.showEditModal ? <EditEmployee closeAndEdit={this.closeAndEdit} employeeToEdit={this.state.employeeToEdit} handleFormChange={this.handleFormChange}/> : null}
            
         </div>
      )
   }
}
export default Employee