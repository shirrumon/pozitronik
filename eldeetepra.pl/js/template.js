
window.onload = function()
{
  var audio = new Audio();
  audio.src = 'audio/pre-2.mp3';
  audio.autoplay = true;

  var audio2 = new Audio();
  audio2.src = 'audio/pre-1.mp3';
  audio2.autoplay = true;

  var audio3 = new Audio();
  audio3.src = 'audio/pre-3.mp3';
  audio3.autoplay = true;

  var audio4 = new Audio();
  audio4.src = 'audio/pre-4.mp3';
  audio4.autoplay = true;

  var audio5 = new Audio();
  audio5.src = 'audio/pre-5.mp3';
  audio5.autoplay = true;

  var audio6 = new Audio();
  audio7.src = 'audio/pre-7.mp3';
  audio7.autoplay = true;

  window.setTimeout(function()
  {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
      var displayNone = "display: none";
      document.getElementById('preloader').style = displayNone;
    }, 500);
  }, 4000 );
}

//Preloader


	$(window).load(function() {
		$("#status").fadeOut();
		$("#preloader").delay(350).fadeOut("slow");
	})



//Home text rotator

$(".rotator > div:gt(0)").hide();
setInterval(function() {
  $('.rotator > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.rotator');
},  4000);



//Home fit screen


	/*global $:false */
	$(function(){"use strict";
		$('#home').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('#home').css({'height':($(window).height())+'px'});
		});
	});


//Navigation
$('ul.slimmenu').on('click',function(){
var width = $(window).width();
if ((width <= 800)){
    $(this).slideToggle();
}
});

			var currentIndex = 0;
			var currentId = "home";
$('ul.slimmenu').slimmenu(
{
    resizeWidth: '800',
    collapserTitle: '',
    easingEffect:'easeInOutQuint',
    animSpeed:'medium',
    indentChildren: true,
    childrenIndenter: '&raquo;'
});

			var colors = {
					"home" : {
						"background" : "",
						"index" : 0
					},
					"about" : {
						"background" : "",
						"index" : 1
					},
					"services" : {
						"background" : "",
						"index" : 2
					},
					"folio" : {
						"background" : "",
						"index" : 3
					},
					"contact" : {
						"background" : "",
						"index" : 4
					},
					"blog" : {
						"background" : "",
						"index" : 5
					},
					"rodo" : {
						"background" : "",
						"index" : 6
					}

			};

			function goTo(id){
				var obj = eval("colors."+id);

				$("body").css("background",obj.background);
				$("ul.slimmenu li a").css("color",obj.background);
				if(obj.index > currentIndex){
					$(".active1").addClass("off");
					$(".active1").transition({
						x : -100,
						opacity : 0,
						zIndex : 0
					},600);

					$("#"+currentId).removeClass("active1");

					$("#"+id).addClass("active1");
					$("#"+id).transition({
						x : 400
					},0,function(){
						$("#"+id).removeClass("off");
						$("#"+id).transition({
							x : 0,
							opacity : 1,
							zIndex : 2
						},600);
					});
				}else if(obj.index < currentIndex){
					$(".active1").addClass("off");
					$(".active1").transition({
						x : 100,
						opacity : 0,
						zIndex : 0
					},600);
					$("#"+currentId).removeClass("active1");


					$("#"+id).addClass("active1");
					$("#"+id).transition({
						x : -400
					},0,function(){
						$("#"+id).removeClass("off");
						$("#"+id).transition({
							x : 0,
							opacity : 1,
							zIndex : 2
						},600);
					});
				}
				currentIndex = obj.index;
				currentId = id;

			}



$(document).ready(function() {

  $("#owl-demo").owlCarousel({

      navigation : false,
      singleItem:true
  });

});


$(document).ready(function() {

  $("#owl-demo1").owlCarousel({

      navigation : false,
      singleItem:true
  });

});


$(document).ready(function() {

  var owl = $("#owl-demo2");

  owl.owlCarousel({

      itemsCustom : [
        [0, 2],
        [450, 2],
        [600, 3],
        [700, 4],
        [900, 7]
      ],
      navigation : false

  });

});


jQuery('a.gallery-colorbox').colorbox();


			$(document).ready(function(){
				$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
				$(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
				$(".iframe").colorbox({iframe:true, width:"100%", height:"100%", transition:"fade"});
			});





$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");

  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: false,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });

  sync2.owlCarousel({
    items : 4,
    itemsDesktop      : [1199,4],
    itemsDesktopSmall     : [979,4],
    itemsTablet       : [768,4],
    itemsMobile       : [479,2],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });

  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }

  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });

  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }

    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }

  }

});



  $(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $(".video-wrap").fitVids();
  });



$(document).ready(function() {

  $("#owl-demo5").owlCarousel({

      navigation : false,
      singleItem:true
  });

});

document.getElementById('blog1').style.display = 'none';
document.getElementById('blog2').style.display = 'none';
document.getElementById('blog3').style.display = 'none';

document.getElementById('read1').onclick = function() {
	block = document.getElementById('blog1');
	if (block.style.display == 'none'){
		block.style.display = 'block';
	}

	else{
		block.style.display = 'none';
	}

}

document.getElementById('read2').onclick = function() {
	block = document.getElementById('blog2');
	if (block.style.display == 'none'){
		block.style.display = 'block';
	}

	else{
		block.style.display = 'none';
	}

}

document.getElementById('read3').onclick = function() {
	block = document.getElementById('blog3');
	if (block.style.display == 'none'){
		block.style.display = 'block';
	}

	else{
		block.style.display = 'none';
	}

}
