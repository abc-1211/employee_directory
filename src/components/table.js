import React from "react";


function Table(props) {
    return (
            <thead>
                <tr>
                    <th scope="col">#
                        <button onClick={() => props.sortById()}>V</button>
                    </th>
                    <th scope="col">image</th>
                    <th scope="col">name
                        <button onClick={() => props.sortByName()}>V</button>
                    </th>
                    <th scope="col">phone
                        <button onClick={() => props.sortByPhone()}>V</button>
                    </th>
                    <th scope="col">email
                        <button onClick={() => props.sortByEmail()}>V</button>
                    </th>
                </tr>
            </thead>
            
    );
};

export default Table;