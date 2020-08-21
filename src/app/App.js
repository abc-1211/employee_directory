import React, { Component } from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";
import employees from "../data/employee.json";
import TableContent from "../components/tablecontent";

class App extends Component {
    state = {
        employees
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <table className="table text-center">
                        <Table/>
                        {this.state.employees.map(employee => {
                                return <TableContent
                                    key = {employee.id}
                                    id = {employee.id}
                                    image = {employee.image}
                                    name = {employee.name}
                                    phone = {employee.phone}
                                    email = {employee.email}
                                />
                        })}
                    </table>
                </div>
            </div>
        )
    }
}

export default App;