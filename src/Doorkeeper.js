function Doorkeeper() {
}

Doorkeeper.prototype.search = function() {

    $.getJSON('http://api.doorkeeper.jp/events?callback=?', function(response) {
        console.log(response);
    });
};
