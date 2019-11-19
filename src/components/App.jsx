import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
// import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       masterTicketList: []
//     };
//     this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
//     //the handleAddingNewTicketToList() function uses this when it calls this.setState(). That means we'll have to bind the method in the component's constructor
//   }

//   handleAddingNewTicketToList(newTicket){
//     var newMasterTicketList = this.state.masterTicketList.slice();
//     // temporary copy 
//     newMasterTicketList.push(newTicket);
//     // Push the new ticket to this temporary version
//     this.setState({masterTicketList: newMasterTicketList});
//     // set state equal to this updated iteration of our array

//   }

//   render(){
//   return (
//     <div>
//       <Header/>
//       <Switch>
//         <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
//         <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
//       </Switch>
//     </div>
//   );
// }
}

export default App;