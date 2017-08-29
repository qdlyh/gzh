<template>
  <div>
    <div class="content-top-img">
      <img id="file-img">
      <input id="file" type="file">
    </div>
  </div>
</template>

<script>
export default {

  data() {
     return {

     }
  },
  mounted() {
    var $file = document.getElementById('file')
    console.log($file)

    var img = document.getElementById('file-img')
    console.log(img)

    function readFile() {
      var file = this.files[0];
      if (!/image\/\w+/.test(file.type)) {
        alert("请选择图片类型");
        return false;
      }
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        img.src = this.result;

      }
    }
    $file.onchange = readFile;
    
  }

}
</script>