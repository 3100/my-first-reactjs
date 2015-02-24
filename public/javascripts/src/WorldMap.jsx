var React = require('react');
var MapTile = require('./MapTile.jsx');
var Request = require('superagent');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadFromServer();
  },
  loadFromServer: function() {
    Request
    .get(this.props.jsonPath)
    .set('Accept', 'application/json')
    .end(function(res) {
      if (res.error) {
        console.error(this.props.jsonPath, res.status, res.error.toString());
      } else {
        console.log("ok");
        this.setState({data: this.pickPlayers(res.body)});
        console.log(this.state.data);
        //this.setState({data: res.body});
      }
    }.bind(this));
  },

  // for lab
  pickPlayers: function(data) {
    return data.filter(function(item, index) {
      return this.props.players.indexOf(item["id"]) >= 0;
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        {this.state.data.map(function(item){
          return (
            <MapTile squares={item["map"]} opened="false"></MapTile>
            );
        })}
      </div>
    );
  }
});
