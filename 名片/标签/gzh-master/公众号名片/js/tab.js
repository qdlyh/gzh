       $('.tab-active li').click(function() {
            var tab_i = $(this).index();
            $(this).addClass('active1').siblings().removeClass('active1');
            $('.tab-content li').eq(tab_i).show().siblings().hide();
        });
        $('.tab-content p').click(function() {
            $(this).addClass('active2').siblings().removeClass('active2');
            $('.selected-color1').append($(this).clone()
                .css({"color":"#ffffff",
                      "padding":"0 30px",
                      "float":"left",
                      "background":"#2AAFF1",
                      "margin":"14px 12px 14px 12px",
                      "border-radius":"5px",
                      "background-image":"url(../images/close_btn.jpg)",
                      "background-repeat":"no-repeat",
                      "background-position":"right",
                      "cursor":"pointer"
          }));
        });