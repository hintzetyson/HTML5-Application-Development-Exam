onmessage = function (event) {
    var info = event.data;
    var message = 'This Web Worker is showing ' + info + ' now';
    postMessage(message);
};