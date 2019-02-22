//ajax("http://localhost:3000/header.html")
$(function(){
    $.ajax({
      url:"http://localhost:5500/public/header.html",
      type:"get"
    })
    .then(res=>{
      document.getElementById("header")
      .innerHTML=res;
      
    // 我的账户  单击事件
    $("#my_btn").click(function(){
      if($("#header_3").css("display")=="block"){
        $("#header_3").css("display","none")
      }else{
        $("#header_3").css("display","block")
      }
    })
    // 单击任意位置触发账户界面隐藏
    $("#footer,#bodyer,#header_2,#bg_1")
    .click(function(){
      $("#header_3").css("display","none");
    })
    
    // 游戏 服务 下拉菜单
    $("#my_btn_play").click(function(){
      $(this).next().slideToggle(300);
    })
    $("#my_btn_help").click(function(){
      $(this).next().slideToggle(300);
    })
    // 单击任意位置触发游戏界面隐藏
    $("#footer,#bodyer,#header_1,.ipt_div,.d_rmb2,#my_btn_help")
    .click(function(){
      $("#header_4").css("display","none");
    })
    $("#footer,#bodyer,#header_1,.ipt_div,.d_rmb2,#my_btn_play")
    .click(function(){
      $("#header_5").css("display","none");
    })

    // 游戏点数 下拉菜单
    $("#my_btn_play_money").click(function(){
      $(this).next().slideToggle(300);
    })
    // 单击任意位置触发游戏界面隐藏
    $("#footer,#bodyer,#header_1,#my_btn_help,#my_btn_play,.ipt_div")
    .click(function(){
      $("#header_6").css("display","none");
    })


  })
})





