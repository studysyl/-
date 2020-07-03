var mySwiper = new Swiper ('.swiper_first', {
    //   direction: 'vertical', // 垂直切换选项//默认水平
      loop: true, // 循环模式选项
      allowTouchMove:true,//允许触摸滑动
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper_first .swiper-button-next',
        prevEl: '.swiper_first .swiper-button-prev',
      },
      
    //   // 如果需要滚动条
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    }) ;
    var swiper = new Swiper('.introduce_teacher .swiper-container', {
      pagination: '.swiper_double',
      effect: 'coverflow',
      spaceBetween:20,
      loop:true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true
      },
      loopedSlides:5,
      autoplay:{
          deplay:1500,
          disableOnInteraction: false,
          
      }
      
  });