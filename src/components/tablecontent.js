import React from "react";
import "./style.css";

function TableContent(props) {
    return (
        <tbody>
            <tr key={props.id}>
                <th scope="row">{props.id}</th>
                <td><img src={props.image}/></td>
                <td>{props.name}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
            </tr>
        </tbody>
    )
}

export default TableContent;