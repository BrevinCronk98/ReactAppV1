import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formVisibleOnPage: false
		};
	}

	render() {
		let currentlyVisiblyState = null;
		if (this.state.formVisibleOnPage) {
			currentlyVisiblyState = <NewTicketForm />;
		} else {
			currentlyVisiblyState = <TicketList />;
		}
		return <React.Fragment> {currentlyVisiblyState} </React.Fragment>;
	}
}

export default TicketControl;
