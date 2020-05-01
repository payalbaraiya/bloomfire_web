$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 50) {
        //console.log('a');
        $("header").addClass("change");
    } else {
        //console.log('a');
        $("header").removeClass("change");
    }
});

$(document).ready(function(){
    $('.que').on("click",function(){
        $('.toggle_div p').siblings().removeClass('active');
        $(this).addClass('active');
        
        $(this).next().slideToggle(500).siblings('p.ans').slideUp();
        
    });
    $('#tooltip1').tooltip({title: "<h6>Easy to find insight</h6>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quod cum natus mollitia quis aspernatur sed</p>", html: true, placement: "bottom"});
    $('#tooltip2').tooltip({title: "<h6>Title</h6>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quod cum natus mollitia quis aspernatur sed</p>", html: true, placement: "top"});
    $('#tooltip3').tooltip({title: "<h6>Easy to find title</h6>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quod cum natus mollitia quis aspernatur sed</p>", html: true, placement: "bottom"});
})




$(".fa-play-circle").click(function(e) {
    e.preventDefault();
    var url = $(this).attr("data-href");
    $("#play_video iframe").attr("src", url);
    $("#play_video").modal("show");
  });


$("#play_video").on('hidden.bs.modal', function (e) {
    $("#play_video iframe").attr("src", "");
});


   
 