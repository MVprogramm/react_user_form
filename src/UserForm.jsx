import React from "react";

import "./userForm.scss";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      name: '',
      about: '',
      student: '',
      occupation: '',
    };
  
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
   
    this.props.onSubmit(this.state);
  };

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    
    const userInfo = type === 'checkbox'
      ? checked
      : value;

    this.setState({
      [name]: userInfo
    });
  };

  render() {
    return (
      <form className="login-form">
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">Name</label>
          <input 
            className="form-input" 
            type="text" 
            id="name" 
            name="name"
            onChange={this.handleChange}
            value={this.state.name} 
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">Student</label>
          <input 
            className="form-input" 
            type="checkbox" 
            id="student" 
            name="student"
            onChange={this.handleChange}
            value={this.state.student} 
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">Occupation</label>
          <select 
            className="form-input"
            name="occupation"
            onChange={this.handleChange}
            value={this.state.occupation} 
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="coconut">Sidney</option>
            <option value="mango">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">About</label>
          <textarea
            className="form-input"
            name="about"
            onChange={this.handleChange}
            value={this.state.about}   
          />
        </div>
        <button 
          className="submit-button" 
          type="submit"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
