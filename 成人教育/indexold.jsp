<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <title>山西国新物流智能调度平台</title>
    <link href="css/login.css" rel="stylesheet" rev="stylesheet" type="text/css" media="all"/>
    <link href="css/demo.css" rel="stylesheet" rev="stylesheet" type="text/css" media="all"/>
    <script type="text/javascript" src="js/jquery1.42.min.js"></script>
    <script type="text/javascript" src="js/jquery.SuperSlide.js"></script>
    <script type="text/javascript" src="js/Validform_v5.3.2_min.js"></script>
    <script src="${ctx }/bootstrap/js/plugins/layer/layer.js"></script>
</head>
<body>
<div class="header">
    <div>
        <table style="border:0;">
            <tr style="border:0;">
                <td style="border:0;">
                    <img alt="logo" src="images/gongsilogo.png" width="500px" height="110px"></img>
                </td>
                <td style="border:0;width:50px">

                </td>
                <td style="border:0;">
                    <a href="aqzd.jsp" target="_parent" style="font-size: 18px; color: black; margin-left: 5px">安全制度</a> |
                </td>
                <td style="border:0;">
                    <a href="aqwh.jsp" target="_parent" style="font-size: 18px; color: black; margin-left: 5px">安全文化</a>
                </td>
            </tr>
        </table>
    </div>
    <div>
    </div>
    <div class="headerNav">
    </div>
</div>
<div class="banner">
    <div class="login-aside">
        <div id="o-box-up"></div>
        <div id="o-box-down" style="table-layout:fixed;">
            <div class="error-box"></div>
            <form class="registerform" action="demo/ajax_post.jsp">
                <div class="fm-item">
                    <label for="logonId" class="form-label">登录账号：</label>
                    <input type="text" maxlength="100" id="username" class="i-text" datatype="s6-18">
                    <div class="ui-form-explain"></div>
                </div>

                <div class="fm-item">
                    <label for="logonId" class="form-label">登录密码：</label>
                    <input type="password" value="" maxlength="100" id="password" class="i-text">
                    <div class="ui-form-explain"></div>
                </div>

                <div class="fm-item">
                    <label for="logonId" class="form-label"></label>
                    <input type="button" value="" tabindex="4" id="send-btn" class="btn-login" onclick="login()">
                    <div class="ui-form-explain"></div>
                </div>
            </form>
        </div>
    </div>
    <div class="bd">
        <ul>
            <li style="background:url(themes/img_main_5.jpg) #CCE1F3 center 0 no-repeat;"></li>
        </ul>
    </div>
    <div class="hd">
        <ul></ul>
    </div>
</div>
<script type="text/javascript">jQuery(".banner").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    effect: "fold",
    autoPlay: true,
    autoPage: true,
    trigger: "click"
});</script>

<div class="banner-shadow"></div>

<script>

    function queryAqzd() {
        /* var list;
        $.ajax({
              url: "../../../queryAqzdList.do",
              data: list,
              success: "success",
              dataType: "json"
            }); */
    };

    $(function () {
        document.getElementById("username").focus();
        $("#username").keydown(function (event) {
            if (event.keyCode == 13) {
                login()
            }
        })
        $("#password").keydown(function (event) {
            if (event.keyCode == 13) {
                login()
            }
        })

    })


    //登录
    function login() {
        var errorMsg = "";
        var loginName = document.getElementById("username");
        var password = document.getElementById("password");
        if (!loginName.value) {
            alert('用户名不能为空');
            return;
        }
        if (!password.value) {
            alert('密码不能为空');
            return;
        }

        $.post("login.do",
            {"loginname": loginName.value, "password": password.value},
            function (result) {
                if (result == "error") {
                    alert('密码错误');
                    return false;
                } else if (result == "nouser") {
                    alert('登录名无效');
                    return false;
                } else if (result == "failure") {
                    alert('抱歉，服务器异常');
                    return false;
                } else if (result == "true") {
                    window.location = "system/framework/main.jsp";
                }
            });
    }
</script>
</body>
</html>

