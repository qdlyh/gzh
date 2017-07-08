		window.myScroll = null;

		var mySwiper = new Swiper('#scroll', {
			    direction: 'vertical',
				slidesPerView: 'auto',
				autoHeight: true,
				freeMode: true,
				observer:true,//修改swiper自己或子元素时，自动初始化swiper 
				observeParents:true,
				//修改swiper的父元素时，自动初始化swiper 
				onSlideChangeEnd: function(swiper){ 
				mySwiper.update(); //swiper更新高度
			} 
      });