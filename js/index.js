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
// show()
// 网页加载完成
// window.onload=function(){}
// $("#Visit").css("display","block");
// jscss(document.body.clientWidth);
var qh, h, n, w, hh;
if (document.body.clientWidth < 780) {
    $("#move,#mmm2").unbind("click")
}
if (document.body.clientWidth > 780) {
    $("#move,#mmm2").bind("click")
}
window.onresize = function () {
    // vive();
    if (document.body.clientWidth < 780) {
        $("#move,#mmm2").unbind("click")
    }
    if (document.body.clientWidth > 780) {
        $("#move,#mmm2").bind("click")
    }
    // console.log(document.body.clientWidth)
}
// 轮播图速度控制
$('.carousel').carousel({
    interval: 3000
})
// 控制轮播图过大
function vive() {
    qh = $("header").height() + $("footer").height() + 120;
    hh = window.screen.availHeight - qh;
    // console.log(1);
    if (hh < 500) {
        hh = 500;
    }

    h = hh + "px";
    $(".item").css("max-height", h);
    $(".item img").css("max-height", h);
    n = document.body.offsetWidth / 2;
    if (n <= 250) {
        n = 250;
    }
    w = n + "px";
    // console.log(h, w)
    // $("#Visit").css("margin-left", w);

};
// 采用媒体查询改变max-width
// vive();

// 计算访问人数
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
// alert("暂时没有开放此通道")
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


$("#foot1").append("<p align='center'>您是的第<span style='color:green;font-size: 20px;'>" + visits + 9845 + "</span>次到访用户！<p>");


// js处理公司简介,这里动态获取,页码改变等出发,
// css采用媒体查询没有,js使用有页面闪烁的效果,不采用
function jscss(i) {

    if (i > 980) {
        $("#mmm1,#mmm3").css("display", "block");
        $("#m-text").css("display", "none");
        $("#mmm2").attr("calss", "caption1 col-xs-6 col-md-5");
        $("#mmm1").attr("calss", "col-xs-6 col-md-3")
        $("#mmm3").attr("calss", "col-xs-6 col-md-3")
        $("#mmm2").css("width", "43%")
        console.log(1280);
    }

    if (i < 980 && i > 780) {
        $("#mmm3,#m-text").css("display", "none");
        $("#mmm1").css("display", "block");
        $("#mmm2").attr("calss", "col-xs-6 col-md-8");
        // $("#mmm2").attr("calss","col-xs-6 col-md-7")
        // $("#mmm2").attr("calss","col-xs-6 col-md-7")
        $("#mmm1").css("max-width", "300px")
        console.log(980)
    }
    if (i < 780) {
        $("#mmm3").css("display", "none");
        $("#mmm1").css("display", "none");
        $("#mmm2").css("width", "98%");
        console.log(780);
        $("#m-text").css("display", "block");
    }
}

$("#mmm2").click(function () {
    // alert(222)}
    $("#pop-up,#pop-down").css("display", "block")
    $("html,body").css("overflow-y", "hidden")
})
$("#move").click(function () {
    $("#pop-up,#pop-down").css("display", "none")
    $("html,body").css("overflow-y", "visible")
})

$("#mmm3 a,.m-guangao li").click(function () {
    var txt = escape(this.text);
    location.href = "xiangxi.html?=" + txt
})