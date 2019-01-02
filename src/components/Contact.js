import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="box bg-light-gray">
                <div className="container">
                    <h2>Let's Talk!</h2>
					<p>Provide us some information, and we'll be in touch. We want you to feel confident hiring a professional photographer. You don't need to spend a fortune to get a great product.</p>
					<form action="/form.php" method="post" target="_blank">
						<div className="form-group">
							<label htmlFor="name" id="contact">Name</label>
							<input type="text" name="name" className="form-control" id="name" placeholder="Name" required />
						</div>
						<div className="form-group">
							<label htmlFor="email">Email address</label>
							<input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" required />
                            <small id="emailHelp" className="form-text">We'll never share your information with anyone else.</small>
						</div>
						<div className="form-group">
							<label htmlFor="comments">Comments</label>
                            <textarea name="comments" className="form-control" id="comments" required></textarea>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
                </div>
            </div>
        );
    }
}

export default Contact;
