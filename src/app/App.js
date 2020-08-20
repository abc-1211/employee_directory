import React, { Component } from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";
import employees from "../data/employee.json";

class App extends Component {
    state = {
        employees
    };

    render() {
        return (
            <div>
                <Navbar />
                {this.state.employees.map(employee => {
                    <Table
                        id = {employee.id}
                        image = {employee.image}
                        name = {employee.name}
                        phone = {employee.phone}
                        email = {employee.email}
                    />
                })}
            </div>
        );
    }
}

export default App;