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
    $('.black').click(function(){
         $('.black').css('display','none');
         $('.wx-black').css('display','none');
         //$('.close').css('display','none');
    })  

	//手机添加栏
	$('.btn-phone').click(function(){
        var div  ="<div class='phone-div'><input class='phones'><span class='delete-phone' onclick='p_delete(this)'>X</span></div>"
		$('.phone-box').prepend(div);
        mySwiper.update(); //swiper更新高度
	})
    
    //删除添加的手机栏
    function p_delete(del){
        $(del).parent().remove(); 
    }

//表单验证
    $('.form-affirm').click(function(){
        var phone = $('.phone').val();
        var phones = $('.phones').val();
        var email = $('.uemail').val();
        if($('.ucorporation').val()==''){
            alert('公司名字不能为空');
            return false;
        }
        else if($('.file').val()==''){
            alert('相册不能为空');
            return false;
        }
        else if($('.uname').val()==''){
            alert('姓名不能为空');
            return false;
        }
        else if($('.usex').val()==''){
            alert('性别不能为空');
            return false;
        }
        else if($('.usection').val()==''){
            alert('职能部门不能为空');
            return false;
        }
        else if ($('.phone').val()=='') {
            alert('手机号码不能为空');
            return false;
        }
        //判断是否点击了添加多个手机号码
        if ($('.phones').length!=0) {
             if ($('.phones').val()=='') {
            alert('副手机号不能为空')
            return false;
          }
          else if (!/(^1[3|5|8][0-9]{9}$)/.test(phones)) {
            alert('副手机号码不正确');
            return false;
        }
        }

        else if($('.uemail').val()==''){
            alert('邮箱不能为空');
            return false;
        }
        else if ($('.uofficial').val()=='') {
            alert('官方网址不能为空');
            return false;
        }
        else if ($('.run').val()=='') {
            alert('行业不能为空');
            return false;
        }
        else if ($('.usite').val()=='') {
            alert('公司所在地址不能为空');
            return false;
        }
        else if(!/(^1[3|5|8][0-9]{9}$)/.test(phone)){
            alert('手机号码不正确');
            return false;
        }
        else if (!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
                  .test(email)
                 ) {
            alert('邮箱格式不正确');
            return false;   ;
        }
       
    })
