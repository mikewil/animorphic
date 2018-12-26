import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="box bg-light-gray">
                <div className="container">
                    <h2>Let's Talk!</h2>
					<form>
						<div className="form-group">
							<label id="contact" htmlFor="exampleInputName1">Name</label>
							<input type="password" className="form-control" id="exampleInputName1" placeholder="Name" required />
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required />
                            <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputComments1">Comments</label>
                            <textarea className="form-control" id="exampleInputComments1" required></textarea>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
                </div>
            </div>
        );
    }
}

export default Contact;
