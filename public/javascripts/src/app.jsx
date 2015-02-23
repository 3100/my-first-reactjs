var React = require('react');
var WorldMap = require('./WorldMap.jsx');

var jsonPath = 'map.json';
// TODO use
var players = ['astec', 'america', 'arab', 'england'];

React.render(
    <div>
      <WorldMap jsonPath={jsonPath} players={players} />
    </div>,
    document.getElementById('example')
    );
