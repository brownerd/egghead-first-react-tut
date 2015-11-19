import React from 'react';

var Profile = React.createClass({

  componentDidMount: function() {
    console.log( 'the component id mount' );
  },
  getInitialState: function() {
    // Usually initialize the state with empty data
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">User Profile Component</div>
        <div className="col-md-4">Repos Component</div>
        <div className="col-md-4">Notes Component</div>
      </div>
    )
  }
});

export default Profile;
