import React, { Component } from 'react';
import {Form, Button, Label} from 'semantic-ui-react';

const EditEmployee = (props) => {
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
            <Button type='Submit'>Save Changes</Button>
         </Form>
      </div>
   )
}
export default EditEmployee