	var ongeek = true;
	function geekdiv(){
		if(ongeek){
			document.getElementById("geek").style.display="none";
			document.getElementById("geek2").style.display="block";
			ongeek = false;
			}
	}
	var html="<center><img style='height: 110px;width: 110px;padding-top:6px;' src='img/qr.jpg'></center><center>极客导航  开源版</center>";
	function qrcode(){
		tip(html,'about',17000,3);
	}
	function back(){
		if(!ongeek){
		document.getElementById("geek2").style.display="none";
		document.getElementById("geek").style.display="block";
		ongeek = true;
		}
	}
	textnext=false;
	function textforward(){
		while(!textnext){
			fetch('https://v1.hitokoto.cn?c=i')
		    .then(response => response.json())
		    .then(data => {
		      const hi = 	document.getElementById("geektext");
		      hi.innerText = data.hitokoto;
		      //hi.style.fontFamily="KaiTi";
		      //hi.style.fontSize="23px";
		    })
		    textnext=true;
		}
	}
	var onmenu=false;
	//var ssr=true;
	function opengeek(){
		if(!onmenu){
		// document.getElementById("geekbutton").style.display="none";
		// document.getElementById("geektitle").style.display="none";
		//$("#content").css({"background":"#2a2b30"});
		// if(ssr){
		// var ss="<br><br><br><span style=\"color:rgba(255,255,255,.5);\">Copyright © 2020.Crafted with<a href=\"https://github.com/CrazyBoyM/geeknav\">GeekNav</a>.</span>";
		// document.getElementById("geektext").innerHTML+=ss;
		// ssr=false;
		// }
		document.getElementById("geek").style.margin="0 0 0 300px";
		document.getElementById("geek2").style.margin="0 0 0 300px";
		document.getElementById("gk").style.margin="0 0 0 300px";
		// document.getElementById("gk").innerHTML='<span class="icon icon--cross"></span>';
		document.getElementById("geeklogo").style.display="flex";
		document.getElementById("ml-menu").style.display="block";
		onmenu=true;
		}else{
		document.getElementById("geek").style.margin="0 0 0 0";
		document.getElementById("geek2").style.margin="0 0 0 0";
		document.getElementById("gk").style.margin="0 0 0 0";
		document.getElementById("geeklogo").style.display="none";
		document.getElementById("ml-menu").style.display="none";
		// document.getElementById("gk").innerHTML='<span class="icon icon--menu"></span>';
		back();
		onmenu=false;
		}
		
	}
	var minx=false;
	function openx(id,name,url,size){
	geekw=layer.open({
		  id: id,
		  fixed: false,
	      type: 2,
	      title: name,
	      shadeClose: true,
	      offset: 'rb',
	      shade: false,
	      maxmin: true, //开启最大化最小化按钮
	      content: url,
	      area: size,
	      resize: true,
	      skin: 'layui-layer-lan',
	      min: function(){
			$('.layui-layer').css({
				'top': 'auto',
				'left': 'auto',
				'bottom': '0',
				'right': '0'
				});
			minx=true;
			},
		  cancle:function(){
		  	minx=false;
		    }
	    });
	}
	function musicx(id,name,url,size){
			if(minx){
				layer.restore(geekw);
				minx=false;
			}else{
				openx(id,name,url,size);
				// tip('窗口会直接在内部打开第三方音乐网站,内容并非本站提供','geeknav',3800,2);
				minx=false;
			}
	}
	var minx2=false;
	function openx2(id,name,url,size){
	geekw2=layer.open({
		  id: id,
		  fixed: false,
	      type: 2,
	      title: name,
	      shadeClose: true,
	      offset: 'rb',
	      shade: false,
	      maxmin: true, //开启最大化最小化按钮
	      content: url,
	      area: size,
	      resize: true,
	      skin: 'layui-layer-lan',
	      min: function(){
			$('.layui-layer').css({
				'top': 'auto',
				'left': 'auto',
				'bottom': '0',
				'right': '0'
				});
			minx2=true;
			},
		  cancle:function(){
		  	minx2=false;
		    }
	    });
	}
	function codex(id,name,url,size){
			if(minx2){
				layer.restore(geekw2);
				minx2=false;
			}else{
				openx2(id,name,url,size);
				// tip('窗口会直接在内部打开第三方ide网站,内容并非本站提供','geeknav',3800,2);
				minx2=false;
			}
	}
	$("div").on("mouseover","i",function(){
		var id=this.id;
		var s=$("#"+id).attr("data-d");
		tip(s, id,2000,2);
		}).on('mouseleave', 'i', function(){tipx(i);});
	(function(){layer.open({
	content: '浏览器滚动条已锁',
	scrollbar: false
	});});

	//opengeek();
	
	 $(document).bind("contextmenu", function () { return false; });//禁止右键
		        document.oncontextmenu = function () { return false; };
		        document.onkeydown = function () {
		            if (window.event && window.event.keyCode == 123) {
		                event.keyCode = 0;
		                event.returnValue = false;
		                return false;
		            }
		        };//禁止F12
	//textforward();	        

	