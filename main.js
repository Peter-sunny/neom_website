 // gsap.registerPlugin(ScrollTrigger);

          $(document).ready(function(){

    // abc
            $("#abc").mouseenter(function(){
              $("#section2").css({"backgroundImage": "url('./img/map4.jpg')"});

            });
            $("#abc").mouseleave(function(){

              $("#section2").css({"backgroundImage": "url('./img/map.jpg')", "transition-duration": "2s"});
            });
  // abc1
            $("#abc1").mouseenter(function(){
             $("#section2").css({"backgroundImage": "url('./img/map3.webp')"});
           });
            $("#abc1").mouseleave(function(){
             $("#section2").css({"backgroundImage": "url('./img/map.jpg')", "transition-duration": "2s"});
           });
  // abc2

            $("#abc2").mouseenter(function(){
              $("#section2").css({"backgroundImage": "url('./img/map2.webp')"});
            });
            $("#abc2").mouseleave(function(){
             $("#section2").css({"backgroundImage": "url('./img/map.jpg')", "transition-duration": "2s"});
           });
  //abc3

            $("#abc3").mouseenter(function(){
              $("#section2").css({"backgroundImage": "url('./img/map1webp.webp')"});
            });
            $("#abc3").mouseleave(function(){
              $("#section2").css({"backgroundImage": "url('./img/map.jpg')", "transition-duration": "2s"});
            });


              $(".in1").mouseenter(function(){            
              $(".in1").css({"color":"yellow"});
            });

            $(".in1").mouseleave(function(){
              $(".in1").css({"color":"white"});
           });

           $(".in2").mouseenter(function(){
              $(".in2").css({"color":"yellow"});
            });
            $(".in2").mouseleave(function(){
            
              $(".in2").css({"color":"white"});
           });
          });

// var investimg = gsap.to(".imggroup", {
//      x: 700,
//      y:-700,
//      duration:2,
//      scrollTrigger:{
//           trigger: "#careersection",
//           start:"top 70%",
//           end:"bottom",
//           toggleActions:"restart reverse none none",
//      }
// })
// var investcontent = gsap.to(".invest-content", {
//      x: -700,
//      y:-700,
//      duration:2,
//      scrollTrigger:{
//           trigger: "#careersection",
//           start:"top 70%",
//           end:"bottom",
//           toggleActions:"restart reverse none none",

//      }
// })
// var investhead = gsap.to(".invest-head", {
//      x: -700,
//      y:-700,
//      duration:2,
//      scrollTrigger:{
//           trigger: "#careersection",
//           start:"top 70%",
//           end:"bottom",
//           toggleActions:"restart reverse none none",

//      }
// })
// var careerimg = gsap.to(".imggroup1", {
//      x:-700,
//      y:-200,
//      duration:2,
//      scrollTrigger:{
//           trigger: "#careersection",
//           start:"top 70%",
//           pin:true,
         
//           end:"bottom",
//           toggleActions:"restart reverse none none",
//      }
// })
// var careercontent = gsap.to(".career-content", {
//      x:"200px",

//      duration:1,
//      scrollTrigger:{
//           trigger: "#careersection",
//           start:"top 70%",

//           end:"bottom",
//           toggleActions:"restart reverse none none",
//      }
// })

// var careerhead = gsap.to(".career-head", {
//      x:-40,
//      y:-40,
//      duration:1,
//      scrollTrigger:{
//           trigger: "#careersection",
//           start:"top 70%",
         
           
//           end:"bottom",
//           toggleActions:"restart reverse none none",
//      }
// })

            function prev(){
    document.getElementById('slider-container').scrollLeft -= 270;
}

function next()
{
    document.getElementById('slider-container').scrollLeft += 270;
}


$(".slidesload img").on("click" , function(){
  $(this).toggleClass('zoomed');
  $(".overlay").toggleClass('active');
})