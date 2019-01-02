import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import './Investment.scss';

class Investment extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: '1'
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}

    render() {
        return (
			<div id="investment" className="container investment">
				<h2>Investment</h2>

				<p>Each portrait package includes online proofs to order prints from home and the high resolution portrait disc with print rights for each session. All portraits are taken within 30 minutes of Dayton, Ohio.</p>

				<Nav tabs>
					<NavItem>
						<NavLink className={ this.state.activeTab === '1' ? 'active' : '' } onClick={() => { this.toggle('1'); }}>
							Basic<br /><h4>$250</h4>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className={ this.state.activeTab === '2' ? 'active' : '' } onClick={() => { this.toggle('2'); }}>
							Deluxe<br /><h4>$500</h4>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className={ this.state.activeTab === '3' ? 'active' : '' } onClick={() => { this.toggle('3'); }}>
							Baby<br /><h4>$150</h4>
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<p>One-hour session at the location of your choice.</p>
						<h3>Package includes:</h3>
						<ul>
							<li>1 hour</li>
							<li>1 location</li>
							<li>1 outfit</li>
							<li>Pictures on disc with print release</li>
							<li>Online proofs for easy ordering</li>
						</ul>
					</TabPane>
					<TabPane tabId="2">
						<p>Our extended session with up to 2 locations.</p>
						<h3>Package includes:</h3>
						<ul>
							<li>2 hours</li>
							<li>1-2 locations</li>
							<li>Up to three outfits</li>
							<li>Pictures on disc with print release</li>
							<li>Online proofs for easy ordering</li>
						</ul>
					</TabPane>
					<TabPane tabId="3">
						<p>A session just for babies, taken in your home where it's most convenient.</p>
						<h3>Package includes:</h3>
						<ul>
							<li>30 minutes in your home</li>
							<li>1-3 baby backgrounds</li>
							<li>1-3 outfits</li>
							<li>Pictures on disc with print release</li>
							<li>Online proofs for easy ordering</li>
						</ul>
					</TabPane>
				</TabContent>
			</div>
        );
    }
}

export default Investment;
