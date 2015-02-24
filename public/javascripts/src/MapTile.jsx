/*
 * Represents each tile of map.
 */
var React = require('react');
var Square = require('./Square.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.setState({opened: this.props.opened});
  },
  handleClick: function(event) {
    console.log("MapTile::Clicked");
    this.setState({opened: "true"});
  },
  slice: function(arr, begin, last) {
    var count = last - begin + 1;
    var className = "pure-u-1-" + count;
    return (
      <div className={className}>
      {arr.slice(begin, last+1).map(function(item) {
          return <Square landType={item["type"]} production={item["production"]} trade={item["trade"]} culture={item["culture"]} resource={item["resource"]} />;
      })}
      </div>
      );
  },
  render: function() {
    var opened = this.state.opened === "true";
    var className = opened ? "pure-g map" : "map fog";
    if (opened) {
      return (
        <div className = {className}>
          {this.slice(this.props.squares, 0, 3)}
          {this.slice(this.props.squares, 4, 7)}
          {this.slice(this.props.squares, 8, 11)}
          {this.slice(this.props.squares, 12, 15)}
        </div>
      );
    } else {
      return <div className={className} onClick={this.handleClick} />;
    }
  }
});
