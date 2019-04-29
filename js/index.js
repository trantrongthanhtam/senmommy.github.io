 $(document).ready(function(){
            var docclick = null;
            var sideclick = false;
            
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
            
            AOS.init();
        });
