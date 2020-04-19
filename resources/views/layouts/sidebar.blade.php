  	<button class="action action--open" aria-label="Open Menu"><span class="icon icon--menu"></span></button>
    <nav id="ml-menu" class="geeknavmenu">
	<button class="action action--close" aria-label="Close Menu"><span class="icon icon--cross"></span></button>
	<div class="menu__wrap">
	<ul data-menu="main" class="menu__level">
	<?php $it=1;$cnt=1;?>
	<?php for($it=0;$it<=count($categories)-1;$it++):?>
	<?php $item=$categories[$it];?>
	 @if ($item->parent_id == 0)
	<li class="menu__item">
	  @if ($cnt>=7)
		<a class="menu__link" data-submenu="submenu-menu2">更多内容</a>
		@break
	  @else
		@if ($item->children_count != 0)
	<a class="menu__link" data-submenu="submenu-{{$item->id}}">{{ $item->title }}</a>
		@else
	<a class="menu__link">{{ $item->title }}</a>
		@endif
	</li>
	<?php $cnt++;?>
	  @endif
	 @endif
	<?php endfor;?>
	</ul>
	
	@if($cnt>=7)
	<ul data-menu="submenu-menu2" class="menu__level">
	<?php for(;$it<=count($categories)-1;$it++):?>
		<?php $item=$categories[$it];?>
		  @if ($item->parent_id == 0)
	<li class="menu__item">	  
			@if ($item->children_count != 0)
	<a class="menu__link" data-submenu="submenu-{{$item->id}}">{{ $item->title }}</a>
			@else
	<a class="menu__link">{{ $item->title }}</a>
			@endif
	</li>
		  @endif
	<?php endfor;?>
	</ul>
	@endif
	
	@foreach ($categories as $fa)
	 @if ($fa->parent_id == 0)
	<ul data-menu="submenu-{{$fa->id}}" class="menu__level">
		@foreach ($fa->children as $child)
			@if ($child->children_count == 0)
		<li class="menu__item"><a class="menu__link">{{$child->title}}</a></li>
			@endif
		@endforeach
	</ul>
	 @endif
	@endforeach
	</nav>