import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

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
			<div>
				<Nav tabs>
					<NavItem>
						<NavLink
							className={ this.state.activeTab === '1' ? 'active' : '' }
							onClick={() => { this.toggle('1'); }}
						>
							Tab1
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={ this.state.activeTab === '2' ? 'active' : '' }
							onClick={() => { this.toggle('2'); }}
						>
							Moar Tabs
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<div>
							Content1
						</div>
					</TabPane>
					<TabPane tabId="2">
						<div>
							Content2
						</div>
					</TabPane>
				</TabContent>
			</div>
        );
    }
}

export default Investment;
