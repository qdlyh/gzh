	/* 删除弹出层  */               
    $('.list-delete').click(function(){                      
        $('.black,.close').css('display','block');          
        $('.delete-box').fadeIn();  
            $('.delete-box').css({
                'marginTop':-$('.delete-box').outerHeight()/2,
                'marginLeft':-$('.delete-box').outerWidth()/2,                 
      })       
  })
    $('.black,.off,.on').click(function(){
        //背景隐藏
         $('.black').css('display','none');
         //微信隐藏
         $('.wx-black').css('display','none');
         //删除窗口隐藏
         $('.delete-box').css('display','none');
         //$('.close').css('display','none');
    }) 
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

  //确认删除
    $('.on').click(function() {
        $('.list-delete').each(function() { // 遍历选中的checkbox
           var index = $(this).parents('.activity-box').index();  // 获取checkbox所在行的顺序
           $('.activity-box').eq(index).remove();
             //console.log($(index).length)
        });
    });
