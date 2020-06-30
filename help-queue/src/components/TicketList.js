import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props) {
	return (
		<React.Fragment>
			<hr />
			{props.ticketList.map((ticket, index) => (
				<Ticket location={ticket.location} names={ticket.names} issue={ticket.issue} key={index} />
			))}
		</React.Fragment>
	);
}

TicketList.propTypes = {
	ticketList: PropTypes.array
};
export default TicketList;
