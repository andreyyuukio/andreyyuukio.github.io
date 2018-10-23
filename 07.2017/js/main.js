(function($){
	$.fn.accourdion = function() {
		var $this = $(this),
        $openers = $this.find('.opener'),
        elem = '.elem',
        expander = '.expander',
        $elems = $this.find(elem);
	
    $openers.on('click', function(e){
      e.preventDefault();        
      var $parent = $(this).closest(elem);         
      if ($parent.hasClass('active')) {
        $parent.find(expander).slideUp(350, function() {
           $parent.removeClass('active');
        });
       
      } else {
        $elems.each(function() {
          var $curElem = $(this);
              $parent.find(expander).slideDown(350, function() {
          $parent.addClass('active');
        })  
          
          if ($curElem.hasClass('active') && $curElem != $parent) {
            $curElem.find(expander).slideUp(350, function() {
              $curElem.removeClass('active');
            });
        }
            
      });
      }
    })    
	} 
  
	$('.accourdion').accourdion(); 


	$('.btn').on('click' , function() { 
   event.preventDefault(); 
   $('.traffic-light')
   .find('.traffic')
   .toggleClass('non');
 })

 /*$(window).scroll(function() {
        if($(this).scrollTop() > 820) {
            $('.popup-wap').addClass('show');            
        }
        else if($(this).scrollTop() < 800) {
            $('.popup-wap').removeClass('show');
        }
    });*/
    let popupWrap = document.getElementsByClassName('popup-wap')[0];
    console.log(popupWrap);
    window.addEventListener('scroll', function(event) {
      if(window.pageYOffset > 800) {
        popupWrap.classList.add('show');
      }
      else if(window.pageYOffset < 780){
        popupWrap.classList.remove('show');
      }
    })



$(document).ready(function() {
 $(".slider").each(function () { // обрабатываем каждый слайдер
  var obj = $(this);
  $(obj).append("<div class='nav'></div>");
  $(obj).find("li").each(function () {
   $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
   $(this).addClass("slider"+$(this).index());
  });
  $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
 });
});
function sliderJS (obj, sl) { // slider function
 var ul = $(sl).find("ul"); // находим блок
 var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
 var step = $(bl).width(); // ширина объекта
 $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
}
$(document).on("click", ".slider .nav span", function() { // slider click navigate
 var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
 $(sl).find("span").removeClass("on"); // убираем активный элемент
 $(this).addClass("on"); // делаем активным текущий
 var obj = $(this).attr("rel"); // узнаем его номер
 sliderJS(obj, sl); // слайдим
 return false;
});
var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var translateWidth = 0;
var slideInterval = 1200;
$(document).ready(function () {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function(){
        clearInterval(switchInterval);
    },function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });
});

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }

}


function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}
$('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
});
    var navBtnId = 0;

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
});

 setInterval(function(){ 
	$('.animablock').toggleClass('magictime puffIn');
}, 700 );

 setTimeout(function(){
  	$('.popup-wap').addClass('magictime swashIn');
}, 500);
  setTimeout(function(){ 
	$('.pulsebutton').addClass('btn-anim');
}, 2500 );

$('.pulsebutton').on('click' , function() {
	$(this).removeClass('btn-anim');
});

}(jQuery));		
	