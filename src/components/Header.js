import React, { Component } from 'react';
import {
	Button,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

export class Header extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar color="light" light bg-light expand="md">
					<NavbarBrand>
						<img src="/img/animorphic_studios_logo.svg" />
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="#investment">Investment</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="http://animorphic.photoreflect.com" target="_blank">Clients</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#contact" target="_blank">
									<Button color="primary" outline>Let's Talk</Button>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://www.facebook.com/AnimorphicStudios/" target="_blank">
									<img alt="Facebook" src="img/fb_icon.svg" height="38" />
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Header;