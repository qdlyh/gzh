// 随机数据
var data = [
    {"name":"台湾","value":19},
    {"name":"天津","value":10},
    {"name":"山西","value":29},
    {"name":"辽宁","value":14},
    {"name":"北京","value":61},
    {"name":"上海","value":45},
    {"name":"江苏","value":70},
    {"name":"浙江","value":3},
    {"name":"吉林","value":38},
    {"name":"湖南","value":98},
    {"name":"江西","value":86},
    {"name":"安徽","value":78},
    {"name":"河北","value":30},
    {"name":"福建","value":17},
    {"name":"山东","value":64},
    {"name":"重庆","value":87},
    {"name":"内蒙古","value":42},
    {"name":"河南","value":41},
    {"name":"广东","value":64},
    {"name":"广西","value":63},
    {"name":"湖北","value":18},
    {"name":"青海","value":53},
    {"name":"西藏","value":29},
    {"name":"云南","value":91},
    {"name":"海南","value":58},
    {"name":"陕西","value":53},
    {"name":"贵州","value":59},
    {"name":"香港","value":32},
    {"name":"宁夏","value":28},
    {"name":"新疆","value":53},
    {"name":"澳门","value":50},
    {"name":"黑龙江","value":77},
    {"name":"四川","value":42},
    {"name":"甘肃","value":16}
    ];
// 初始化图表
var map = new Highcharts.Map('map', {
  //数据标题
title: {
   text: ''
},
//背景颜色
chart: {
    backgroundColor:'#f3f3f3'
},
 credits: {
     enabled: false
  },
//地区名字
 plotOptions: {
  series: {
       dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>',
          color: 'black',
          style:{
              fontSize: '15px'
          },     
      },
   cursor: 'pointer',
   events: {
       //输出点击地区的值
    click: function(e) {
     //console.log(e.point.name);
     $('.title-p').text(e.point.name);
    }
   }
  }
 },
//地方缩放
mapNavigation: {
    enabled: true,
    buttonOptions: {
        verticalAlign: 'bottom'
    }
},
//各省颜色
colorAxis: {
    min: 0,
    minColor: '#fff',
    maxColor: '#059500',
    labels:{
        style:{
            "color":"black",
        }
    }
},
  series: [{
    data: data,
    mapData: Highcharts.maps['cn/china'],
    joinBy: 'name' // 根据 name 属性进行关联
  }]
});
