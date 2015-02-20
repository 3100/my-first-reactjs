var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {value1: 'test', value2: 'value'};
  },
  componentDidMount: function() {
    this.loadFromServer();
    setInterval(this.loadFromServer, this.props.pollInterval);
  },
  loadFromServer: function() {
    $.ajax({
      url: this.props.url,
    dataType: 'json',
    success: function(data) {
      this.setState({value1: data["key"], value2: data["value"]});
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(this.props.url, status, erro.toString());
    }.bind(this)
    });
  },
  render: function() {
    return (
      <div>
        <p>{this.props.value1}</p>
        <p>{this.props.value2}</p>
      </div>
    );
  }
});
