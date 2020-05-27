import React from "react";
import PropTypes from "prop-types";
import Ticket from "./Ticket";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function TicketList(props){
  // The useFirestoreConnect() hook comes from react-redux-firebase.
  useFirestoreConnect([
    { collection: 'tickets' }
  ]);

  // The useSelector() hook comes from react-redux.
  //state.firestore.ordered.tickets is the state slice we're grabbing from
  const tickets = useSelector(state => state.firestore.ordered.tickets);

  if (isLoaded(tickets)) {
  return (
    <React.Fragment>
      <hr/>
      {tickets.map((ticket) => {
        return <TicketList
          whenTicketClicked = { props.onTicketSelection }
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          id={ticket.id}
          key={ticket.id}/>
      })}
    </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

TicketList.propTypes = {
  // ticketList: PropTypes.object,
  onTicketSelection: PropTypes.func
};

export default TicketList;