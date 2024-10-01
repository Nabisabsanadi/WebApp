import React from 'react';
const Ourprocess = (props) => {
    return (
        <div>
            {/* <div className="col-sm-3">?\ */}
                <div className="card">
                <div className="icons">
                        <span>{props.icon}</span>
                    </div>
                    <div className="card-heading">
                        <h3>{props.name}</h3>
                    </div>
                    <p>{props.description}</p>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Ourprocess
