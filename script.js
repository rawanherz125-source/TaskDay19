$(document).ready(function () {

    $("body").css("margin", "40px");

    var tabs = $("<div></div>");

    for (var i = 1; i <= 4; i++) {
        var tab = $("<button></button>")
            .text("Tab " + i)
            .attr("id", "tab" + i)
            .css({
                "border": "none",
                "padding": "10px 15px",
                "background-color": "#eeeeee",
                "cursor": "pointer"
            });

        tabs.append(tab);
    }

    $("body").append(tabs);

    var content = $("<div></div>").css({
        "width": "540px",
        "height": "70px",
        "background-color": "#d9d9d9",
        "padding": "15px",
        "box-sizing": "border-box"
    });

    for (var i = 1; i <= 4; i++) {
        var div = $("<div></div>")
            .attr("id", "content" + i)
            .text("Content " + i);

        if (i != 1) {
            div.hide();
        }

        content.append(div);
    }

    $("body").append(content);

    $("#tab1").css("border-top", "2px solid #8b5cf6");

    $("button").click(function () {

        $("button").css("border-top", "2px solid transparent");

        $(this).css("border-top", "2px solid #8b5cf6");

        $("[id^='content']").hide();

        var id = $(this).attr("id");

        var number = id.replace("tab", "");

        $("#content" + number).show();

    });

});