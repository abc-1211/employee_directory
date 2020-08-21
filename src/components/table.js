import React from "react";


function Table(props) {
    return (
            <thead>
                <tr>
                    <th scope="col">#
                        <button className="btn" onClick={() => props.sortById()}>
                            <span className="glyphicon glyphicon-option-horizontal"></span>
                        </button>
                    </th>
                    <th scope="col">image</th>
                    <th scope="col">name
                        <button className="btn" onClick={() => props.sortByName()}>
                            <span className="glyphicon glyphicon-option-horizontal"></span>
                        </button>
                    </th>
                    <th scope="col">phone
                        <button className="btn" onClick={() => props.sortByPhone()}>
                            <span className="glyphicon glyphicon-option-horizontal"></span>
                        </button>
                    </th>
                    <th scope="col">email
                        <button className="btn" onClick={() => props.sortByEmail()}>
                            <span className="glyphicon glyphicon-option-horizontal"></span>
                        </button>
                    </th>
                </tr>
            </thead>
            
    );
};

export default Table;