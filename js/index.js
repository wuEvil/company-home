function show(){  
    var s = "";  
    s += "网页可见区域宽度："+document.body.clientWidth;  
    s += "\n网页可见区域高度："+document.body.clientHeight;  
    s += "\n网页可见区域宽度（包括边线）："+document.body.offsetWidth;  
    s += "\n网页可见区域高度（包括边线）："+document.body.offsetHeight;  
    s += "\n网页正文宽度："+document.body.scrollWidth;  
    s += "\n网页正文高度："+document.body.scrollHeight;  
    s += "\n屏幕可用工作区域宽度："+window.screen.availWidth;  
    s += "\n屏幕可用工作区域高度："+window.screen.availHeight;  
    s += "\n屏幕分辨率宽度："+window.screen.width;  
    s += "\n屏幕分辨率高度："+window.screen.height;  
    console.log(s);  
}  
show()