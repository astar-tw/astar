


$(".slider.main-slider").slick({

    autoplay: true,
    dots: true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='images/banner_arrow.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='images/banner_arrow.svg'>"
    
});

function limit_text(text_obj, limit_num){
	$(text_obj).each(function(){
	//alert();
	//console.log($(this).text().length);
		var h3_number = $(this).text().length;
		if(h3_number > limit_num){
			var text_board_right_limit_h3 = $(this).text().substring(0, limit_num);
			//console.log(text_board_right_limit_h3)
			$(this).text(text_board_right_limit_h3 + '...');
		}
	});
}

limit_text("#section_class .col-sm-3 p", 85);


//$()
function all_class_display_none(){
    $(".class-row1, .class-row2, .class-row3, .class-row4").addClass("display-none");
}
all_class_display_none();

function border_bottom_orange(obj){
    $(".title-row .col-6").removeClass("border-bottom-orange");
    $(obj).parent().addClass("border-bottom-orange");
}

$(".class1").click(function(){
    all_class_display_none();
    $(".class-row1").removeClass("display-none").addClass("opacity-ani-0-1");
    border_bottom_orange(this);
});
$(".class2").click(function(){
    all_class_display_none();
    $(".class-row2").removeClass("display-none").addClass("opacity-ani-0-1");
    border_bottom_orange(this);
});
$(".class3").click(function(){
    all_class_display_none();
    $(".class-row3").removeClass("display-none").addClass("opacity-ani-0-1");
    border_bottom_orange(this);
});
$(".class4").click(function(){
    all_class_display_none();
    $(".class-row4").removeClass("display-none").addClass("opacity-ani-0-1");
    border_bottom_orange(this);
});



$('.class1').trigger('click');


//console.log($(".text-board-right h3").text().length)
$(".slider.banner-slider").slick({
    dots: false,
    //autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    cssEase: 'ease',

    responsive: [{
        breakpoint: 2000,
        settings: {
            slidesToShow: 4
        }
    }, {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 570,
        settings: {
            slidesToShow: 1
        }
    }]
});

var scrollTop;
$(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    //console.log(scrollTop)
    if(scrollTop > $("#section_class").offset().top && scrollTop < $("#section_form").offset().top){
      $("nav.navbar").removeClass("bg-light").addClass("bg-green")
    }else if(scrollTop > $("#section_about").offset().top){
      $("nav.navbar").removeClass("bg-light").addClass("bg-green")
    }else{
      $("nav.navbar").removeClass("bg-green").addClass("bg-light")
    }

    if($(".to-top-btn").offset().top > $("#section_form").offset().top && $(".to-top-btn").offset().top < $("#section_about").offset().top){
        $(".to-top-btn").removeClass("to-top-g").addClass("to-top-w")
    }else{
        $(".to-top-btn").removeClass("to-top-w").addClass("to-top-g")

    }

    // if($(".to-top-btn").offset().top < $("#section_form").offset().top){
    //     $(".to-top-btn").css("display", "none");
    // }else{
    //     $(".to-top-btn").css("display", "block");
    // }
    if($(".to-top-btn").offset().top < 1800){
        $(".to-top-btn").removeClass("op1").addClass("op0")
    }else{
        $(".to-top-btn").removeClass("op0").addClass("op1")
    }
    //console.log($(".to-top-btn").offset().top)
});
//console.log($(".to-top-btn").offset().top)

// $(".to-top-btn").click(function(){
//     $("HTML, BODY").animate({scrollTop: 0}, 500);
//     //alert();
// });

$(document).on('click', '.to-top-btn', function(event){
    $("html, body").animate({scrollTop: 0}, 500);
    //console.log(123)
    //alert()
});


