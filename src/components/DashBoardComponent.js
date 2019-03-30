import React, { Component , Fragment} from 'react';
import UserListComponent from '../components/UserListComponent';
import CardComponent from '../components/CardComponent';

// Klassen innehåller olika states som används i komponenterna, funktioner som
// hanterar värdet i inputfält, och de olika knapparnas funktioner.

class DashBoardComponent extends Component {
// Sätter states och binder funktioner till this
  constructor(props) {
  super(props);
  this.state ={
          userList:["Jennie", "Eva"],
          value:"",
          color:true
         };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

// Eventfunktion som ändrar statet på value när man skriver i inputfältet
  handleChange(event) {
    this.setState({value: event.target.value});
  }

// Eventfunktion som lägger ihop den befintliga UserList med den nya användaren som
// skrivs in i inputfältet och sparas i value-statet
  handleSubmit(event) {
    const newUsers = this.state.userList.concat([this.state.value]);
    this.setState({userList: newUsers});
    event.preventDefault();
  }

// Funktion som tar bort en användare från UsterList
  removeUserName = (e) => {
    const removeUsers = this.state.userList.slice(1);
    this.setState({userList: removeUsers});
  }

// Funktion som ändrar statet på color mellan true och false
  toggleColor = (e) => {
    this.setState({
      color: !this.state.color
    })
  }


  render(){
    return (
      <Fragment>
      <div id="card">
        <CardComponent>
        <ul>
          {this.state.userList.map((user, index) =>
            <UserListComponent key={index} color={this.state.color}>
              {user}
            </UserListComponent>
          )}
        </ul>
          <div>
            <button onClick={() => this.toggleColor(this.state.color)} >Change color</button>
          </div>
        </CardComponent>
      </div>

      <div id="card" >
        <CardComponent>
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="input" placeholder="Name" value={this.state.value} onChange={this.handleChange} />
          <br/>
            <input type="submit" id="submit" value="Submit"/>
          </form>
          <br/>
          <div>
            <button onClick={this.removeUserName} >Remove</button>
          </div>
        </CardComponent>
      </div>
    </Fragment>
    );
  }
}

export default DashBoardComponent;
