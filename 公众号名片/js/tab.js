    //标签数量转换成数字
    var selected = parseInt($('.selectednum').text());

        //点击已选标签项
        function createCho(cho){
            var tp = $(cho).find('span').html(); //获取点击对应值
            var cl = $(cho).attr('sign'); //标记
            //构造选中div
            var div ="<div class='tab-choose'>"+tp+"<span class='selected-delete' onclick='s_delete(this)' sign='"+cl+"'>X</span></div>"
            //标记==1的话和标记小于3的话添加标记
              if($('.'+cl).length==1&&($('.selected-color div').length<3)){
                $('.selected-color').prepend(div);
                 $(cho).removeClass('active3').addClass('active2');
                     //防止重复点击数字叠加
              }else if ($('.'+cl).length>1) {
                   $('.selected-color').unbind(prepend)
              }     
        }
            //点击已选标签项
        $('.skillbar div').click(function (){
              createCho(this);
             //判断标签数目++有多少
               selected+=1;            
            $('.selectednum').text(selected);

            if($('.selectednum').text()>3) {
              //防止超过3个标记添加后计算数字出错
                    selected-=1;
            $('.selectednum').text(selected); 
                alert('最多只能添加三个标签')              
             }

          })

        //删除已选标签
        function s_delete(obtn){
            $(obtn).parent().remove();   
            var cl =$(obtn).attr('sign');
            $("."+cl).removeClass('active2').addClass('active3');      
           //判断标签数目--有多少
                selected-=1;
            $('.selectednum').text(selected);            
        }

       //选项卡
       $('.tab-active li').click(function() {
            var tab_i = $(this).index();
            $(this).addClass('active1').siblings().removeClass('active1');
            $('.tab-content li').eq(tab_i).show().siblings().hide();
        });