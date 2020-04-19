<!DOCTYPE html>
<html lang="zh">
@include('layouts.header')
<?php date_default_timezone_set('Asia/Shanghai');$h=date("H");?>
<body>
        @include('layouts.sidebar')

        @include('layouts.content')

        @include('layouts.footer')
        <script>
        var bgx=0,bgcolor;
        function bg(){
        	var img=new Image();
        	img.src="img/chrome.png";
        	img.onload = function(){
	        	$(".container").css({background:"rgba(1,1,1,.3)"});
	    		bgcolor=$("body").css("background");
	    		$("body").css({"background":'url(\"'+img.src+'\"',"background-size":"100%","background-repeat":"no-repeat","background-size":"cover"});
	    		$(".search-type li label").css({color:"rgba(255,255,255,.7)"});
	    		$("p").css({color:"rgba(255,255,255,.6)"});
	    		bgx++;
        	}
        }
       // bg();
        </script>
</body>

</html>
