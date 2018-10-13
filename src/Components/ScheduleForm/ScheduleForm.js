import React, { Component } from 'react';
import './ScheduleForm.css'

class ScheduleForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: 0,
      dogsName: '',
      dogBreed: '',
      streetAddress: '',
      dayOfTheWeek: '',
      time: '',
      dogNotes: ''
    };
  }

  handleChange(value, name) {
    this.setState({
      [name]:  value
    });
  }

  submitInfo(e) {

    const request = this.state;
    
   alert(`Thanks ${request.firstName} for inquiring about a dog walking session!  I lookforward to meeting you and ${request.dogsName}, I love ${request.dogBreed}!  I will be at your house at ${request.streetAddress} on ${request.dayOfTheWeek} at ${request.time}.  if I have any issues I'll give you a call at ${request.phoneNumber}`)
  }

  render() {

    return[
      
      <form key='1'>
        <label>First Name</label>
        <input name='firstName' type='text' placeholder='your first name' onChange={(event)=> {
          this.handleChange(event.target.value, event.target.name)
        }}></input>
        <label>Last name</label>
        <input name='lastName' type='text' placeholder='your last name' onChange={(event) => {
          this.handleChange(event.target.value, event.target.name)
        }}></input>
        <label>Phone #</label>
        <input name='phoneNumber' type='number' placeholder='303-867-5309' onChange={(event) => {
          this.handleChange(event.target.value, event.target.name)
        }}></input>
        <label>Dogs name</label>
        <input name='dogsName' type='text' placeholder='your dogs name' onChange={(event) => {
          this.handleChange(event.target.value, event.target.name)
        }}></input>
        <label>Dogs Breed</label>
        <input name='dogBreed' type='text' placeholder='your dogs breed' onChange={(event) => {
          this.handleChange(event.target.value, event.target.name)
        }}></input>
        <label>Steet Address</label>
        <input name='streetAddress' type='text' placeholder='street address' onChange={(event) => {
          this.handleChange(event.target.value, event.target.name)
        }}></input>
        <label>City</label>
        <input name='city' type='text' placeholder='city' onChange={(event) => {
          this.handleChange(event.target.value, event.target.name)
        }}></input>
        <label>Day</label>
        <input name='dayOfTheWeek' type='text' placeholder='day of the week"' onChange={(event) => {
          this.handleChange(event.target.value, event.target.name)
        }}></input>
        <label>Time:</label>
        <input name='time' type='number' placeholder='time' onChange={(event) => {
          this.handleChange(event.target.value, event.target.name)
        }}></input>
        <label>Add. Notes</label>
        <textarea name='dogNotes' type='text' placeholder='any notes about your dog' onChange={(event) => {
          this.handleChange(event.target.value, event.target.name)
        }}></textarea>
      </form>,
      <button className='submit-btn' 
              onClick={ (event)=> {
                event.preventDefault();
                this.submitInfo()
                }
              }
              key='2'
      >Submit</button>
    ]
  }

};

export default ScheduleForm;