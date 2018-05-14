// 页面样式动态设定固定值
setTimeout(function () {
    var wid = $("#tourline_sn").width();
    // console.log(wid)
    $(".am-selected button").attr("class",
        "am-selected-btn am-btn am-dropdown-toggle am-btn-default form-control")
    $(".am-selected button").css("width", wid + "px")
    // console.log($("#ambzd").children())
}, 100)

// 时间处理
var zuizhongriqis;

$("#btntime1").click(function () {
    if ($('#ind').is(':hidden')) {
        $("#ind").show();
        $("#uptime").hide();
        $("#endtime").hide();
        // $("#shijianxuanze").hide();
        $("#shijianxuanze").attr("disabled", "disabled")
        // console.log($("#ind").val())
    } else {
        // console.log($("#txex").val())
        $("#ind").hide();
        $("#uptime").show();
        $("#endtime").show();
        // $("#shijianxuanze").show();
        $("#shijianxuanze").removeAttr("disabled")
    }
})
// 动态注入线路和地址
var uername;
$.ajax({
    type: "GET",
    url: "http://192.168.0.107:8080/oyetravel/queryMentionTourLineListForSupplier.htm",
    // dataType: "jsonp",
    success: function (data) {
        uername = data;
        for (let i = 0; i < data.length; i++) {
            // console.log(data[i])
            $("#title").append("<option>" + data[i].title + "</option>");
            for (let j = 0; j < data[i].cityName.length; j++) {
                // console.log(data[i].cityName)
                $("#selects").append("<option value=i>" + data[i] + "</option>")
            }
        }

    }
})
// 生成线路编号

function tietget(p) {
    // console.log($(p).val())
    $("#selects").html(" ")
    for (let i = 0; i < uername.length; i++) {

        if ($(p).val() == uername[i].title) {
            // console.log(uername[i].cityName[0].split(","))
            for (let j = 0; j < uername[i].cityName[0].split(",").length; j++) {
                $("#selects").append("<option value=i>" + uername[i].cityName[0].split(",")[j] + "</option>")
            }
            $("#tourline_sn").val(uername[i].tourline_sn)
        }

    }

}

// 获取时间范围
var timeda = ""

function tiemdate() {
    if ($('#ind').is(':hidden')) {
        timeda = zuizhongriqis;
        // console.log($("#ind").val())
    } else {
        timeda = $("#ind").val();
    }
}

// 跳转页面
function aaa() { // 时间地点 这里不统一获取
    tiemdate()
    $("#tour_range").val()
    console.log($("#tour_range").val())
    // 这里加一个输入判断 只做了防止报错的判断
    if (timeda == undefined || $("#tourlineHead").val() == "" || $("#tourlinePhone").val() == "" || $("#adult_limit").val() == "" || $("#adult_buy_max").val() == "" || $("#tour_feature").val() == "" || $("#price_explain").val() == "" || $("#travel_restrictions").val() == "" || $("#is_refund").val() == "" || $("#appoint_desc").val() == "" || $("#tour_desc").val() == "" || $("#childPrice").val() == "") {
        alert("你们写完必填项")
        return false
    }


    var scr = []
    /**
     * scr [{日期:a,地址:xx,价格:xx},{}]
     */

    var timed = timeda.split(",")
    // timeda //日期
    var cityName = $(".am-fl").text().split(","), //地址
        costPrice = $("#costPrice").val(), //成本价
        dealPrice = $("#dealPrice").val(), //交接价
        price = $("#price").val() //门市加
    // console.log(timed)
    for (let i = 0; i < timed.length; i++) {
        var np = [];
        for (let j = 0; j < cityName.length; j++) {
            var scrpr = {
                "areaName": cityName[j],
                "price": $("#price").val(),
                "costPrice": $("#costPrice").val(),
                "dealPrice": $("#dealPrice").val(),
                "childPrice": $("#childPrice").val()
            };
            np.push(scrpr)
        }
        var scrp = {
            "date": timed[i],
            "areaList": np
        }
        scr.push(scrp)
    }
    var str = {
        "tourline_sn": $("#tourline_sn").val(), //线路编号
        "title": $("#title").val(), //线路标题
        "tourlineHead": $("#tourlineHead").val(), //负责人
        "tourlinePhone": $("#tourlinePhone").val(), //负责人
        "adult_limit": $("#adult_limit").val(), //总人数
        "adult_buy_max": $("#adult_buy_max").val(), //单笔订单最大人数
        "tour_feature": $("#tour_feature").val(), //产品特色
        "price_explain": $("#price_explain").val(), //费用说明
        "travel_restrictions": $("#travel_restrictions").val(), //出游人群限制
        "child_norm": $("#child_norm").val(), //儿童标准
        "is_refund": $("#is_refund").val(), //是否支持退
        "refund_desc": $("#refund_desc").val(), //退票说明
        "refund_method": $("#refund_method").val(), //退款方式
        "appoint_desc": $("#appoint_desc").val(), //服务标准
        "tour_desc": $("#tour_desc").val(), //行程安排
        "tour_range": $("#tour_range").val(), //线路区域
        "tour_type": $("#tour_type").val(), //线路类型
        // "cover_img1": $("#jyxkimg").attr("src"), //图片的路径值
        // "cover_img2": $("#jyximg").attr("src"),
        // "cover_img": $("#jyxkzimg").attr("src"),
        "childPrice": $("#childPrice").val(), //儿童
        "area_cache": scr
        // 获取地址
    }


    //门市价
    console.log(str)
    // console.log(cityName)
    // $("#selects").html(`<option>请选择县</option>`)
    // layer.open({
    //     // title: "发团详细价格",
    //     skin: 'layui-layer-demo', //样式类名
    //     closeBtn: 0, //不显示关闭按钮
    //     anim: 2,
    //     shadeClose: true, //开启遮罩关闭
    //     content: baidanhtml
    // });

    sessionStorage.setItem("xx", JSON.stringify(str))
    window.location.href = "./biaodian2.html"
}



