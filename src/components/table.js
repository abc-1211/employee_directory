import React from "react";

function Table() {
    return (
        <div>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">image</th>
                    <th scope="col">name</th>
                    <th scope="col">phone</th>
                    <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">{props.id}</th>
                    <td>{props.image}</td>
                    <td>{props.name}</td>
                    <td>{props.phone}</td>
                    <td>{props.email}</td>
                </tr>
            </tbody>
        </div>
    );
};

export default Table;