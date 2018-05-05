var username = 'null';

//定义页面名字
var page = 'personal.jsp';
//定义弹出框的回调索引
var index = 0;


window.onload = function () {
	username = $("#create_user").val();
	if (username == "null") {
		parent.window.location = "/oyetravel";
		return;
	}
	setDefaultHeaderImg();
	checkUserState();
}




function setDefaultHeaderImg() {
	var headerImgUrl = $("#logo_input").val();
	if (headerImgUrl != null && headerImgUrl != '' && headerImgUrl != undefined) {
		$("#header_img").attr('src', headerImgUrl);
	}
}

function checkUserState() {
	var state = $("#state_input").val();
	if (state == '待补全资料') {

	} else if (state == '待审核') {

	} else if (state == '审核通过') {

	}
}


function openEdit() {
	$('#item3_div').find("input").each(function () {
		$(this).removeAttr('readonly');
	});
}

//定位弹出框的回调索引方法
// function takeindex() {
// 	var p = parent.document.getElementById("content-main");
// 	for (var i = 0; i < p.length; i++) {
// 		var href = p[i].contentWindow.location.href;
// 		if (href.indexOf(page) != -1) {
// 			index = i;
// 			break;
// 		}
// 	}
// }

//添加
function addWindow() {
	// takeindex();
	var i = parent.layer.open({
		title: "添加附件",
		type: 2,
		fixed: false, //不固定
		maxmin: false,
		area: ['65%', '60%'],
		content: "/oyetravel/toEditAttachmentOfSupplier.htm?username=" + username,
	});
}