function getxuanzeriqi() {
    var flag = $("#shijianxuanze").val();
    var starttime = $("#uptime").val();
    var endtime = $("#endtime").val();
    if (starttime == "" || endtime == "") {
        alert("请输入开始时间和结束时间");
        $('#shijianxuanze')[0].selectedIndex = 0;
        return;
    }

    if ($("#uptime").val() > $("#endtime").val()) {
        alert("输入真确范围")
        return false
    }
    var riqis = get(starttime, endtime);
    zuizhongriqis = "";
    var count = 0;
    $("#timezhou").empty();
    for (var i = 0; i < riqis.length; i++) {
        var d = new Date(riqis[i]).getDate();
        if (flag == "1") {
            if (d % 2 != 0) {
                zuizhongriqis += riqis[i] + ",";
                // document.getElementById("timezhou").innerHTML += riqis[i] + ','
                count = count + 1;
            }
        } else if (flag == "2") {
            if (d % 2 == 0) {
                zuizhongriqis += riqis[i] + ",";
                // document.getElementById("timezhou").innerHTML += riqis[i] + ','
                count = count + 1;
            }
        } else if (flag == "3") {
            if (new Date(riqis[i]).getDay() == 0) {
                zuizhongriqis += riqis[i] + ",";
                // document.getElementById("timezhou").innerHTML += riqis[i] + ','
                count = count + 1;
            }
        } else if (flag == '4') {
            zuizhongriqis += riqis[i] + ",";
            // document.getElementById("timezhou").innerHTML += riqis[i] + ','
            count = count + 1;
        }
    }
    console.log(zuizhongriqis)
}

function get(start, end) {
    if (start == end) {
        return;
    }
    var result = [];
    var beginDay = start.split("-");
    var endDay = end.split("-");
    var diffDay = new Date();
    var dateList = new Array;
    var i = 0;
    diffDay.setDate(beginDay[2]);
    diffDay.setMonth(beginDay[1] - 1);
    diffDay.setFullYear(beginDay[0]);
    result.push(start);
    while (i == 0) {
        var countDay = diffDay.getTime() + 24 * 60 * 60 * 1000;
        diffDay.setTime(countDay);
        dateList[2] = diffDay.getDate();
        dateList[1] = diffDay.getMonth() + 1;
        dateList[0] = diffDay.getFullYear();
        if (String(dateList[1]).length == 1) {
            dateList[1] = "0" + dateList[1]
        };
        if (String(dateList[2]).length == 1) {
            dateList[2] = "0" + dateList[2]
        };
        result.push(dateList[0] + "-" + dateList[1] + "-" +
            dateList[2]);
        if (dateList[0] == endDay[0] && dateList[1] == endDay[1] &&
            dateList[2] == endDay[2]) {
            i = 1;
        }
    };
    //	console.log(result);
    return result;
};
setTimeout(() => {
    var aaaa = document.getElementById('title')
    tietget(aaaa)
}, 500);