$(document).on('click', 'ul.navbar-nav.ml-auto li a', function(event){
    event.preventDefault();
    var thishref = $(this).attr("href");
    if(thishref == "#section_form" || thishref == "#section_about"){
      $("html, body").animate({scrollTop: $(thishref).offset().top - $(".row.title-row").height()}, 500);
    //$("html, body").animate({scrollTop: $(".main-slider").height()}, 500);
    }else{
      $("html, body").animate({scrollTop: $(".main-slider").height()}, 500);
    }
    $("." + $(this).attr("lecture")).trigger('click');

    //navbar-toggler
    //$('button.navbar-toggler').trigger('click');
});
$(document).on('click', '.slider.main-slider li a', function(event){
    event.preventDefault();
    var thishref = $(this).attr("href");
    
    //$("html, body").animate({scrollTop: $(thishref).offset().top - 55}, 500);
    $("html, body").animate({scrollTop: $(thishref).offset().top - 55}, 500);
    $("." + $(this).attr("lecture")).trigger('click');

    //navbar-toggler
    //$('button.navbar-toggler').trigger('click');
});
console.log($(".main-slider").height())
//console.log($("nav.navbar.navbar-expand-xl.navbar-light.bg-light.fixed-top"))

//$("body").css("padding-top", $("nav.navbar.navbar-expand-xl.navbar-light.bg-light.fixed-top").height());


$(window).resize(function() {
  //$("body").css("padding-top", $("nav.navbar.navbar-expand-xl.navbar-light.bg-light.fixed-top").height());
  if($(window).width() > 1200){
    $(".navbar-collapse").removeClass("show")
  }
  if($(window).width() < 1200){
    $(document).on('click', 'ul.navbar-nav.ml-auto li a', function(event){
    
        //$('button.navbar-toggler').trigger('click');

    });
    //alert($(".navbar-collapse").hasClass("show"))
    //navbar-collapse
    // if($(".navbar-collapse").hasClass("show") == true){
    //         $(window).click(function() {
    //         //Hide the menus if visible
    //         $('button.navbar-toggler').trigger('click');
    //     });    
    // }
    // $(window).click(function() {
    //     //Hide the menus if visible
    //     //$('button.navbar-toggler').trigger('click');
    // });
    // $(window).click(function() {
    //     //Hide the menus if visible
    //     $('button.navbar-toggler').trigger('click');
    // }); 
  }
});
// $("nav.navbar.navbar-expand-xl.navbar-light.bg-light.fixed-top").click(function(event){
//     event.stopPropagation();
// });


//ＭＥＮＵ點擊收起
$('button.navbar-toggler').click(function(){
    //if($(".navbar-collapse").hasClass("show") == true)console.log(1)
    $(window).click(function() {
        //Hide the menus if visible
        if($(".navbar-collapse").hasClass("show") == true){
            $(".navbar-collapse").removeClass("show")
        }else{
            return true
        }
    });

});


//清除按鈕
$(".clear-btn").click(function(){
    //alert()
    $("form")[0].reset()
    $("html, body").animate({scrollTop: $("#section_form").offset().top -55}, 500);
});


// jQuery.validator.addMethod("isMobile", function(value, element) { 
//   var length = value.length; 
//   var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/; 
//   return this.optional(element) || (length == 11 && mobile.test(value)); 
// }, "请正确填写您的手机号码");





$(function () {
    $("#myForm").validate({
        rules: {
            "entry.1580794514": { //name
                required: true,

            },
            "entry.1205323188": { //phone
                required: true,
                number: true,
                digits: true,
                minlength: 10,
                maxlength: 10 
                //email: true
            },
            "entry.1950879191": { //email
                required: true,
                email: true,


            },
            "entry.555108400": { //checkbox1
                required: true
            },
            "entry.367696876": { //checkbox2
                required: true
            },
            "entry.1559682462": { //科系
                required: false
            }
        },
        messages: {
            username: {
                required: "此為必填欄位",
                minlength: "UserName 至少需要 {0} 個字"
            },
            email: "請正確輸入Email",
            agree: "你必須勾選同意",
            "entry.1580794514": "請輸入姓名",
            "entry.1205323188": "請輸入有效手機號碼",
            "entry.1950879191": "請輸入有效的信箱",
            "entry.555108400": "請至少選擇一種",
            "entry.367696876": "請至少選擇一種",
            "entry.1559682462": "請填入欲申請科系"
        },
        errorPlacement: function (error, element) {
            if (element.attr("name") == "entry.555108400") {
              error.insertAfter($('.checkbox1-error'));
                //error.insertAfter()
            }else if(element.attr("name") == "entry.367696876"){
              error.insertAfter($('.checkbox2-error'));
            }
            // 
            else{
              error.appendTo(element.parent());
            }
        },
        event: "keyup",
        submitHandler: function(form) {

          form.submit();
        }
    });
});






