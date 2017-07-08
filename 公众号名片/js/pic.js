
    var $file = $(".file");
    $file.change(readFile)

     function tipSingle (str) {
        var css = '<link href="http://sale.degjsm.cn/>';
        $('link').last().after(css);
   }

    function readFile(){
        var file = this.files[0];
        var _that = $(this);

        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e){
            $file.prev().attr('src', this.result)
                    
    }
}
