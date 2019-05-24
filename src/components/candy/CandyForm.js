import React, { Component } from "react";

export default class CandyForm extends Component {
  // Set initial state
  state = {
    candyName: "",
    typeId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewCandy = evt => {
    evt.preventDefault();
     {
      const candy = {
        name: this.state.name,
        typeId: this.state.typeId,
    }

      // Create the animal and redirect user to animal list
      this.props
        .addCandy(candy)
        .then(() => this.props.history.push("/candiesFromAPI"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="animalForm">
          <div className="form-group">
            <label htmlFor="animalName">Candy name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="candyName"
              placeholder="Candy name"
            />
          </div>
          <div className="form-group">
            <select
              defaultValue=""
              name="employee"
              id="employeeId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select an employee</option>
              {this.props.employees.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            onClick={this.constructNewAnimal}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}