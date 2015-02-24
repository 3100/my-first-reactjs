/*
 * Each Cell
 */
var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  handleClick: function(event) {
    console.log("Square::Clicked");
  },
  displayCulture: function() {
    if (this.props.culture >= 1) {
      return (
        <span>
          <img src="http://cf.geekdo-static.com/mbs/mb_18081_1.png" alt="文" />
          {this.props.culture > 1 ? this.props.trade: ""}
        </span>
      );
    }
  },
  displayTrade: function() {
    if (this.props.trade >= 1) {
      return (
        <span>
          <img src="http://cf.geekdo-static.com/mbs/mb_18742_1.png" alt="商" />
          {this.props.trade > 1 ? this.props.trade : ""}
        </span>
      );
    }
  },
  displayProduction: function() {
    if (this.props.production >= 1) {
      return (
        <span>
          <img src="http://cf.geekdo-static.com/mbs/mb_18743_1.png" alt="生" />
          {this.props.production > 1 ? this.props.production : ""}
        </span>
      );
    }
  },
  displayResource: function() {
    if (this.props.resource) {
      var src = '';
      switch(this.props.resource) {
        case 'コ':
          src = "http://cf.geekdo-static.com/mbs/mb_18741_1.png";
          break;
        case '麦':
          src = "http://cf.geekdo-static.com/mbs/mb_18746_1.png";
          break;
        case '絹':
          src = "http://cf.geekdo-static.com/mbs/mb_18148_0.png";
          break;
        case '鉄':
          src = "http://cf.geekdo-static.com/mbs/mb_18147_0.png";
          break;
        case '香':
          src = "http://cf.geekdo-static.com/mbs/mb_18149_1.png";
          break
        default:
      }
        return <div className="resource"><img src={src} alt={this.props.resource}/></div>;
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
