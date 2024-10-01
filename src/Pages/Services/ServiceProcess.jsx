import React from 'react'
import Services from './Services'
import { ServiceRecords } from './ServicesData'
import './services.css'
const ServiceProcess = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="service-heading">
                            <h1>Our Services</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, molestias, voluptates consequuntur ipsum harum eveniet at laborum praesentium non impedit reprehenderit provident dolores fugiat ducimus ipsa soluta odit fugit. Vitae!</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <Services
                            service_icon={ServiceRecords[0].service_icon}
                            title={ServiceRecords[0].title}
                        />
                    </div>

                    <div className="col-md-2">
                        <Services
                            service_icon={ServiceRecords[1].service_icon}
                            title={ServiceRecords[1].title}
                        />
                    </div>

                    <div className="col-md-2">
                        <Services
                            service_icon={ServiceRecords[2].service_icon}
                            title={ServiceRecords[2].title}
                        />
                    </div>

                    <div className="col-md-2">
                        <Services
                            service_icon={ServiceRecords[3].service_icon}
                            title={ServiceRecords[3].title}
                        />
                    </div>

                    <div className="col-md-2">
                        <Services
                            service_icon={ServiceRecords[4].service_icon}
                            title={ServiceRecords[4].title}
                        />
                    </div>

                    <div className="col-md-2">
                        <Services
                            service_icon={ServiceRecords[5].service_icon}
                            title={ServiceRecords[5].title}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceProcess
