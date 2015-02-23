/*
 * Represents each tile of map.
 */
var React = require('react');
var Square = require('./Square.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  slice: function(arr, begin, last) {
    var count = last - begin + 1;
    var className = "pure-u-1-" + count;
    return (
      <div className={className}>
      {arr.slice(begin, last+1).map(function(item) {
          return <Square landType={item["type"]} production={item["production"]} trade={item["trade"]} />;
      })}
      </div>
      );
  },

  render: function() {
    var arr = [
      {"type":'desert', "production":1},
      {"type":'water', "trade":1},
      {"type":'desert', "production":1},
      {"type":'desert', "production":1},
      {"type":'desert', "production":1},
      {"type":'desert', "production":1},
      {"type":'desert', "production":1},
      {"type":'desert', "production":1},
      {"type":'desert', "production":1},
      {"type":'desert', "production":1},
      {"type":'desert', "production":1},
      {"type":'desert', "production":1},
      {"type":'desert', "production":1},
      {"type":'desert', "production":1},
      {"type":'desert', "production":1},
      {"type":'desert', "production":1}
        ];
    return (
      <div className="pure-g map">
        {this.slice(arr, 0, 3)}
        {this.slice(arr, 4, 7)}
        {this.slice(arr, 8, 11)}
        {this.slice(arr, 12, 15)}
      </div>
      );
  },

  renderOld: function() {
    return (
      <div className="pure-g map">
        <div className="pure-u-1-4">
          <Square landType="desert" trade="1" resource="絹" />
          <Square landType="water" trade="1" />
          <Square landType="water" trade="1" />
          <Square landType="desert" trade="1" />
        </div>
        <div className="pure-u-1-4">
          <Square landType="desert" trade="1" />
          <Square landType="mountain" trade="1" />
          <Square landType="desert" trade="1" />
          <Square landType="desert" trade="1" />
        </div>
        <div className="pure-u-1-4">
          <Square landType="desert" trade="1" />
          <Square landType="mountain" trade="1" />
          <Square landType="desert" trade="1" />
          <Square landType="desert" trade="1" />
        </div>
        <div className="pure-u-1-4">
          <Square landType="desert" trade="1" />
          <Square landType="mountain" trade="1" />
          <Square landType="desert" trade="1" />
          <Square landType="desert" trade="1" />
        </div>
      </div>
    );
  }
});