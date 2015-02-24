/*
 * Represents each tile of map.
 */
var React = require('react');
var Square = require('./Square.jsx');

// 初期位置は南。時計回り
var ORIENTATION = {
  SOUTH: 0,
  WEST: 1,
  NORTH: 2,
  EAST: 3
};
var orientationString = ['south','west','north','east'];
/* 90度時計回り */
var order = [
  3,7,11,15,
  2,6,10,14,
  1,5,9,13,
  0,4,8,12
];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      orientation: ORIENTATION.SOUTH
    };
  },
  componentDidMount: function() {
    this.setState({opened: this.props.opened, squares: this.props.squares });
  },
  open: function(event) {
    this.setState({opened: "true"});
  },
  rotate: function(event) {
    var squares = order.map(function(o) {
      return this.state.squares[o];
    }.bind(this));
    var orientation = (this.state.orientation + 1) % 4;
    this.setState({squares: squares, orientation: orientation});
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
    className += ' ' + orientationString[this.state.orientation];
    if (opened) {
      return (
        <div className = {className} onClick={this.rotate}>
          {this.slice(this.state.squares, 0, 3)}
          {this.slice(this.state.squares, 4, 7)}
          {this.slice(this.state.squares, 8, 11)}
          {this.slice(this.state.squares, 12, 15)}
        </div>
      );
    } else {
      return <div className={className} onClick={this.open} />;
    }
  }
});
