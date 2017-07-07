  $('.delete-list').click(function() {
        $('.list-check input:checked').each(function() { // 遍历选中的checkbox
            var index = $(this).parents('.list-content').index();  // 获取checkbox所在行的顺序
            $('.list-content').eq(index).remove();
        });
    });
    //图标切换
    $('.delete-list img').click(function(){
        if ($(this).attr('src')=='images/15614515.png'&&$('.list-check').length!=0) {
            $(this).attr('src','images/1515154.png')
            $('.list-check').show()
        }else{
            $(this).attr('src','images/15614515.png')
            $('.list-check').hide()
        }
    })