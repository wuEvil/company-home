function loadSelectValue(name){
	var recordschool=$("#"+name)[0];
	var nodes=recordschool.attributes;
	var value="";
	var url="";
	for(var i=0;i<nodes.length;i++){
		if(nodes[i].nodeName=="selectedvalue"){
			value=nodes[i].nodeValue;
		}
		if(nodes[i].nodeName=="httpurl"){
			url=nodes[i].nodeValue;
		}
	}
	$.getJSON(url,function(result){
	    var list=result.list;
	    if(value==""){
	    	$("#"+name).append("<option value='' selected>请选择</option>");
	    }
	    for(var i=0;i<list.length;i++){
	    	var s=list[i];
	    	var key=s["key"];
	    	var v=s["value"];
	    	if(value==v){
	    		$("#"+name).append("<option value='"+v+"' selected>"+key+"</option>");
	    	}else{
		    	$("#"+name).append("<option value='"+v+"'>"+key+"</option>");
	    	}
	    }
	});
}