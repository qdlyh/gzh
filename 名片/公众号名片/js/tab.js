
        //点击已选标签项
        function createCho(cho){
            var tp = $(cho).find('.skillbar-title span').html(); //获取点击对应值
            var cl = $(cho).attr('data-percent'); //标记
            var type = $(cho).attr('data-type'); //获取本已选标签的类型
            //构造选中div
            var div ="<div class='tab-choose "+type+"' data-type='"+ type +"'>"+tp+"<span class='selected-delete "+cl+"' onclick='s_delete(this)' data-percent='"+cl+"'>X</span></div>"
              if($('.'+cl).length==1){
                $('.selected-color').prepend(div);
              }
                $(cho).parent().find('.skillbar-bar').removeClass('barbg').addClass('changeBg');
                $(cho).find('.skillbar-bar').removeClass('changeBg').addClass('clickBg');
            
        }
            //点击已选标签项
        $('.skillbar').click(function (){
              createCho(this);
              //判断标签数目++有多少
          var selected = parseInt($('.selectednum').text());
              selected++;
            $('.selectednum').text(selected);

                //判断添标签是否超过3个
             if($('.selectednum').text()>3) {
                    alert('最多只能添加三个标签')
                    return false
              }
          })

        //删除已选标签
        function s_delete(obtn){
            $(obtn).parent().remove();
              //判断标签数目--有多少
           var cl =$(obtn).attr('data-percent');
           $("."+cl).find('div').removeClass('active3').addClass('active3');
            var selected = parseInt($('.selectednum').text());
            selected--;
            $('.selectednum').text(selected);            
        }

       //选项卡
       $('.tab-active li').click(function() {
            var tab_i = $(this).index();
            $(this).addClass('active1').siblings().removeClass('active1');
            $('.tab-content li').eq(tab_i).show().siblings().hide();
        });

        $('.tab-content div').click(function() {
          $(this).addClass('active2').siblings().removeClass('active2');
            //var tab_p = $(this).clone();
            //判断标签数目++有多少
            /*var selected = parseInt($('.selectednum').text());
             (selected)++;
            $('.selectednum').text(selected);
                //判断添标签是否超过3个
             if($('.selectednum').text()>3) {
                    alert('最多只能添加三个标签')
                    return false
              }
             
            $(this).addClass('active2').siblings().removeClass('active2');
            $('.selected-color').append($(this).clone().addClass('selected-delete')
                   .css({"color":"#ffffff",
                      "padding":"0 12px",
                      "float":"left",
                      "background":"#2AAFF1",
                      "margin":"14px 12px 14px 12px",
                      "border-radius":"5px",
                      "background-image":"url(../images/close_btn.jpg)",
                      "background-repeat":"no-repeat",
                      "background-position":"right",
                      "cursor":"pointer"
          })

                   ,$('.selected-delete').click(function(){
    
                    $(this).remove()

                  //判断标签数目--有多少
                  var selected = parseInt($('.selectednum').text());
                  selected--;
                  $('.selectednum').text(selected);
            })
          );*/
        });