import React, { Component } from 'react';

class ScheduleForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: ''
    };
  }

  render() {

    return[
      
      <form>
        <label>First Name</label>
        <input type='text' placeholder='your first name'></input>
        <label>Last name</label>
        <input type='text' placeholder='your last name'></input>
        <label>Phone #</label>
        <input type='text' placeholder='303-867-5309'></input>
        <label>Dogs name</label>
        <input type='text' placeholder='your dogs name'></input>
        <label>Dogs Breed</label>
        <input type='text' placeholder='your dogs breed'></input>
        <label>Steet Address</label>
        <input type='text' placeholder='street address'></input>
        <label>City</label>
        <input type='text' placeholder='city'></input>
        <label>Day</label>
        <input type='text' placeholder='day of the week"'></input>
        <label>Time:</label>
        <input type='text' placeholder='time'></input>
        <label>Add. Notes</label>
        <input type='text' placeholder='any notes about your dog'></input>
      </form>,
      <button className='submit-btn'>Submit</button>
    ]
  }

};

export default ScheduleForm;