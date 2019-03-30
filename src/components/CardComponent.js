import React, { Component } from 'react';

// Klassen sätter ett första värde till toggleknappen show/hide content, det finns
// en funktion som togglar mellan visa innehåll och inte visa innehåll. Renderar
// knappen och vad som ska visas.

class CardComponent extends Component {

  constructor(props){
    super(props);

    this.state = {
      showHide: true
    }
  }

 // Funktion som ändrar värdet mellan true och false i togglingen mellan show och hide.
  toggleContent = (e) => {
      this.setState({
        showHide: !this.state.showHide
      })
    }

  render(){
    return (
        <div>
          {this.state.showHide?this.props.children:null}
          <div>
            <button onClick={this.toggleContent}>Show content</button>
          </div>
        </div>
    );
  }
}

export default CardComponent;
