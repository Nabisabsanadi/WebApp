import React from 'react'
import jobimage from '../../images/jobserch.png'
import './career.css'
const Career = () => {
    const image = {
        height: "350px",
        marginLeft: "25px"
    }
    return (
        <div>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="searching">
                            <img src={jobimage} className='img-fluid' alt="" style={image} />
                        </div>
                    </div>
                    <div className="col-md-6 career-form">
                        <div className="career-form-heading">
                            <h3>Apply Now</h3>
                        </div>
                        <div className="career-form">
                            <form action="#">
                                <div className="row">
                                    <div className="col-6">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="Enter Name" />
                                            <label for="floatingInput">Name</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div class="form-floating mb-3">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="Enter Email" />
                                            <label for="floatingInput">Email address</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="Enter Mobile Number" />
                                            <label for="floatingInput">Mobile Number</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="Enter Qualification" />
                                            <label for="floatingInput">Qualification</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="Enter Location" />
                                            <label for="floatingInput">Current Location</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Select Job Role</option>
                                            <option value="1">Web Developer</option>
                                            <option value="2">Software Developr</option>
                                            <option value="3">Web Designer</option>
                                            <option value="3">HR</option>
                                            <option value="3">Graphic Designer</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <div>
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Ready to work from Office
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" /> Yes
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" /> No
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div>
                                            <label htmlFor="">Upload Resume</label>
                                        </div>
                                        <input type="file" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div class="mb-3  textareabox">
                                            <label for="exampleFormControlTextarea1" class="form-label">Massage</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 submit-btns">
                                        <button type="submit">Submit</button>
                                        <button type="reset">Clear</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career
