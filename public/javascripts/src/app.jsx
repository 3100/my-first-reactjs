var React = require('react');
var WorldMap = require('./WorldMap.jsx');

var jsonPath = 'map.json';

var shuffle = function(a) {
  for (var i = a.length-1; i>=0; --i) {
    var r = Math.floor(i*Math.random());
    var tmp = a[i];
    a[i] = a[r];
    a[r] = tmp;
  }
  return a;
};

var allPlayers = [
  'aztec', 'america', 'arab', 'england',
  'france', 'mongolia', 'roma', 'russia',
  'spain', 'china', 'germany', 'japan',
  'india', 'greece', 'egypt', 'zulu'
];

var players = shuffle(allPlayers).slice(0, 4);
console.log(players);

React.render(
  <div>
    <ul>
      {players.map(function(p) {
        return <li>{p}</li>;
      })}
    </ul>
    <WorldMap jsonPath={jsonPath} players={players} />
  </div>,
  document.getElementById('example')
);
