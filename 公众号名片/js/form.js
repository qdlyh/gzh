	/* 微信弹出层 */                
    $('.wx-alert').click(function(){      
        var Img=$('.wx-img').attr('src');                    
        $('.black,.close').css('display','block');
        $('.wx-black img').attr('src',Img);             
        $('.wx-black').fadeIn();
        $('.wx-black img').css('width','400','height','400');    
            $('.wx-black').css({
                'marginTop':-$('.wx-black').outerHeight()/2,
                'marginLeft':-$('.wx-black').outerWidth()/2,                   
      })       
  })
    $('.black,.close').click(function(){
         $('.black').css('display','none');
         $('.wx-black').css('display','none');
         $('.close').css('display','none');
    })  

	//手机第二栏
	$('.btn-uname').click(function(){
		$('.uname-none').stop().slideToggle()
	})

