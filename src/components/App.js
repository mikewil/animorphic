import React, {Component} from 'react';
import './App.scss';
import Header from './Header';
import Main from './Main';
import Contact from './Contact';
import Investment from './Investment';
import { Carousel } from 'react-responsive-carousel';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Carousel className="mb-4" showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
                    <div>
                        <img src="/img/portraits-1.jpg"/>
                    </div>
                    <div>
						<img src="/img/portraits-2.jpg"/>
                    </div>
                    <div>
						<img src="/img/portraits-3.jpg"/>
                    </div>
					<div>
						<img src="/img/portraits-4.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-5.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-6.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-7.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-8.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-9.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-10.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-11.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-12.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-13.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-14.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-15.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-16.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-17.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-18.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-19.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-20.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-21.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-22.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-23.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-24.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-25.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-26.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-27.jpg"/>
					</div>
					<div>
						<img src="/img/portraits-28.jpg"/>
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
