$(document).ready(function(){
            var docclick = null;
            var sideclick = false;
            var offscreen = $(".header").offset();
            var offscreen2 = $(".header2").offset();
            $('.sub_img').css('opacity','0.5');
            $('.sub_img').first().css('opacity','1');
            $(window).scroll(function() {
                if (window.pageYOffset >= offscreen.top){
                    $(".header").addClass("sticky");
                } else { 
                    $(".header").removeClass("sticky");
                };
                if (window.pageYOffset >= offscreen2.top){
                    $(".header2").addClass("sticky");
                } else { 
                    $(".header2").removeClass("sticky");
                };
            });
            
            $("#menuicon").click(function() {
                $("#Mymenu").css("width","250px");
            });
            
            $("#side_close").click(function() {
                $("#Mymenu").css("width","0");
            });
            
            $("#dropmenu").click(function(){
                $("#dropmenu").toggleClass("side_active");
                if ($("#dropmenuContent").css("height") !== "0px"){
                    $("#dropmenuContent").css("height","0px");
                } else {$("#dropmenuContent").css("height","284px");}
                
            })

            $(document).click(function(evt){ 
                $("#Mymenu").click(function(sideevt){
                    sideclick = sideevt.type;
                });
                var opened = $("#Mymenu").css('width');
                if (sideclick === false && opened !== "0px"){
                    $("#Mymenu").css("width","0");
                }
                sideclick = false;
            });
            
            $(".sub_img").click(function(){
                var takesrc = $(this).attr("src");
                $(".main_img").attr("src",takesrc);
                $(this).css('opacity',"1");
                $('.sub_img').not(this).css('opacity',"0.5");
            });
            
            $(".size_option").click(function(){
                $(this).addClass("size_focus");
                $(".size_option").not(this).removeClass("size_focus");
            });
            
            $(".color_pick").click(function(){
                $(this).addClass("color_pick_focus");
               $(this).parent().addClass("color_word_focus"); $(".color_pick").not(this).removeClass("color_pick_focus");
               $(".color_pick").not(this).parent().removeClass("color_word_focus");
            });
              

            AOS.init();
        });
