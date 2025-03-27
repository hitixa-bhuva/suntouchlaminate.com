var winHei,	winWid;
	winHei = $(window).height(),
	winWid = $(window).width();

$('.fulHei').height(winHei);

$(document).ready(function(){
	$('.hmeTxtMainCont').height(winHei / 1.3);

	if(winWid > 1280){
		$('.prlx').parallaxElement();
	}

	if($('.sideBarMenu').length > 0){
		$('.sideBarMenu > ul > li > a').click(function(e){
			e.preventDefault();
			var thisChld = $(this).next('ul');
			if(thisChld.is(':hidden')){
				$('.sideBarMenu > ul > li > ul').slideUp();
				$('.actSidBar').removeClass('actSidBar');
				thisChld.slideDown();
				$(this).parent().addClass('actSidBar');
			}
			else{
				thisChld.slideUp();
				$(this).parent().removeClass('actSidBar');
			}
		});
	}

	if(winWid < 769){
		var nvSrce = $('.navMainCont');

			$(nvSrce).attr('class','');

		var nvSrce = nvSrce.addClass('navSource');

	//	alert(nvSrce.html())
		$('.respNavIcn').sidr({
			side: 'right',
			name: 'sidr',
			source: '.navSource'
		});

		$('.respNavIcn').on('click', function(e) {
			e.stopPropagation();
		});

		$(document).on('click', function (e) {
			$.sidr('close', 'sidr');
		});
	}
	$('.gtop').on('click',function(e){
		e.preventDefault();
		$('body,html').animate({scrollTop:0},800);
	});
});
$(window).load(function(){
	if(winWid > 1000){
		$.stellar();
	}
});
