function Doorkeeper() {
}

Doorkeeper.prototype.search = function() {

    $.getJSON('http://api.doorkeeper.jp/events?callback=?', function(response) {
        $.each(response, function(i, obj){
            var event = obj.event;
            var tr = $("<tr/>");
            $("<td/>").text(event.title).appendTo(tr);
            $("<td/>").text(event.starts_at).appendTo(tr);
            $("<td/>").text(event.ends_at).appendTo(tr);
            tr.appendTo($("#events"));
        });
    });
};
