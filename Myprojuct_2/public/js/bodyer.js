$(function(){
    $.ajax({
      url:"http://localhost:5500/public/bodyer.html",
      type:"get"
    })
    .then(res=>{
      document.getElementById("bodyer")
        .innerHTML=res;

      // 轮播图    
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop:true,  
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      
      // 鼠标移入显示隐藏左右按钮
      $(".swiper-wrapper img,.swiper-button-prev,.swiper-button-next")
      .mouseenter(function(){
        $(".swiper-button-prev,.swiper-button-next")
        .css("display","block");
      }).mouseleave(function(){
        $(".swiper-button-prev,.swiper-button-next")
        .css("display","none");
      })

      //滚动条触发事件.
      $(document).scroll(function() {
        var scroH = $(document).scrollTop();  //滚动高度
        if(scroH >1000){  //距离顶部大于100px时
          $("#center_img")
        .css("left","47%");
          $("#center_logo")
        .css("left","2%");
        }
      });



    })
  })