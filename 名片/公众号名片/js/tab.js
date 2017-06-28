
        //点击已选标签项
        function createCho(cho){
            var tp = $(cho).find('.skillbar-title span').html(); //获取点击对应值
            var cl = $(cho).attr('data-percent'); //标记
            var type = $(cho).attr('data-type'); //获取本已选标签的类型
            //构造选中div
            var div ="<div class='tab-choose "+type+"' data-type='"+ type +"'>"+tp+"<span class='selected-delete "+cl+"' onclick='s_delete(this)' data-percent='"+cl+"'>X</span></div>"
            //标记==1的话和标记小于3的话添加标记
              if($('.'+cl).length==1&&($('.selected-color div').length<3)){
                $('.selected-color').prepend(div);

              }/*else if ($('.'+cl).length>1) {
                var selected = parseInt($('.selectednum').text());
                    selected-=1;
                $('.selectednum').text(selected);   
                    return false
                    //防止重复点击标记计算数字添加
              }*/else if ($('.'+cl).length>1) {
                   $('.selected-color').unbind(prepend)
              }

        }
            //点击已选标签项
        $('.skillbar').click(function (){
              createCho(this);
              $(this).addClass('active2').siblings().removeClass('active2');
             //判断标签数目++有多少
           var selected = parseInt($('.selectednum').text());
               selected+=1;            
            $('.selectednum').text(selected);

          })
        $('.skillbar').bind("click",function(){
            if($('.selectednum').text()>3) {
              //防止超过3个标记添加后计算数字出错
                var selected = parseInt($('.selectednum').text());
                    selected-=1;
                $('.selectednum').text(selected); 
                    alert('最多只能添加三个标签')              
              }
        })

        //删除已选标签
        function s_delete(obtn){
            $(obtn).parent().remove();
            //删除标签后还原内容颜色  
           var cl =$(obtn).attr('data-percent');
           //$("."+cl).find('div').addClass('active3').removeClass('active2');
           
           //判断标签数目--有多少
            var selected = parseInt($('.selectednum').text());
                selected-=1;
            $('.selectednum').text(selected);            
        }

       //选项卡
       $('.tab-active li').click(function() {
            var tab_i = $(this).index();
            $(this).addClass('active1').siblings().removeClass('active1');
            $('.tab-content li').eq(tab_i).show().siblings().hide();
        });

        /*$('.tab-content div').click(function() {
          $(this).addClass('active2').siblings().removeClass('active3');
        });*/