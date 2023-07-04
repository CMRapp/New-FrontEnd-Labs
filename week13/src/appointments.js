import React from "react";

export default class Appointments extends React.Component {
    constructor(props) {
        super(props);
        this.customersArray = props.customers;
    }

    render () {
        return (
            <table className='table table-striped table-danger table-hover'>
              <thead className='table-dark'>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Appointment Time</th>
                </tr>
              </thead>
              <tbody>
                {this.customersArray.map((customer, index) => (
                <tr key={index}>
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.appointmentTime}</td>
                </tr>
                ))}
                
              </tbody>
            </table>
        )
    }
}