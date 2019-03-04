var player = document.getElementById('player');
player.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('go').click();
  }
});

function setIframeSource() {
  var playerName = player.value.toLowerCase();
  var url = `https://app.datadoghq.com/graph/embed?token=891f240a90034e20765e89981ff961254898da9647954a0000079a179f2910bf&height=400&width=800&legend=true&season=*&player=player:${playerName}`;

  var iframe = document.getElementById('rank-for-player');
  iframe.src = url;
}
