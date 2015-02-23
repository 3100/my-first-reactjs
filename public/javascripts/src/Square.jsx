/*
 * Each Cell
 */
var React = require('react');

//var LAND_TYPE = {
//  MOUNTAIN: 0,
//  FOREST: 1,
//  GRASSLAND: 2,
//  DESERT: 3,
//  WATER: 4
//};

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  displayCulture: function() {
    if (this.props.culture >= 1) {
      return <span>文{this.props.culture}</span>;
    }
  },

  displayTrade: function() {
    if (this.props.trade >= 1) {
      return <span>商{this.props.trade}</span>;
    }
  },

  displayProduction: function() {
    if (this.props.production >= 1) {
      return <span>生{this.props.production}</span>;
    }
  },

  displayResource: function() {
    if (this.props.resource) {
      return <span>{this.props.resource}</span>;
    }
  },

  render: function() {
    var cl = this.props.landType;
    cl += ' square';
    return (
      <div className={cl}>
        {this.displayCulture()}
        {this.displayTrade()}
        {this.displayProduction()}
        {this.displayResource()}
      </div>
    );
  }
});
