var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
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
      console.log("ok");
      this.setState({data: data});
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(this.props.url, status, erro.toString());
    }.bind(this)
    });
  },
  render: function() {
    return (
      <div>
        {this.state.data.map(function(item) {
          return <span key={item["key"]}><h3>{item["key"]}</h3><p>{item["value"]}</p></span>;
        })}
      </div>
    );
  }
});
