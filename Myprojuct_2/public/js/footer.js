$(function(){
    $.ajax({
      url:"http://localhost:5500/public/footer.html",
      type:"get"
    })
    .then(res=>{
      document.getElementById("footer")
        .innerHTML=res;



        
      })
    })