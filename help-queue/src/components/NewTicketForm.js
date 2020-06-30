import React from 'react';
import { v4 } from 'uuid';

function NewTicketForm(props) {
	return (
		<React.Fragment>
			<form onSubmit={handleNewTicketForm}>
				<input type="text" name="names" placeholder="Pair Names" />
				<input type="text" name="location" placeholder="Enter your Location" />
				<textarea name="issue" placeholder="Describe Your Issue" />
				<button type="submit">Help!</button>
			</form>
		</React.Fragment>
	);
	function handleNewTicketForm(event) {
		event.preventDefault();
		console.log(event.target.names.value);
		console.log(event.target.location.value);
		console.log(event.target.issue.value);
	}
}

export default NewTicketForm;
