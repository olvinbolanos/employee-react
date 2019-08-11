import React, { Component } from 'react';
import {Form, Button, Label} from 'semantic-ui-react';

const EditEmployee = (props) => {
   const formDate = (props.employeeToEdit.birthDate).slice(0,10)
   console.log(formDate, typeof formDate)
   return (
      <div>
         
         <h4>Edit Employee</h4>
         <Form onSubmit={props.closeAndEdit}>
            <Label>
               EDIT name:
               <Form.Input type='text' name='name' onChange={props.handleFormChange} value={props.employeeToEdit.name}/>
            </Label>
            <Label>
               edit Position:
               <Form.Input type='text' name='position' onChange={props.handleFormChange} value={props.employeeToEdit.position}/>
            </Label>
            <Label>
               edit birthday:
               <Form.Input type='date' name='birthDate' onChange={props.handleFormChange} value={formDate}/>
            </Label>
            <Label>
               edit annual salary:
               <Form.Input type='text' name='annualSalary' onChange={props.handleFormChange} value={props.employeeToEdit.annualSalary}/>
            </Label>
            <Button type='Submit'>Save Changes</Button>
         </Form>
      </div>
   )
}
export default EditEmployee