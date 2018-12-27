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
                        <img src="/img/portrait_01.jpg"/>
                    </div>
                    <div>
						<img src="/img/portrait_02.jpg"/>
                    </div>
                    <div>
						<img src="/img/portrait_03.jpg"/>
                    </div>
					<div>
						<img src="/img/portrait_04.jpg"/>
					</div>
					<div>
						<img src="/img/portrait_05.jpg"/>
					</div>
					<div>
						<img src="/img/portrait_06.jpg"/>
					</div>
					<div>
						<img src="/img/portrait_07.jpg"/>
					</div>
                </Carousel>
                <Main/>
                <Investment/>
                <Contact/>
                <div className="container">
                    <small>Copyright &copy; 2018 Animorphic Studios. All rights reserved.</small>
                </div>
            </div>
        );
    }
}

export default App;
