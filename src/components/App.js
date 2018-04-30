import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import { Carousel } from 'react-responsive-carousel';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
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
            </div>
        );
    }
}

export default App;
