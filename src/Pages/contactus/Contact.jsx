import React from 'react'
import './contact.css'
const Contact = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="contact-heading">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-12">
                        <div className="contact_header  p-3">
                            <h1>HAVE ANY QUESTIONS</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis facere dolorum, aspernatur, nisi neque tempore, maiores libero cupiditate ipsa ad qui. Incidunt eos mollitia saepe ab non beatae similique laboriosam.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="contactus-map w-100 h-100 p-3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15276.297146572844!2d75.7235712!3d16.8226704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726731464087!5m2!1sen!2sin" title='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="contactus-map w-100 h-100"></iframe>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact_us_form">
                            <form action="#">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="Enter Name" />
                                    <label for="floatingInput">Name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="Enter Mo-Number" />
                                    <label for="floatingInput">Mobile</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="Enter E-mail" />
                                    <label for="floatingInput">E-mail</label>
                                </div>
                                <div class="mb-3  textareabox">
                                    <label for="exampleFormControlTextarea1" class="form-label">Massage</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className='submit-btns'>
                                    <button type="submit">Submit</button>
                                    <button type="reset">Clear</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
