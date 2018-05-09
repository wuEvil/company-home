// 页面样式动态设定固定值
setTimeout(function () {
    var wid = $("#tourline_sn").width();
    console.log(wid)
    $(".am-selected button").attr("class",
        "am-selected-btn am-btn am-dropdown-toggle am-btn-default form-control")
    $(".am-selected button").css("width", wid + "px")
    // console.log($("#ambzd").children())
}, 100)

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

// 获取值生产弹出层表格
function aaa() { // 时间地点 这里不统一获取
    var scr = []
    var str = {
        tourline_sn: $("#tourline_sn").val(), //线路编号
        title: $("#title").val(), //线路标题
        tourlineHead: $("#tourlineHead").val(), //
        tourlinePhone: $("#tourlinePhone").val(), //
        adult_limit: $("#adult_limit").val(), //总人数
        adult_buy_max: $("#adult_buy_max").val(), //单笔订单最大人数
        tour_feature: $("#tour_feature").val(), //产品特色
        price_explain: $("#price_explain").val(), //费用说明
        travel_restrictions: $("#travel_restrictions").val(), //出游人群限制
        child_norm: $("#child_norm").val(), //儿童标准
        is_refund: $("#is_refund").val(), //是否支持退
        refund_desc: $("#refund_desc").val(), //退票说明
        refund_method: $("#refund_method").val(), //退款方式
        appoint_desc: $("#appoint_desc").val(), //服务标准
        tour_desc: $("#tour_desc").val(), //行程安排
        tour_range: $("#tour_range").val(), //线路区域
        tour_type: $("#tour_type").val(), //线路类型
        cover_img1: $("#jyxkimg").attr("src"), //图片的路径值
        cover_img2: $("#jyximg").attr("src"),
        cover_img: $("#jyxkzimg").attr("src"),
        costPrice: $("#costPrice").val(), //成本价
        dealPrice: $("#dealPrice").val(), //交接价
        price: $("#price").val(), //门市价
        childPrice: $("#childPrice").val(),
        area_cache: scr
        // 获取地址
    }
    console.log(str)
    console.log(scr)

    var cityName = $(".am-fl").text()
    var baidanhtml = ``;
    console.log(cityName)
    // $("#selects").html(`<option>请选择县</option>`)
    layer.open({
        title: "发团详细价格",
        // skin: 'layui-layer-demo', //样式类名
        // closeBtn: 0, //不显示关闭按钮
        // anim: 2,
        // shadeClose: true, //开启遮罩关闭
        content: baidanhtml
    });
}