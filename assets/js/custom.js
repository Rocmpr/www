$("body").mousemove(function(i) {
    var e = i.pageX - 8,
        t = i.pageY - 8;
    $(".cursor").css({
        top: t + "px",
        left: e + "px"
    })
}), $("a").mousemove(function(i) {
    var e = i.pageX,
        t = i.pageY;
    $(".cursor").css({
        top: t + "px",
        left: e + "px"
    }), $(".cursor img").css({
        width: "32px"
    })
}), $("a").mouseleave(function(i) {
    $(".cursor img").css({
        width: "16px"
    })
})