var ws = new WebSocket('ws://localhost:8080/');

ws.onopen = function(event) {
  ws.send('unique.mo')
}

ws.onmessage = function(event) {
  console.log('Receive from server: ', event.data);
};
