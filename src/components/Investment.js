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

				<p>Choose from our variety of portrait packages and skip the sitting fee. Sessions may be indoors in your home or with backdrops, or they may be outdoors within 30 miles of Beavercreek, Ohio. You’ll receive online proofs to order prints from home and the High Resolution Portrait disc with print rights for each session.</p>

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
							Student<br /><h4>$400+</h4>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className={ this.state.activeTab === '4' ? 'active' : '' } onClick={() => { this.toggle('4'); }}>
							Engagement<br /><h4>$350</h4>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className={ this.state.activeTab === '5' ? 'active' : '' } onClick={() => { this.toggle('5'); }}>
							Newborn<br /><h4>$150</h4>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className={ this.state.activeTab === '6' ? 'active' : '' } onClick={() => { this.toggle('6'); }}>
							Headshot<br /><h4>$125</h4>
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<p>Our basic session can be indoors or outdoors and may last up to 1 hour.</p>
						<h3>Package includes:</h3>
						<ul>
							<li>1 hour</li>
							<li>1 location</li>
							<li>1 outfit</li>
							<li>Pictures on disc with print release</li>
							<li>Online Proofs for easy ordering</li>
						</ul>
					</TabPane>
					<TabPane tabId="2">
						<p>Our extended session with up to 2 locations.</p>
						<h3>Package includes:</h3>
						<ul>
							<li>2 hours</li>
							<li>1-2 locations</li>
							<li>Unlimited outfits as time allows</li>
							<li>Pictures on disc with print release</li>
							<li>Online Proofs for easy ordering</li>
						</ul>
					</TabPane>
					<TabPane tabId="3">
						<p>Student sessions are designed specifically for school portraits and senior pictures. You
							may choose from a traditional portrait session indoors at home and on-location
							sessions. </p>
						<h3>$400 Student Session includes:</h3>
						<ul>
							<li>1 hour</li>
							<li>1 location</li>
							<li>Up to 3 outfits</li>
							<li>Pictures on disc with print release</li>
							<li>3 matching Accordion Books</li>
							<li>Custom Metal Wallet Print Tin</li>
							<li>Prints: 32 Wallets, 2-5x7, 1-8x10</li>
							<li>Online Proofs for easy ordering</li>
						</ul>
						<h3>$800 Student Session includes:</h3>
						<ul>
							<li>2-3 hours</li>
							<li>1-3 locations</li>
							<li>Unlimited outfits as time allows</li>
							<li>Pictures on disc with print release</li>
							<li>6 matching Accordion Books</li>
							<li>Custom Metal Wallet Print Tin</li>
							<li>Prints: 64 Wallets, 4-5x7, 2-8x10, 1-11x14</li>
							<li>25 Boutique Photo Announcement Cards</li>
							<li>Online Proofs for easy ordering</li>
						</ul>
						<p>Add announcement cards for 15% off with these packages.</p>
					</TabPane>
					<TabPane tabId="4">
						<p>This is a special session for couples planning to marry. You will receive Accordion
							Books, prints, and announcement cards and can visit up to 2 locations. </p>
						<h3>Package includes:</h3>
						<ul>
							<li>1 hour</li>
							<li>1-2 locations</li>
							<li>1-3 outfits</li>
							<li>Pictures on disc with print release</li>
							<li>3 matching Accordion Books</li>
							<li>Prints: 2-5x7, 1-8x10</li>
							<li>25 Boutique Photo Announcement Cards</li>
							<li>Online Proofs for easy ordering</li>
						</ul>
						<p>Add announcement cards for 15% off with this package.</p>
					</TabPane>
					<TabPane tabId="5">
						<p>A session just for newborns, taken in your home where it's most convenient. </p>
						<h3>Package includes:</h3>
						<ul>
							<li>30 minutes in your home</li>
							<li>1-3 baby backgrounds</li>
							<li>1-3 outfits</li>
							<li>Pictures on disc with print release</li>
							<li>3 matching Accordion Books</li>
							<li>Online Proofs for easy ordering</li>
						</ul>
						<p>Add announcement cards for 15% off with this package.</p>
					</TabPane>
					<TabPane tabId="6">
						<p>The Simple Headshot package includes a mini session in front of a backdrop or outdoors.</p>
						<h3>Package includes:</h3>
						<ul>
							<li>30 minutes</li>
							<li>1 outfit</li>
							<li>1-2 backgrounds</li>
							<li>Pictures on disc with print release</li>
							<li>Online Proofs for easy ordering</li>
						</ul>
					</TabPane>
				</TabContent>

				<h3>Schedule a session for:</h3>
				<ul>
					<li>Individuals</li>
					<li>Couples</li>
					<li>Families</li>
					<li>Children</li>
					<li>Babies</li>
					<li>High School Seniors</li>
					<li>School Pictures</li>
					<li>Pets</li>
					<li>Engagement</li>
					<li>Anniversary</li>
					<li>Smash Cake</li>
					<li>Trash the Dress</li>
					<li>Maternity</li>
					<li>Graduation</li>
					<li>Reunions*</li>
					<li>Dances*</li>
					<li>Events*</li>
					<li>and more</li>
				</ul>
				<small>* Per-attendee rates available for teams and events.</small>
			</div>
        );
    }
}

export default Investment;
