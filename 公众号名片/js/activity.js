	/*//删除弹出层 */            
    $('.list-delete').click(function(){                      
        $('.black,.close').css('display','block');          
        $('.delete-box').show();  
            $('.delete-box').css({
                'marginTop':-$('.delete-box').outerHeight()/2,
                'marginLeft':-$('.delete-box').outerWidth()/2,                 
      })       
  }) 
    $('.black,.off,.on').click(function(){
        //背景隐藏
         $('.black').css('display','none');
         $('.wx-black').css('display','none');
         //删除窗口隐藏
         $('.delete-box').css('display','none');
         //$('.close').css('display','none');
    }) 
    	/* 微信弹出层  */              
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
        $('.list-delete input:checked').each(function(index) { // 遍历选中的checkbox
            $(this).parents('.activity-box').remove(index);
        });
    });

    //按取消checkbox取消
    $('.off,.black').click(function(){
        $('.list-delete input:checkbox').each(function(){
                this.checked=false;
        });
    });

   /* 
 $('.list-delete').click(function() {
        var x = $(this).parents().index();
        //console.log(x)
        $(this).parents('.activity-box').eq(x).remove();
});*/


//地图tab
    $('.map-tab span').click(function(){
        var index = $(this).index()
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab-2 div').eq(index).show().siblings().hide();
    })