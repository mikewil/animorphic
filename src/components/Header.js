import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
                <img alt="Animorphic Studios" src="img/animorphic_studios_logo.svg" width="400" />
			</a>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">Portraits</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="http://animorphic.photoreflect.com" target="_blank" >Client Login</a>
					</li>
					<li className="nav-item">
						<a className="btn btn-outline-primary mx-2" href="#contact">Let's Talk!</a>
					</li>
					<li className="nav-item">
						<a href="https://www.facebook.com/AnimorphicStudios/" target="_blank">
							<img alt="Facebook" src="img/fb_icon.svg" height="38" />
						</a>
					</li>
				</ul>
			</div>
		</nav>
    );
  }
}

export default Header;
