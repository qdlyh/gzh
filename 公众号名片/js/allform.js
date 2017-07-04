    $('.delete-list').click(function() {
        $('.list-check input:checked').each(function() { // 遍历选中的checkbox
            var index = $(this).parents('.list-content').index();  // 获取checkbox所在行的顺序
            $('.list-content').eq(index).remove();
        });
    });