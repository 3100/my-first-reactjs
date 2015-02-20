var React = require('react');
//var HelloWorld = require('./HelloWorld.jsx');
var BindSample = require('./BindSample.jsx');

React.render(
    //<BindSample value1="hoge" value2="huga" />,
    <BindSample url="sample.json" pollInterval={5000} />,
    document.getElementById('example')
    );
