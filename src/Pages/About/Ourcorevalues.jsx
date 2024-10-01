import React from 'react'

const Ourcorevalues = (props) => {
  return (
    <div>
      <div className="container-fluid  mb-5">
        <div className="row m-2">
        <div className="h1  text-center  our-core-values">
            <h1>Our Core Values</h1>
            </div>
            <div className="col-md-4">
                <div className="corevalues-card">
                    <p className="h6"><span>{props.corevalues_icon}</span></p>
                    <h3 className="h3">{props.corevalues_title}</h3>
                </div>
            </div>
            <div className="col-md-4">
                <div className="corevalues-card">
                    <p className="h6"><span>{props.corevalues_icon}</span></p>
                    <h3 className="h3">{props.corevalues_title}</h3>
                </div>
            </div>
            <div className="col-md-4">
                <div className="corevalues-card">
                    <p className="h6"><span>{props.corevalues_icon}</span></p>
                    <h3 className="h3">{props.corevalues_title}</h3>
                </div>
            </div>

            <div className="col-md-4">
                <div className="corevalues-card">
                    <p className="h6"><span>{props.corevalues_icon}</span></p>
                    <h3 className="h3">{props.corevalues_title}</h3>
                </div>
            </div>
            <div className="col-md-4">
                <div className="corevalues-card">
                    <p className="h6"><span>{props.corevalues_icon}</span></p>
                    <h3 className="h3">{props.corevalues_title}</h3>
                </div>
            </div>
            <div className="col-md-4">
                <div className="corevalues-card">
                    <p className="h6"><span>{props.corevalues_icon}</span></p>
                    <h3 className="h3">{props.corevalues_title}</h3>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Ourcorevalues
