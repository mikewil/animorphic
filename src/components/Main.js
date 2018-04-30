import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-4 text-center">
                    <div className="col-4">
                        <a href="portraits.html" className="btn btn-primary btn-lg">Portraits</a>
                    </div>
                    <div className="col-4">
                        <a href="http://animorphic.photoreflect.com" target="_blank" className="btn btn-primary btn-lg">Client
                            Login</a>
                    </div>
                    <div className="col-4">
                        <a href="contacts.html" className="btn btn-primary btn-lg">Contact</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
