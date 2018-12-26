import React, {Component} from 'react';
import './App.scss';
import Header from "./Header";
import Main from "./Main";
import Contact from "./Contact";
import Investment from "./Investment";

import { Carousel } from 'react-responsive-carousel';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Carousel className="mb-4" showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
                    <div>
                        <img src="/img/1.jpg"/>
                    </div>
                    <div>
                        <img src="/img/2.jpg"/>
                    </div>
                    <div>
                        <img src="/img/3.jpg"/>
                    </div>
                </Carousel>
                <Main/>
                <Investment/>
                <Contact/>
            </div>
        );
    }
}

export default App;
