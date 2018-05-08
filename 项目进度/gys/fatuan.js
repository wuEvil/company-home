var str = {};
// var shuangchuanlujing = "http://192.168.1.107:8080/oyetravel/"; //看拼音
function su() {

    $.each($(".form-control"), function (i, d) {
        // console.log(i, d)
        if ($(d).val() == "") {
            alert("资料没有填完")
            return false;
        } else {
            alert("quan")
            str[$(d).attr('name')] = $(d).val();
        }
    });
    console.log(str)

    // $.ajax({
    //     type: "POST",
    //     url: shuangchuanlujing,
    //     dada: str,
    //     success: function (a, b, c) {
    //         // console.log(a, b, c)
    //         if (c.status == 200) {
    //             alert("上传成功");
    //         }
    //     }
    // })
}
$("input").each(function () {
    var vl = $(this).val();
    if (vl == "") {}
})
// tu

setTimeout(function () {
    $(".am-selected button").attr("class",
        "am-selected-btn am-btn am-dropdown-toggle am-btn-default form-control")
    $(".am-selected button").css("width", "800px")
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




function aaa() {
    $("#selects").html(`<option>请选择县</option>`)
}