import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            country: '',
            gender: '',
            dob: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId : employee.emailId,
                country: employee.country,
                gender: employee.gender,
                dob: employee.dob
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId,country: this.state.country, gender: this.state.gender,  dob: this.state.dob};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changeCountryHandler= (event) => {
        this.setState({country: event.target.value});
    }

    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }

    changeDobHandler= (event) => {
        this.setState({dob: event.target.value});
    }
    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Country: </label>
                                            <input placeholder="Country" name="country" className="form-control" 
                                                value={this.state.country} onChange={this.changecountryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Country: </label>
                                            <select placeholder=" Country" name="country" className="form-control" 
                                                value={this.state.country} onChange={this.changeCountryHandler}>
                                                    <option>india</option>
                                                    <option>Pakistan</option>
                                                    <option>America</option>
                                                    <option>Phillipines</option>
                                                </select>

                                        </div>
                                        <div className = "form-group">
                                            <label>Gender:</label>
                                        <input type="radio" value="male" id="male"
                                                onChange={this.changeGenderHandler} name="gender" />
                                                <label for="male">Male</label>

                                                <input type="radio" value="female" id="female"
                                                onChange={this.changeGenderHandler} name="gender"/>
                                                <label for="female">Female</label>

                                                <input type="radio" value="transgender" id="transgender"
                                                onChange={this.changeGenderHandler} name="gender"/>
                                                <label for="transgender">transgender</label>
                                            
                                        </div>
                                        <div className = "form-group">
                                            <label>Date of Birth : </label>
                                           <p><input type="datetime-local" name="doc_dob" required
                                            value={this.state.dob} onChange={this.changeDobHandler}/></p>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
