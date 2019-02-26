function setIframeSource() {
  var dropdown = document.getElementById('player');
  var iframe = document.getElementById('rank-for-player');
  var url = dropdown.options[dropdown.selectedIndex].value;
  iframe.src = url;
}
