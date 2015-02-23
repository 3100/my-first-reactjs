var React = require('react');
//var HelloWorld = require('./HelloWorld.jsx');
//var BindSample = require('./BindSample.jsx');
var MapTile = require('./MapTile.jsx');
var Square = require('./Square.jsx');
React.render(
    <div>
      <MapTile />
      <MapTile />
    </div>,
    document.getElementById('example')
    );
