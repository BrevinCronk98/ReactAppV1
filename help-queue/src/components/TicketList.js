import React from 'react';
import Ticket from './Ticket';

const masterTicketList = [
	{
		names: 'Thato and Haley',
		location: '3A',
		issue: "Firebase won't save record"
	},
	{
		names: 'Slater and Kinney',
		location: '4B',
		issue: 'Prop types are throwing an error'
	},
	{
		names: 'Imani and Jacob',
		location: '9F',
		issue: "Child component isn't rendering"
	}
];

function TicketList() {
	return (
		<React.Fragment>
			<hr />
			{masterTicketList.map((ticket, index) => (
				<Ticket location={ticket.location} names={ticket.names} issue={ticket.issue} key={index} />
			))}
		</React.Fragment>
	);
}

export default TicketList;
