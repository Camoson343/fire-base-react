import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props){
    super(props);

    this.state ={
      rooms: []
    }
      this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount(){
    this.roomsRef.on('child_added', snapshot => {
      this.setState({ rooms: this.state.rooms.concat( snapshot.val() ) });
    });
  }

  render(){
    return(
      <h1>testtest</h1>
    );
  }
}

export default RoomList;
