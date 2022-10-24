import React from 'react';

export default class DynamicTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      department: "",
      departments: []
    }
  }

  updateDepartment(event) {
    this.setState({
      department: event.target.value
    });
  }

  handleClick() {
    var departments = this.state.departments;

    departments.push(this.state.department);

    this.setState({
      departments: departments,
      department: ""
    });
  }

  handleItemChanged(i, event) {
    var departments = this.state.departments;
    departments[i]  = event.target.value;

    this.setState({
      departments: departments

    });
  }

  handleItemDeleted(i) {
    var departments = this.state.departments;

    departments.splice(i, 1);

    this.setState({
      departments: departments
    });
  }

  renderRows() {
    var context = this;

    return  this.state.departments.map(function(o, i) {
              return (
                <tr key={"item-" + i}>
                  <td>
                    <input
                      type="text"
                      value={o}
                      onChange={context.handleItemChanged.bind(context, i)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={context.handleItemDeleted.bind(context, i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            });
  }

  render() {
    return (
      <div>
        <table className="">
          <thead>
            <tr>
              <th>
                Department
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <hr/>
        <input
          type="text"
          value={this.state.department}
          onChange={this.updateDepartment.bind(this)}
        />
        <button
          onClick={this.handleClick.bind(this)}
        >
          Add Department
        </button>
      </div>
    );
  }
}