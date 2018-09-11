import React, { Compontent } from 'react';

class ScheduleForm extends Compoent {
  constructor() {
    this.state = {

    };
  }

  render() {

    return(
      <form>
        <label>First Name</label>
        <input type='text' placeholder='first name'></input>
      </form>
    )
  }

};

export default ScheduleForm;