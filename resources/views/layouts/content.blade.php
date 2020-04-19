	<div id="content" class="container">
		<header id="geekheader" class="bp-header cf">
				<!--<button class="action action--open" aria-label="Open Menu"><span class="icon icon--menu"></span></button>-->
			<div class="dummy-logo" id="geeklogo">
				<img id="geeknav" onclick="window.open('https://tongji.baidu.com/web/welcome/ico?s=0815ca0ab4a5299677d0f428b281ffa1', '_blank')" src="img/logo.png" width="286px" height="87px"/>
			<!--onmouseover="tip('{{config('about')}}','geeknav',18000,2)" onmouseout="tipx(i)"-->
			</div>
			<div class="bp-header__main">
			<button id="gk" class="action action--open2" aria-label="Open Menu" onclick="opengeek()"><span class="icon icon--menu"></span></button>
				<span class="bp-header__present">{{config('leftname')}} <span id="about" class="bp-icon bp-icon--about" onmouseover="qrcode()" onmouseout="tipx(i)"></span></span>
				<h1 class="bp-header__title" style="cursor:help" onclick="window.open('https://translate.google.cn')">TranslateIt</h1>
				<nav class="bp-nav">
			<?php date_default_timezone_set('Asia/Shanghai');$h=date("H");?>
    			@if(($h<6)or($h>=23))
				<!--<a class="bp-nav__item bp-icon bp-icon--prev" onclick="back()" data-info="back"><span>back</span></a>-->
				@endif
					<!--<a class="bp-nav__item bp-icon bp-icon--next" href="" data-info="展开侧栏"><span>展开侧栏</span></a>-->
					<a class="bp-nav__item bp-icon bp-icon--drop" onclick="musicx('musicwindow','','{{config('music_url')}}',['70%', '85%'])" data-info="music"><span>music</span></a>
					<a class="bp-nav__item bp-icon bp-icon--archive" onclick="codex('codewindow','','{{config('ide_url')}}',['70%', '85%'])" data-info="online ide"><span>online ide</span></a>
					<!--代码使用者不得删除本声明相关内容,请自重-->
					<!--极客导航,官方开源地址:http://github.com/CrazyBoyM/geeknav-->
					<!--代码使用者不得删除本声明相关内容,请自重-->
				</nav>
			</div>
		</header>
    <div class="main-content">
    	<h1 id="geektitle" class="mediatitle" onclick="back()">极客导航</h1>
    	<div id="geek" class="content">
		<script type="text/javascript" id="searchjs" src="js/search.js"></script>
		<div class="geektext">
		<button id="geekbutton" onclick="opengeek()" class="geekbutton">显示全部隐层</button>
		<br>
		<p id="geektext" style="cursor:pointer;font-size:23px;font-family:KaiTi" onclick="textforward()">
			あきらめないように頑張ってください
		</p>
		</div>
		</div>
		<div id="geek2" class="content2" style="display:none;">
		</div>
	</div>
</div>
      
