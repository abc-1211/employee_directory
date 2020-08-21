import React, { Component } from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";
import employees from "../data/employee.json";
import TableContent from "../components/tablecontent";

class App extends Component {
    state = {
        employees
    }

    sortByIdAsc = () => {
        employees.sort((a,b) => (a.id - b.id));
        this.setState({ employees });
    }

    sortByNameAsc = () => {
        employees.sort((a,b) => (a.name.localeCompare(b.name)));
        this.setState({ employees });
    }

    sortByPhoneAsc = () => {
        employees.sort((a,b) => (a.phone - b.phone));
        this.setState({ employees });
    }

    sortByEmailAsc = () => {
        employees.sort((a,b) => (a.email.localeCompare(b.email)));
        this.setState({ employees });
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <table className="table text-center">
                        <Table
                            sortById = {this.sortByIdAsc}
                            sortByName = {this.sortByNameAsc}
                            sortByPhone = {this.sortByPhoneAsc}
                            sortByEmail = {this.sortByEmailAsc}
                        />
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