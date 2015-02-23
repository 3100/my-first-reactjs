var React = require('react');
var MapTile = require('./MapTile.jsx');


module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadFromServer();
  },

  loadFromServer: function() {
    $.ajax({
      url: this.props.jsonPath,
      dataType: 'json',
      success: function(data) {
        console.log("ok");
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.jsonPath, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div>
        {this.state.data.map(function(item){
          return <MapTile squares={item["map"]} />;
        })}
      </div>
    );
  }
});


