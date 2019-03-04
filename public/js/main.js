function setIframeSource() {
  var player = document.getElementById('player');
  playerName = player.options[player.selectedIndex].text.toLowerCase();
  var url = `https://app.datadoghq.com/graph/embed?token=891f240a90034e20765e89981ff961254898da9647954a0000079a179f2910bf&height=400&width=800&legend=true&season=*&player=player:${playerName}`;

  var iframe = document.getElementById('rank-for-player');
  iframe.src = url;
}
