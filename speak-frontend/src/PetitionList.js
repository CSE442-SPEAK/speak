import React, { Component } from 'react';
import PetitionListElement from './PetitionListElement';
import './PetitionList.css';

class PetitionList extends Component {

  constructor(props) {
      super(props);
      this.state = {
          petitions: []
      };
      this.componentDidMount = this.componentDidMount.bind(this);

  }

  componentDidMount() {
      fetch('https://speak-api-186516.appspot.com/petitions')
      .then( response => response.json())
      .then( petitions =>
          this.setState(
              {petitions}
          )
       );
  }

  render() {
    return (
      <div className="PetitionList">
        <h1>Petitions</h1>
          {this.state.petitions.map(petition =>
            <div key={petition.petition_id}>
                <PetitionListElement id={petition.petition_id} title={petition.title} snippet={petition.snippet}/>
            </div>)}
      </div>
    );
  }
}

export default PetitionList;
