function show() {
    var s = "";
    s += "网页可见区域宽度：" + document.body.clientWidth;
    s += "\n网页可见区域高度：" + document.body.clientHeight;
    s += "\n网页可见区域宽度（包括边线）：" + document.body.offsetWidth;
    s += "\n网页可见区域高度（包括边线）：" + document.body.offsetHeight;
    s += "\n网页正文宽度：" + document.body.scrollWidth;
    s += "\n网页正文高度：" + document.body.scrollHeight;
    s += "\n屏幕可用工作区域宽度：" + window.screen.availWidth;
    s += "\n屏幕可用工作区域高度：" + window.screen.availHeight;
    s += "\n屏幕分辨率宽度：" + window.screen.width;
    s += "\n屏幕分辨率高度：" + window.screen.height;
    console.log(s);
}
// show()r
// window.onload=function(){


var qh,h,w;
window.onresize = function () {
    vive();
}
function vive() {
    qh = $("header").height() + $("footer").height() + 120;
    h = window.screen.availHeight - qh + "px";
    console.log(1);
    $(".item").css("max-height", h);
    $(".item img").css("max-height", h);
    w = document.body.offsetWidth / 2 - 100 + "px";
    console.log(h,w)
    $("#Visit").css("margin-left", w);
};
vive();

var caution = false

function setCookie(name, value, expires, path, domain, secure) {
    var curCookie = name + "=" + escape(value) +
        ((expires) ? ";expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? ";secure" : "")
    if (!caution || (name + "=" + escape(value)).length <= 4000) {
        document.cookie = curCookie
    } else if (confirm("Cookie exceeds 4KB and will be cut!")) {
        document.cookie = curCookie
    }
}

function getCookie(name) {
    var prefix = name + "="
    var cookieStartIndex = document.cookie.indexOf(prefix)
    if (cookieStartIndex == -1) {
        return null
    }
    var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length)
    if (cookieEndIndex == -1) {
        cookieEndIndex = document.cookie.length
    }
    return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex))
}

function deleteCookie(name, path, domain) {
    if (getCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT"
    }
}

function fixDate(date) {
    var base = new Date(0)
    var skew = base.getTime()
    if (skew > 0) {
        date.setTime(date.getTime() - skew)
    }
}
var now = new Date()
fixDate(now)
now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000)
var visits = getCookie("counter")
if (!visits) {
    visits = 1;
} else {
    visits = parseInt(visits) + 1;
}
setCookie("counter", visits, now);

// document.write("您是到访的第" + visits + "位用户！")



$("#Visit").text("您是到访的第" + visits + "位用户！");
