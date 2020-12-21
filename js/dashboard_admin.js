jQuery(function ($) {
  load();

  var clicks = 0;
  $('#comp').click(function(){
    if(clicks == 0){
      $('.treeview-menu').show();
      clicks++;
    }else{
      $('.treeview-menu').hide();
      clicks--;
    }
});

    //btn hamborguer
$('#btn_hamborger').click(function(){
    $('.box').slideToggle();
    });
    //btn hamborguer

   /* $('.treeview ').click(function(){
        $('.treeview ').removeClass('active1');
        $(this).addClass('active1');
      }); */

       //Owl Carousel
       $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        navigation: false,
        touchDrag:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            575:{
              items:1
          },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    //li click
    $('.li1').click(function(){
     $('.Annuels').hide();
     $('.Périodiques').show();
    });
    $('.li2').click(function(){
      $('.Annuels').show();
      $('.Périodiques').hide();
     });

    // navigation périodiques et annuels
    $('.li1').click(function(){
      $('.circle1').css("opacity" , "1");
      $('.circle2').css("opacity" , "0");
    });
    $('.li2').click(function(){
      $('.circle1').css("opacity" , "0");
      $('.circle2').css("opacity" , "1");
    });
     // navigation périodiques et annuels
     
     // active classe for li treeview paris
     $('.treeview-menu_paris li').click(function(){
      $('.treeview-menu_paris li').removeClass('active_paris');
      $(this).addClass('active_paris');
    });

    //browse1
    var old_html = $('.image_participant').html();
    

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('.image_participant').css('background-image', 'url('+e.target.result +')');
                //$('#img_profile').attr("src", e.target.result);
                $('.title_participant').hide();
                $('.image_participant').css('backgroun-size','cover');
                $('.image_participant').css('backgroun-position','center');
                $('.image_participant').css('cursor', 'pointer');
                $('.image_participant').css('border', 'none');
                $('.download_image').hide();
                $('.btn_confirmer_annuler').show();
                $('#uploadButton1').css('display', 'none');
              }
            reader.readAsDataURL(input.files[0]);
        }

      }
      $("#uploadFile1").change(function() {
        readURL(this);
      });

       //clique confirmer et annuler logo admin
      $('.btn_confirmer_annuler button:nth-of-type(2)').click(function(){
          $('.image_participant').css('background-image', 'none');
          $('.image_participant').css('border', '1.5px solid #A4A4A4');
          $('.image_participant').html(old_html);
          function readURL_annuler(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('.image_participant').css('background-image', 'url('+e.target.result +')');
                    //$('#img_profile').attr("src", e.target.result);
                    $('.title_participant').hide();
                    $('.image_participant').css('backgroun-size','cover');
                    $('.image_participant').css('backgroun-position','center');
                    $('.image_participant').css('cursor', 'pointer');
                    $('.image_participant').css('border', 'none');
                    $('.download_image').hide();
                    //$('.btn_confirmer_annuler').show();
                    $('.label_change_logo').show();
                    $('.label_change_logo i').show();
                    $('.label_change_logo span').show();
                    $('#uploadButton1').css('display', 'none');
                  }
                reader.readAsDataURL(input.files[0]);
            }
          }
          $("#uploadFile1").change(function() {
            readURL_annuler(this);
          });
    });
    // btn_annuler click

  $('.btn_confirmer_annuler button:nth-of-type(1)').click(function(){
    $('.btn_confirmer_annuler').hide();
    $('.label_change_logo').show();
    $('.label_change_logo i').show();
    $('.label_change_logo span').show();
  }); 
  $('.label_change_logo').click(function(){
    $(this).hide();
    $('.label_change_logo i').hide();
    $('.label_change_logo span').hide();
    $('.btn_confirmer_annuler').show();
  });  
     //browse2
     var old_html_1 = $('.carousel_matchs').html();
      function readURL1(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('.owl-carousel').css('background-image', 'url('+e.target.result +')');
                $('.owl-carousel').css('backgroun-size','cover');
                $('.owl-carousel').css('backgroun-position','center');
                $('.owl-carousel').css('background-repeat', 'no-repeat');
                $('.owl-carousel').css('cursor', 'pointer');
                $('.owl-carousel').css('border', 'none');
                $('#uploadButton2').css('z-index', '0');

                //$('#img_profile').attr("src", e.target.result);
                $('.title_participant_1').hide();
                //$('.btn_confirmer_annuler_coverture').show();
                $('.btn_confirmer_annuler_coverture').css({'opacity':'1' , 'cursor' : 'pointer'});
                $('.glisser_text').show();
               
            }
            reader.readAsDataURL(input.files[0]);
        }
      }
      $("#uploadFile2").change(function() {
        readURL1(this);
      }); 

      $('.owl-carousel').mousedown(function(){
        $('.glisser_text').hide(300);
      });
      
      $('.btn_confirmer_annuler_coverture button:nth-of-type(2)').click(function(){
        $('.owl-carousel').css('background-image', 'none');
        $('.owl-carousel').css('border', '1.5px solid #A4A4A4');
        $('.btn_confirmer_annuler_coverture').hide();
        $('.glisser_text').hide(100);
        $('.title_participant_1').show();
        $('.download_image').show();
        $('.carousel_matchs').html(old_html_1);

        function readURL1_annuler(input) {
          if (input.files && input.files[0]) {
              var reader = new FileReader();
              reader.onload = function(e) {
                  $('.owl-carousel').css('background-image', 'url('+e.target.result +')');
                  $('.owl-carousel').css('backgroun-size','cover');
                  $('.owl-carousel').css('backgroun-position','center');
                  $('.owl-carousel').css('background-repeat', 'no-repeat');
                  $('.owl-carousel').css('cursor', 'pointer');
                  $('.owl-carousel').css('border', 'none');
                  $('#uploadButton2').css('z-index', '0');
  
                  //$('#img_profile').attr("src", e.target.result);
                  $('.title_participant_1').hide();
                  //$('.btn_confirmer_annuler_coverture').show();
                  //$('.btn_confirmer_annuler_coverture').css({'opacity':'1' , 'cursor' : 'pointer'});
                  $('.glisser_text').show();
                  $('.label_change_logo_coverture').show();
                  $('.label_change_logo_coverture i').show();
                  $('.label_change_logo_coverture span').show();


                  //mouve background 2
const el1 = document.querySelector("#slideshow");
var pressing1 = false;
el1.addEventListener("mousedown", e => {
  pressing1 = true;
  $('.glisser_text').hide(100);
});

el1.addEventListener("mousemove", function move(e) {
  if (pressing1) {
    // do something only if mouse button is being pressed
    el1.style.backgroundPositionY = (e.offsetY / 2 ) + "%";
  }
});
el1.addEventListener("mouseup", function stop(e) {
  pressing1 = false;
});
//mouve background 2
                 
              }
              reader.readAsDataURL(input.files[0]);
          }
        }
        $("#uploadFile2").change(function() {
          readURL1_annuler(this);
        }); 
      }); 
      $('.btn_confirmer_annuler_coverture button:nth-of-type(1)').click(function(){
        $('.btn_confirmer_annuler_coverture').hide();
        $('.label_change_logo_coverture').show();
        $('.label_change_logo_coverture i').show();
        $('.label_change_logo_coverture span').show();
        $('.glisser_text').hide(100);
      }); 
      $('.label_change_logo_coverture').click(function(){
        $(this).hide();
        $('.label_change_logo_coverture i').hide();
        $('.label_change_logo_coverture span').hide();
        $('.btn_confirmer_annuler_coverture').show();
        $('.glisser_text').show(100);
      });  
   
      
      $('.ligue1_periodique').click(function(){
           $(this).toggleClass('show-list');
           $(this).css("border-right" , "6px solid #FF3952") ;
           $(this).css({ transform: 'scale(1.1)' });  
           $(this).css("margin-left" , "-1px");
           $(this).css("z-index" , "10");
           // first click
         
          $(".ligue2_periodique").css("border-right" , "1px solid #2F2E50") ;
          $(".ligue2_periodique").css({ transform: 'scale(1)' });
          $(".ligue2_periodique").css("margin-left" , "0px");
          $(".ligue2_periodique").css("z-index" , "0"); 
          $(".ligue3_periodique").css("border-right" , "1px solid #2F2E50") ;
          $(".ligue3").css({ transform: 'scale(1)' }); 
          $(".ligue3_periodique").css("margin-left" , "0px"); 
          $(".ligue3_periodique").css("z-index" , "0"); 
          $(".ligue4_periodique").css("border-right" , "1px solid #2F2E50") ;
          $(".ligue4_periodique").css({ transform: 'scale(1)' });  
          $(".ligue4_periodique").css("margin-left" , "0px");
          $(".ligue4_periodique").css("z-index" , "0"); 
          // second click

          $(".ligue2_periodique").removeClass('show-list');
          $(".ligue3_periodique").removeClass('show-list');
          $(".ligue4_periodique").removeClass('show-list');
      });

      $('.ligue1').click(function(){
        $(this).toggleClass('show-list');
        $(this).css("border-right" , "6px solid #FF3952") ;
        $(this).css({ transform: 'scale(1.1)' });  
        $(this).css("margin-left" , "-1px");
        $(this).css("z-index" , "10");
        // first click
      
       $(".ligue2").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue2").css({ transform: 'scale(1)' });
       $(".ligue2").css("margin-left" , "0px");
       $(".ligue2").css("z-index" , "0"); 
       $(".ligue3").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue3").css({ transform: 'scale(1)' }); 
       $(".ligue3").css("margin-left" , "0px"); 
       $(".ligue3").css("z-index" , "0"); 
       $(".ligue4").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue4").css({ transform: 'scale(1)' });  
       $(".ligue4").css("margin-left" , "0px");
       $(".ligue4").css("z-index" , "0"); 
       // second click

       $(".ligue2").removeClass('show-list');
       $(".ligue3").removeClass('show-list');
       $(".ligue4").removeClass('show-list');
   });

      
      $('.ligue2').click(function(){
        $(this).toggleClass('show-list');
        $(this).css("border-right" , "6px solid #FF3952") ;
        $(this).css({ transform: 'scale(1.1)' });  
        $(this).css("margin-left" , "-1px");
        $(this).css("z-index" , "10");
        // first click
      
       $(".ligue1").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue1").css({ transform: 'scale(1)' });
       $(".ligue1").css("margin-left" , "0px");  
       $(".ligue1").css("z-index" , "0"); 
       $(".ligue3").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue3").css({ transform: 'scale(1)' }); 
       $(".ligue3").css("margin-left" , "0px"); 
       $(".ligue3").css("z-index" , "0"); 
       $(".ligue4").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue4").css({ transform: 'scale(1)' });  
       $(".ligue4").css("margin-left" , "0px");
       $(".ligue4").css("z-index" , "0"); 
       // second click

       $(".ligue1").removeClass('show-list');
       $(".ligue3").removeClass('show-list');
       $(".ligue4").removeClass('show-list');
         
      });

      $('.ligue2_periodique').click(function(){
        $(this).toggleClass('show-list');
        $(this).css("border-right" , "6px solid #FF3952") ;
        $(this).css({ transform: 'scale(1.1)' });  
        $(this).css("margin-left" , "-1px");
        $(this).css("z-index" , "10");
        // first click
      
       $(".ligue1_periodique").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue1_periodique").css({ transform: 'scale(1)' });
       $(".ligue1_periodique").css("margin-left" , "0px");  
       $(".ligue1_periodique").css("z-index" , "0"); 
       $(".ligue3_periodique").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue3_periodique").css({ transform: 'scale(1)' }); 
       $(".ligue3_periodique").css("margin-left" , "0px"); 
       $(".ligue3_periodique").css("z-index" , "0"); 
       $(".ligue4_periodique").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue4_periodique").css({ transform: 'scale(1)' });  
       $(".ligue4_periodique").css("margin-left" , "0px");
       $(".ligue4_periodique").css("z-index" , "0"); 
       // second click

       $(".ligue1_periodique").removeClass('show-list');
       $(".ligue3_periodique").removeClass('show-list');
       $(".ligue4_periodique").removeClass('show-list');
         
      });

      
      $('.ligue3').click(function(){
        $(this).toggleClass('show-list');
        $(this).css("border-right" , "6px solid #FF3952") ;
        $(this).css({ transform: 'scale(1.1)' });  
        $(this).css("margin-left" , "-1px");
        $(this).css("z-index" , "10");
        // first click
      
       $(".ligue1").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue1").css({ transform: 'scale(1)' });
       $(".ligue1").css("margin-left" , "0px");  
       $(".ligue1").css("z-index" , "0"); 
       $(".ligue2").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue2").css({ transform: 'scale(1)' }); 
       $(".ligue2").css("margin-left" , "0px"); 
       $(".ligue2").css("z-index" , "0"); 
       $(".ligue4").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue4").css({ transform: 'scale(1)' });  
       $(".ligue4").css("margin-left" , "0px");
       $(".ligue4").css("z-index" , "0"); 
       // second click

       $(".ligue1").removeClass('show-list');
       $(".ligue2").removeClass('show-list');
       $(".ligue4").removeClass('show-list');
      });

      $('.ligue3_periodique').click(function(){
        $(this).toggleClass('show-list');
        $(this).css("border-right" , "6px solid #FF3952") ;
        $(this).css({ transform: 'scale(1.1)' });  
        $(this).css("margin-left" , "-1px");
        $(this).css("z-index" , "10");
        // first click
      
       $(".ligue1_periodique").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue1_periodique").css({ transform: 'scale(1)' });
       $(".ligue1_periodique").css("margin-left" , "0px");  
       $(".ligue1_periodique").css("z-index" , "0"); 
       $(".ligue2_periodique").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue2_periodique").css({ transform: 'scale(1)' }); 
       $(".ligue2_periodique").css("margin-left" , "0px"); 
       $(".ligue2_periodique").css("z-index" , "0"); 
       $(".ligue4_periodique").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue4_periodique").css({ transform: 'scale(1)' });  
       $(".ligue4_periodique").css("margin-left" , "0px");
       $(".ligue4_periodique").css("z-index" , "0"); 
       // second click

       $(".ligue1_periodique").removeClass('show-list');
       $(".ligue2_periodique").removeClass('show-list');
       $(".ligue4_periodique").removeClass('show-list');
      });


      
      $('.ligue4').click(function(){
        $(this).toggleClass('show-list');
        $(this).css("border-right" , "6px solid #FF3952") ;
        $(this).css({ transform: 'scale(1.1)' });  
        $(this).css("margin-left" , "-1px");
        $(this).css("z-index" , "10");
        // first click
      
       $(".ligue1").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue1").css({ transform: 'scale(1)' });
       $(".ligue1").css("margin-left" , "0px");  
       $(".ligue2").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue2").css({ transform: 'scale(1)' }); 
       $(".ligue2").css("margin-left" , "0px"); 
       $(".ligue3").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue3").css({ transform: 'scale(1)' });  
       $(".ligue3").css("margin-left" , "0px");
       // second click

       $(".ligue1").removeClass('show-list');
       $(".ligue2").removeClass('show-list');
       $(".ligue3").removeClass('show-list');
      });

       
      $('.ligue4_periodique').click(function(){
        $(this).toggleClass('show-list');
        $(this).css("border-right" , "6px solid #FF3952") ;
        $(this).css({ transform: 'scale(1.1)' });  
        $(this).css("margin-left" , "-1px");
        $(this).css("z-index" , "10");
        // first click
      
       $(".ligue1_periodique").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue1_periodique").css({ transform: 'scale(1)' });
       $(".ligue1_periodique").css("margin-left" , "0px");  
       $(".ligue2_periodique").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue2_periodique").css({ transform: 'scale(1)' }); 
       $(".ligue2_periodique").css("margin-left" , "0px"); 
       $(".ligue3_periodique").css("border-right" , "1px solid #2F2E50") ;
       $(".ligue3_periodique").css({ transform: 'scale(1)' });  
       $(".ligue3_periodique").css("margin-left" , "0px");
       // second click

       $(".ligue1_periodique").removeClass('show-list');
       $(".ligue2_periodique").removeClass('show-list');
       $(".ligue3_periodique").removeClass('show-list');
      });

      //btn_inviter_click
      $('#btn_inviter').click(function(){

        if ($('.ligue1').hasClass('show-list')) {
            $('.ligue1').css("display" , "block");
          }else{
            $('.ligue1').css("display" , "none")
          };
          if ($('.ligue2').hasClass('show-list')) {
            $('.ligue2').css("display" , "block");
          }else{
            $('.ligue2').css("display" , "none")
          };
          if ($('.ligue3').hasClass('show-list')) {
            $('.ligue3').css("display" , "block");
          }else{
            $('.ligue3').css("display" , "none")
          };
          if ($('.ligue4').hasClass('show-list')) {
            $('.ligue4').css("display" , "block");
          }else{
            $('.ligue4').css("display" , "none")
          };

          //replace div with another div
          //$('.ligue2').hasClass('name_ligue').delay(500);
          $('.div_selectionez_les_paris').show();
          $("#btn_inviter").hide();
          $("#btn_anuller").show();
          $('.dropdown_div_inviter').hide();
          //css div
          $('.div_selectionez_les_paris').css({"display":"flex" , "flex-direction":"column" , "justify-content":"flex-end"});
          //$('.name_ligue').css({"display":"flex" , "flex-direction":"column" , "justify-content":"flex-end" , "margin-top":"20px"});

        // click tr table
      $('.tr_caractéres_tables').click(function(event){
        event.preventDefault();
        //$(this).css("background-color", "#D2D2D2");
       $(this).toggleClass('picked');  
        $('#btn_suivant').show();
        $(this).hasClass('show-list');
        $(this).click(function(){
        $('.tr_caractéres_tables').remove('show-list');
        }); 

        var currentRow=$(this).closest("tr"); 
  
        var col1=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
        var col2=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
        var col3=currentRow.find("td:eq(2)").text(); // get current row 3rd TD
        var col4=currentRow.find("td:eq(3)").text(); // get current row 4rd TD
        var col5=currentRow.find("td:eq(4)").text(); // get current row 5rd TD
        var data=col1+"\n"+col2+"\n"+col3+col4+col5 ; 
        //var col6=currentRow.find("td:eq(4)").css("border-right", "6px solid #FF3952");   
        //find value of first th
        //var col7=currentRow1.find("thead").find("th:eq(0)").text();
        //var data1 = col7;
        // alert(data1);   
        var currentRow1=$(this).closest("table"); 
        var col7=currentRow1.find("thead").find("th:eq(0)").css("background-color" , "#4F4289");  
      
    });
    $(".date_pari").click(function(event){
      event.preventDefault();
      var currentRow2=$(this).closest("table"); 
      var col8=currentRow2.find("thead").find("th:eq(1)").css("opacity" , "1");
      var col9=currentRow2.find("tbody").find("tr");

      //var col10=currentRow2.find(".td3").css("border-right", "6px solid #FF3952");
      //$(col9).addClass('picked');
     $(col9).toggleClass("picked2");

    });

    $('.table_div thead tr').click(function (e) {
      if(!$(e.target).is('.table_div th input:checkbox'))
      $(this).find('input:checkbox').trigger('click');
  }); 
  });

  // btn_inviter_periodique
   //btn_inviter_click
   $('#btn_inviter_periodique').click(function(){

    if ($('.ligue1_periodique').hasClass('show-list')) {
        $('.ligue1_periodique').css("display" , "block");
      }else{
        $('.ligue1_periodique').css("display" , "none")
      };
      if ($('.ligue2_periodique').hasClass('show-list')) {
        $('.ligue2_periodique').css("display" , "block");
      }else{
        $('.ligue2_periodique').css("display" , "none")
      };
      if ($('.ligue3_periodique').hasClass('show-list')) {
        $('.ligue3_periodique').css("display" , "block");
      }else{
        $('.ligue3_periodique').css("display" , "none")
      };
      if ($('.ligue4_periodique').hasClass('show-list')) {
        $('.ligue4_periodique').css("display" , "block");
      }else{
        $('.ligue4_periodique').css("display" , "none")
      };

      //replace div with another div
      //$('.ligue2').hasClass('name_ligue').delay(500);
      $('.tr_caractéres_tables_periodique').css("background-color", "#D2D2D2");
      $('#btn_inviter_periodique').hide();
      $('.dropdown_div_inviter_periodique').hide();
      //css div
      $('.div_selectionez_les_paris').css({"display":"flex" , "flex-direction":"column" , "justify-content":"flex-end"});
      //$('.name_ligue').css({"display":"flex" , "flex-direction":"column" , "justify-content":"flex-end" , "margin-top":"20px"});
      $('.table_div_periodique').show(); setTimeout(function(){
        $('.table_div_periodique').hide(); 
      }, 800);
      $('.div_liste_des_emails_dashboard_periodique').delay(800).fadeIn(0);
      $('#btn_confirmer_periodique').delay(800).fadeIn(0);
      $("#btn_anuller_periodique").delay(800).fadeIn(0);
});


// click tr table
      //btn_inviter_click
      //btn_annuler
      $('#btn_anuller').click(function(){
        location.reload(true);
      });
      $("#btn_anuller_periodique").click(function(){
        location.reload(true);
      });
      //btn_annuler
      //btn_suivant
      $('#btn_suivant').click(function(){
        $('.table_div').hide();
        $('.div_liste_des_emails_dashboard').show();
        $('#btn_confirmer').show();
        $('.div_retour').css("opacity","1");
        $(this).hide();
      });
      //btn_suivant
   //section cadeaux //
   $("#importer_image").click(function(){
    $("#uploadFile3").click();
  
    function readURL20(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
              $('#image_va_upload').css('background-image', 'url('+e.target.result +')');
              $('#image_va_upload').hide();
              $('#image_va_upload').fadeIn(650);
              $('#image_va_upload').css("background-size" , "cover");
              $('#image').css("opacity" , "0");
              $('#importer_image').css("opacity" , "0");
          }
          reader.readAsDataURL(input.files[0]);
      }
  }
  $("#uploadFile3").change(function() {
    readURL20(this);
  });
  });

  $("#importer_image_1").click(function(){
    $("#uploadFile4").click();
  
    function readURL21(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
              $('#image_va_upload_1').css('background-image', 'url('+e.target.result +')');
              $('#image_va_upload_1').hide();
              $('#image_va_upload_1').fadeIn(650);
              $('#image_va_upload_1').css("background-size" , "cover");
              $('#image_1').css("opacity" , "0");
              $('#importer_image_1').css("opacity" , "0");
          }
          reader.readAsDataURL(input.files[0]);
      }
  }
  $("#uploadFile4").change(function() {
      readURL21(this);
  });
  });

  $("#importer_image_2").click(function(){
    $("#uploadFile5").click();
  
    function readURL22(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
              $('#image_va_upload_2').css('background-image', 'url('+e.target.result +')');
              $('#image_va_upload_2').hide();
              $('#image_va_upload_2').fadeIn(650);
              $('#image_va_upload_2').css("background-size" , "cover");
              $('#image_2').css("opacity" , "0");
              $('#importer_image_2').css("opacity" , "0");
          }
          reader.readAsDataURL(input.files[0]);
      }
  }
  $("#uploadFile5").change(function() {
      readURL22(this);
  });

  });


  $("#importer_image_periodique").click(function(){
    $("#uploadFile6").click();
  
    function readURL23(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
              $('#image_va_upload_periodique').css('background-image', 'url('+e.target.result +')');
              $('#image_va_upload_periodique').hide();
              $('#image_va_upload_periodique').fadeIn(650);
              $('#image_va_upload_periodique').css("background-size" , "cover");
              $('#image_periodique').css("opacity" , "0");
              $('#importer_image_periodique').css("opacity" , "0");
          }
          reader.readAsDataURL(input.files[0]);
      }
  }
  $("#uploadFile6").change(function() {
      readURL23(this);
  });

  });
  $("#importer_image_1_periodique").click(function(){
    $("#uploadFile7").click();
  
    function readURL24(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
              $('#image_va_upload_1_periodique').css('background-image', 'url('+e.target.result +')');
              $('#image_va_upload_1_periodique').hide();
              $('#image_va_upload_1_periodique').fadeIn(650);
              $('#image_va_upload_1_periodique').css("background-size" , "cover");
              $('#image_1_periodique').css("opacity" , "0");
              $('#importer_image_1_periodique').css("opacity" , "0");
          }
          reader.readAsDataURL(input.files[0]);
      }
  }
  $("#uploadFile7").change(function() {
      readURL24(this);
  });

  });
  $("#importer_image_2_periodique").click(function(){
    $("#uploadFile8").click();
  
    function readURL25(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
              $('#image_va_upload_2_periodique').css('background-image', 'url('+e.target.result +')');
              $('#image_va_upload_2_periodique').hide();
              $('#image_va_upload_2_periodique').fadeIn(650);
              $('#image_va_upload_2_periodique').css("background-size" , "cover");
              $('#image_2_periodique').css("opacity" , "0");
              $('#importer_image_2_periodique').css("opacity" , "0");
          }
          reader.readAsDataURL(input.files[0]);
      }
  }
  $("#uploadFile8").change(function() {
      readURL25(this);
  });

  });


// show div cadeaux with loop
    var clicks = 0;
    $('.li_ajout').click(function(){
      if(clicks == 0){
        $('.add_new_div_1').show();
        clicks++;
      }else{
        $('.add_new_div_2').show();
        clicks--;
      }
  });
  // show div cadeaux with loop
  var clicks = 0;
  $('.li_ajout_periodique').click(function(){
    if(clicks == 0){
      $('.add_new_div_1_periodique').show();
      clicks++;
    }else{
      $('.add_new_div_2_periodique').show();
      clicks--;
    }
});
  
  $('.li_close_1').click(function(){
    $('.add_new_div_1').hide();
  });
  $('.li_close_2').click(function(e){
    $('.add_new_div_2').hide();
    e.preventDefault();
  });

  $('.li_close_1_periodique').click(function(){
    $('.add_new_div_1_periodique').hide();
  });
  $('.li_close_2_periodique').click(function(e){
    $('.add_new_div_2_periodique').hide();
    e.preventDefault();
  });
  //btn_confirmer_liste_emails
  $('#btn_confirmer_periodique').click(function(){
   $(this).hide();
   $('.div_liste_des_emails_dashboard_periodique').hide();
   $(".div_ajout_des_cadeaux_periodique").show();
   $('#btn_confirmer_1_periodique').show();
  });  

  $('#btn_confirmer').click(function(){
    $(this).hide();
    $('.div_liste_des_emails_dashboard').hide();
    $('.div_ajout_des_cadeaux').show();
    $('#btn_confirmer_1').show();
   });  

   // selection et la deselection de les inputs de mes compétitions
   var clicks_input = 0;
   $('.div_inputs_liste_emails input').click(function(){
     if(clicks_input == 0){
       $(this).css({"background-color" : "white" , "border-right" : "1px solid #B3B3BB" , "cursor" : "pointer"});
       clicks_input++;
     }else{
      $(this).css({"background-color" : "#B3B3BB" , "border-right" : "6px solid #EE3E57" , "cursor" : "pointer"});
       clicks_input--;
     }
 });
 // selection et la deselection de les inputs de mes compétitions
  
  //mes squebeez
  $('#btn_confirmer_1').click(function(){
    $('.mes_squeebes').show(500);
    $('.div_ajout_des_cadeaux').hide(500);
    $('#btn_confirmer_1').hide();
    $('.input_div2_mes_squeebes').keyup(function(){
      $('#btn_confirmer_2').show();
      
    });
    
  });
  $('#btn_confirmer_1_periodique').click(function(){
    $('.mes_squeebes_periodique').show(500);
    $('.div_ajout_des_cadeaux_periodique').hide(500);
    $('#btn_confirmer_1_periodique').hide();
    $('.input_div2_mes_squeebes_periodique').keyup(function(){
      $('#btn_confirmer_2_periodique').show();
      
    });
    
  });

  $('#btn_confirmer_2_periodique').click(function(){
    
    $('.mes_squeebes_periodique').hide(500);
    $('.creation_avec_succée_periodique').show(500);
    $(this).css({"opacity" : "0" , "pointer-events" : "none"});
    $('#btn_anuller_periodique').css({"opacity" : "0" , "pointer-events" : "none"});
  });

  var y=1;
  $('#btn_confirmer_2').click(function(){
    var x = $('.span_prix_paris').html();
    var x1 = x-y;
    $('.span_prix_paris').html(x1);

    $('.mes_squeebes').hide(500);
    $('.creation_avec_succée').show(500);
    $(this).css({"opacity" : "0" , "pointer-events" : "none"});
    $('#btn_anuller').css({"opacity" : "0" , "pointer-events" : "none"});
    $('.div_retour').hide();

  });

  //liste des emails
  $('#btn_ajouter').click(function(){
    $(this).hide();
    $("#btn_supprimer").hide();
    $("#btn_partager_lien").show();
    $("#btn_insertion_manuelle").show();
    $("#btn_annuler").show();

  }); 
  $("#btn_insertion_manuelle").click(function(){
    $(this).hide();
    $("#btn_partager_lien").hide();
    $(".span_combien").show();
    $("#input_insertion_manuelle").show();
    $("#btn_confirmer_insertion_manuelle").show();
    $("#btn_annuler").show();
  });

  function load() {
    $('#btn_confirmer_insertion_manuelle').click(function(){
      var NoOfRec = $("#input_insertion_manuelle").val();
      // if NoOfRec>0
      if(NoOfRec >0){
        createControll(NoOfRec);
      }
      $(this).hide();
      $(".span_combien").hide();
      $("#input_insertion_manuelle").hide();
      $("#btn_annuler").show();
      $("#btn_inviter_email").show();
    });
  }
  function createControll(NoOfRec){
    var div_controll = "";
  for(i = 1 ; i <= NoOfRec ; i++){
    //var y = i+18;
    div_controll += " <div class='AddControl_input_1'> "+
        //"<span class='span_add'>"+i+"</span>"+
        "<input id='input_add' class='input_add' name='myinput' type='texte' placeholder='someone@example.com' required/>"+
  "</div>";

  }
  $('.AddControl_input').append(div_controll);
  }
  
  // click btn inviter
  $('#btn_inviter_email').click(function(){
   $('.div_inputs_listes_des_emails').hide();
   //$('.succées_invitation').delay(2000).show(0);
   //$('.succées_invitation').delay(50).fadeOut(0);
   $('.succées_invitation').show(); setTimeout(function(){
    $('.succées_invitation').hide();
 }, 2000); 
   $('.div_inputs_listes_des_emails').delay(2000).fadeIn(0);

   $(this).hide();
   $('#btn_annuler').hide();
   $("#btn_ajouter").delay(2000).fadeIn(0);
   $("#btn_supprimer").delay(2000).fadeIn(0);

   $('.succées_invitation').css({"width": "100%" , "display": "flex" , "flex-direction": "column" , "justify-content": "center" , "align-items": "center"});
  });
  //click btn annuler
  $('#btn_annuler').click(function(){
    location.reload(true);
  });

  //supprimer click
  $('#btn_supprimer').click(function(){
    $(this).hide();
   $("#btn_ajouter").hide();
   $(".span_supression").show();
   $(".supprimer_tous_emails").show();
   $(".supprimer_tous_emails span").show();
   $('#btn_annuler').show();

  /* $('.div_inputs_listes_des_emails input').click(function(){
   $(this).toggleClass('input-emails_delete');
   $(this).css({"background-color":"#BFBFBF" , "cursor": "pointer" });
   $('#btn_confirmer_suppression').show();
  }); */
var clicks1 = 0;
  $('.div_inputs_listes_des_emails input').click(function(){
     if(clicks1 == 0){
      var x =$(this).parents(".div_in").find('label').val($(this).data('value'));
      var a = $(x).text();
      var y = $(this).parents(".div_in").addClass('input-emails_delete');
      $(this).addClass('input-emails_delete');
      $(this).css({"background-color":"#BFBFBF" , "cursor": "pointer" });
      $('#btn_confirmer_suppression').show();
      $(this).parents(".div_in").find('label').hide();
       clicks1++;
     }else{
      $(this).removeClass('input-emails_delete');
      $(this).css({"background-color":"white" , "cursor": "pointer" });
      $('#btn_confirmer_suppression').show();
      $(this).parents(".div_in").find('label').show();
       clicks1--;
     }
 });
   

  });

  //click btns popup 
   $('#btn_confirmer_suppression_email').click(function(){
    $( ".div_inputs_listes_des_emails input" ).remove( ".input-emails_delete" );
    $( ".div_inputs_listes_des_emails input" ).parents(".div_in").remove( ".input-emails_delete");
    $('#btn_confirmer_suppression').hide();
    $('#btn_annuler').hide();
    $('.span_supression').hide();
    $('.supprimer_tous_emails').hide();
    $('#btn_ajouter').show();
    $('#btn_supprimer').show();

    $('.div_inputs_listes_des_emails input').click(function(){
      $('#btn_confirmer_suppression').hide();
      $(this).css({"background-color":"white" , "cursor": "pointer" });
      $(this).parents(".div_in").find('label').show();
    });

  });
   
   //suppression tous les emails
   $('.supprimer_tous_emails span').click(function(){
    $("#btn_confirmer_suppression_tous_emails").show();
    $('.span_supression').hide();
    $('.div_inputs_listes_des_emails input').css({"background-color":"#BFBFBF" , "cursor": "pointer" });

   });
   // show liste vide
   $("#btn_confirmer_suppression_email_2").click(function(){
   $('.liste_vide').show();
   $('.liste_vide').css({"width": "100%" , "display": "flex" , "flex-direction": "column" , "justify-content": "center" ,"align-items": "center"});
   $('.liste_vide img').css("width" , "40%");
   $('.div_inputs_listes_des_emails').hide();
   $('.supprimer_tous_emails').hide();
   $("#btn_confirmer_suppression_tous_emails").hide();
   $("#btn_annuler").hide();
   });

  
  //liste des emails

  // Mes Paris //
  $(".ul_liste_des_groupes li").click(function() {
    $(".ul_liste_des_groupes li").removeClass("active5");
    $(this).addClass("active5");
  });
  $(".ul_liste_des_groupes_golf li").click(function() {
    $(".ul_liste_des_groupes_golf li").removeClass("active5");
    $(this).addClass("active5");
  });
  $(".ul_liste_des_groupes_rugby li").click(function() {
    $(".ul_liste_des_groupes_rugby li").removeClass("active5");
    $(this).addClass("active5");
  });
  $(".ul_liste_des_groupes_basket li").click(function() {
    $(".ul_liste_des_groupes_basket li").removeClass("active5");
    $(this).addClass("active5");
  });

  //navigation mes paris
  $('.li_groupe_a').click(function(){
   $('.table_div_paris').show();
   $('.content_classement').hide();
  });
  $('.li_groupe_b').click(function(){
    $('.table_div_paris').hide();
    $('.content_classement').show();
  });

  //div cadeaux
  //div cadeaux
$('.p_div_cadeux_span1').click(function(){
  $("#animation_premier_div").show(1000);
  $("#animation_premier_div").fadeOut(1000);
  $('.div_premier_cadeau').delay(2000).fadeIn(500); 
  $('.div_deuxieme_cadeau').hide(1000);
  $('.div_troisieme_cadeau').hide(1000);
  });
  $('.p_div_cadeux_span2').click(function(){
    $('.div_premier_cadeau').hide(1000);
    $("#animation_deuxieme_div").show(1000);
    $("#animation_deuxieme_div").fadeOut(1000);
    $('.div_deuxieme_cadeau').delay(2000).fadeIn(500);
    $('.div_troisieme_cadeau').hide(1000);
  });
  $('.p_div_cadeux_span3').click(function(){
  $('.div_premier_cadeau').hide(1000);
  $('.div_deuxieme_cadeau').hide(1000);
  $("#animation_troisieme_div").show(1000);
  $("#animation_troisieme_div").fadeOut(1000);
  $('.div_troisieme_cadeau').delay(2000).fadeIn(500);
  });

  $(".p_div_cadeux span").click(function() {
    $(".p_div_cadeux span").removeClass("active4");
    $(this).addClass("active4");
  });


// Mes Paris //
$(".select_ball option").click(function() {
  $(".select_ball option").removeClass("active12");
  $(this).addClass("active12");
});

//Notifications
$(".sidebar_header i").click(function() {
  
});

$(".notifications").click(function() {
  $(".notifications").removeClass("active_notification");
  $(this).addClass("active_notification");

  $('.div_notification_left').slideToggle();
  $('.box').slideToggle();
  $('.rad-menu-badge').hide(500);

});
$('.notifs').click(function(){
 $(this).css("background-color" , "white");
 var currentRow2=$(this).closest(".notifs");
 var col8=currentRow2.find(".circle").hide();
});

//animation popup
$('.btn_confirmer_suppression_email_3').click(function(){
$('#confimer_la_fin_de_pari').show();

// vider liste paris
// show liste vide
$("#btn_confirmer_suppression_email_4").click(function(){
  $('.liste_vide_pari').show();
  $('.liste_vide_pari').css({"margin-top":"10%" , "width": "100%" , "display": "flex" , "flex-direction": "column" , "justify-content": "center" ,"align-items": "center" ,"background-color":"white"});
  $('.liste_vide_pari img').css("width" , "50%" );
  $('#background_result_paris_id').hide();
  $('.scrollTop').hide();
  $('.soccer_div').hide();
  $('#confimer_la_fin_de_pari').hide();
});

});

//live popup footer

$(".footer_live_popup > div").click(function() {
  $(".footer_live_popup > div").removeClass("active_footer");
  $(this).addClass("active_footer");
});
$('.btn_live').click(function(){
//$('.live').show();
//$('.team').hide();
$('.header_live_popup').show();
$('.body_live_popup').show();
$('.close1').show();
$('.team').hide();
});
$('.btn_team').click(function(){
  $('.header_live_popup').hide();
  $('.body_live_popup').hide();
  $('.close1').show();
  $('.team').show();
});
$(".name_teams_formation span").click(function() {
  $(".name_teams_formation span").removeClass("active_name_team");
  $(this).addClass("active_name_team");
});

//live popup footer
$(".mytable").on('click','.live_button_1',function(){
  // get the current row
  var currentRow=$(this).closest("tr"); 
  
  var col1=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
  var col2=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
  var col3=currentRow.find("td:eq(2)").text(); // get current row 3rd TD
  var col4=currentRow.find("td:eq(3)").text(); // get current row 4rd TD
  var col5=currentRow.find("td:eq(4)").text(); // get current row 5rd TD
  var data=col1+"\n"+col2+"\n"+col3+col4+col5 ; 
//find name equipe
  var col20=currentRow.find(".name_team_1_paris").text();
  $('.nameteamhome').html(col20);
  var col21=currentRow.find(".name_team_2_paris").text();
  $('.nameteamaway').html(col21);
//find logo equipe
  var col22=currentRow.find(".logo_team_1_paris").attr("src");
  $('.img_team1_div_logo_teams_live').attr("src", col22);
  
  var col23=currentRow.find(".logo_team_2_paris").attr("src");
  $('.img_team2_div_logo_teams_live').attr("src", col23);
  
});

//hide popup live
// Get the live modal
var modal = document.getElementById('live_modal');
// Get the paiment modal
var modal1 = document.getElementById('moadl_paiment');
// Get the notification modal
var modal2 = document.getElementById('openModal-about_3');
// When the user clicks anywhere outside of the live, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$('select.resizeselect').change(function(){
  var text = $(this).find('option:selected').text()
  var $aux = $('<select/>').append($('<option/>').text(text))
  $(this).after($aux)
  $(this).width($aux.width())
  $aux.remove()
}).change(); 


//Profile Admin
$('.btn_confirmer_update').click(function(){
  $(this).hide();

}); 
$( ".input_name_profile_user form input" ).focus(function() {
 $('.div5_input_name_profile_user').show();
 $('.div5_input_name_profile_user').css({"display":"flex" , "flex-direction":"row" , "justify-content":"space-between" })
});
$('.btn_annuller_update').click(function(){
  location.reload(true);

}); 
function readURL2(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
          $('#imagePreview').css('background-image', 'url('+e.target.result +')');
          //$('#img_profile').attr("src", e.target.result);
          $('#imagePreview').hide();
          $('#imagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function() {
  readURL2(this);
});
// actuel password
$('#mdp_actuel').keyup(function() {
$('.img_check').show(200);
if(($(this).val()) == ""){
  $('.img_check').hide(200);
}
});
// new password
$('#mdp_nouveau').keyup(function() {
  var pswd = $(this).val();
  var upper_text= new RegExp('[A-Z]');
var lower_text= new RegExp('[a-z]');
var number_check=new RegExp('[0-9]');
if ( pswd.match(lower_text) && pswd.match(upper_text) && pswd.match(number_check) && pswd.length >= 8 ) {
  $('.img_check_nouveau').show(200);
  $('.img_wrong_nouveau').hide(200);
} 
else {
  $('.img_wrong_nouveau').show(200);
  $('.img_check_nouveau').hide(200);
}
if(($(this).val()) == ""){
  $('.img_check_nouveau').hide(200);
  $('.img_wrong_nouveau').hide(200);
}
});
// validate new password
$('#mdp_retappez').keyup(function() {
  if(($(this).val()) == ($('#mdp_nouveau').val())){
    $('.img_check_retappez').show(200);
    $('.img_wrong_rettapez').hide(200);
    $('.btn_confirmer_password').show();
  }
  else if(($(this).val()) != ($('#mdp_nouveau').val())){
    $('.img_wrong_rettapez').show(200);
  $('.img_check_retappez').hide(200);
  $('.btn_confirmer_password').hide();
  }
  else if(($(this).val()) == ""){
    $('.img_wrong_rettapez').hide(200);
    $('.img_check_retappez').hide(200);
  }

});
// show update password
$('.changer_mot_de_passe').click(function(){
  $(this).hide();
  $('.div_retour_password').show();
$('.inputs_change_mot_de_passe_div').show();
$('.inputs_change_mot_de_passe_div').css({"width": "100%" ,
  "display": "flex",
  "flex-direction": "row",
  "justify-content": "center",
  "align-items": "center",
  "margin-top": "10%",
  "margin-bottom": "15%",
  }),
$('.avatar-upload').hide();
$('.input_name_profile_user').hide();
});
// click btn confimer password
$('.btn_confirmer_password').click(function(){
  $('.inputs_change_mot_de_passe_div').fadeOut(0);
  $('.mdp_changé_succée').show();
  $('.mdp_changé_succée').css({
    "width": "100%",
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    "text-align": "center",
    "margin-top": "20%",
  "margin-bottom": "25%",
  });
   setTimeout(function(){
    $('.mdp_changé_succée').hide();
    $('#mdp_actuel').val(function(){
    $(this) =="";
    });
    $("#mdp_nouveau").val(function(){
      $(this) =="";
    });
    $("#mdp_retappez").val(function(){
        $(this) =="";
    });
    $('.img_check').hide();
    $('.img_wrong').hide();
    $('.img_check_nouveau').hide();
    $('.img_wrong_nouveau').hide();
    $('.img_check_retappez').hide();
    $('.img_wrong_rettapez').hide();
    $('.btn_confirmer_password').hide();
  }, 2000);
  $('.input_name_profile_user').delay(2000).fadeIn(0);
  $('.changer_mot_de_passe').delay(2000).fadeIn(0);
  $('.avatar-upload').delay(2000).fadeIn(0);
  $('.div_retour_password').hide();
});
$('.div_retour_password').click(function(){
$(this).hide();
$('.inputs_change_mot_de_passe_div').hide();
$('.changer_mot_de_passe').show();
$('.avatar-upload').show();
$('.input_name_profile_user').show();
});
//Profile Admin
//active dropdown
/*$(".dropdown-menu a").click(function(){
  var a = $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
 var x= $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
 var y = $(x).text();
 var b = $(a).text();
});*/
$(".dropdown_league_mes_paris_a a").click(function(){
  var a = $(this).find('.sp4');
  var b = $(this).find('.sp5');
  var c = $(this).find('.sp6');
  var x =$(a).text();
  var x1 =$(b).text();
  var x2 =$(c).text();

  $('.sp1').empty().html(x);
  $('.sp2').empty().html(x1);
  $('.sp3').empty().html(x2);
});
$(".dropdown_league_mes_paris_a_golf a").click(function(){
  var a = $(this).find('.sp_golf_4');
  var b = $(this).find('.sp_golf_5');
  var c = $(this).find('.sp_golf_6');
  var x =$(a).text();
  var x1 =$(b).text();
  var x2 =$(c).text();

  $('.sp_golf_1').empty().html(x);
  $('.sp_golf_2').empty().html(x1);
  $('.sp_golf_3').empty().html(x2);
});
$(".dropdown_league_mes_paris_a_basket a").click(function(){
  var a = $(this).find('.sp_basket_4');
  var b = $(this).find('.sp_basket_5');
  var c = $(this).find('.sp_basket_6');
  var x =$(a).text();
  var x1 =$(b).text();
  var x2 =$(c).text();

  $('.sp_basket_1').empty().html(x);
  $('.sp_basket_2').empty().html(x1);
  $('.sp_basket_3').empty().html(x2);
});
$(".dropdown_league_mes_paris_a_rugby a").click(function(){
  var a = $(this).find('.sp_rugby_4');
  var b = $(this).find('.sp_rugby_5');
  var c = $(this).find('.sp_rugby_6');
  var x =$(a).text();
  var x1 =$(b).text();
  var x2 =$(c).text();

  $('.sp_rugby_1').empty().html(x);
  $('.sp_rugby_2').empty().html(x1);
  $('.sp_rugby_3').empty().html(x2);
});


/*$(".dropdown-item_periodique").click(function(){
  var a = $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  var b = $(a).text();
  alert(b);
  // show div with dropdown
 if( b = 'Basketball'){
  $('.resultat_paris_basketball').css("display" , "block");
  $('.resultat_paris').css("display" , "none");
 } 
else if( b = 'Soccer'){
  $('.resultat_paris').css("display" , "block");
  $('.resultat_paris_basketball').css("display" , "none");
}
else if( b = 'Golf'){
  $('.resultat_paris_golf').fadeIn();
  $('.resultat_paris_basketball').hide();
  $('.resultat_paris').hide();
}
else if( b = 'Football américain'){
  $('.resultat_paris_footbal_americain').fadeIn();
 }

});*/
// Navigation dropdown annuels
$('.dropdown-item_annuels_1').click(function(){
  $('.resultat_paris').show();
  $('.resultat_paris_basketball').hide();
  $('.resultat_paris_golf').hide();
  $('.resultat_paris_footbal_americain').hide();

   //changement text (nom de la league et pays)
   $('.name_of_league_span').text("LA LIGA");
   $('.pays_organise').text('ESPAGNE');
   $('.date_annuels').text('23/08/2020');
});
$('.dropdown-item_annuels_2').click(function(){
  $('.resultat_paris').hide();
  $('.resultat_paris_basketball').show();
  $('.resultat_paris_golf').hide();
  $('.resultat_paris_footbal_americain').hide();

   //changement text (nom de la league et pays)
   $('.name_of_league_span').text("NBA");
   $('.pays_organise').text('USA');
   $('.date_annuels').text('21/03/2025');
});
$('.dropdown-item_annuels_3').click(function(){
  $('.resultat_paris').hide();
  $('.resultat_paris_basketball').hide();
  $('.resultat_paris_golf').show();
  $('.resultat_paris_footbal_americain').hide();

  //changement text (nom de la league et pays)
  $('.name_of_league_span').text("US OPEN");
  $('.pays_organise').text('USA');
  $('.date_annuels').text('01/02/2021');
});
$('.dropdown-item_annuels_4').click(function(){
  $('.resultat_paris').hide();
  $('.resultat_paris_basketball').hide();
  $('.resultat_paris_golf').hide();
  $('.resultat_paris_footbal_americain').show();

  //changement text (nom de la league et pays)
  $('.name_of_league_span').text("NFL");
  $('.pays_organise').text('USA');
  $('.date_annuels').text('01/02/2026');
});

// Navigation dropdown périodique
$('.dropdown-item_periodique_1').click(function(){
  $('.resultat_paris_periodique').show();
  $('.resultat_paris_basketball_periodique').hide();
  $('.resultat_paris_golf_periodique').hide();
  $('.resultat_paris_footbal_americain_periodique').hide();

  //changement text (nom de la league et pays)
  $('.name_of_league_span_periodique').text("COUPE D'EUROPE");
  $('.name_pays_organise').css('display' , 'none');
  $('.slach').css('display' , 'none');
  $('.date_fin_league').text('23/08/2020');
});
$('.dropdown-item_periodique_2').click(function(){
  $('.resultat_paris_periodique').hide();
  $('.resultat_paris_basketball_periodique').show();
  $('.resultat_paris_golf_periodique').hide();
  $('.resultat_paris_footbal_americain_periodique').hide();
 //changement text (nom de la league et pays)
  $('.name_of_league_span_periodique').text('FIBA BASKETBALL WORLD CUP');
  $('.name_pays_organise').css('display' , 'none');
  $('.slach').css('display' , 'none');
  $('.date_fin_league').text('24/10/2019');
});
$('.dropdown-item_periodique_3').click(function(){
  $('.resultat_paris_periodique').hide();
  $('.resultat_paris_basketball_periodique').hide();
  $('.resultat_paris_golf_periodique').show();
  $('.resultat_paris_footbal_americain_periodique').hide();

  //changement text (nom de la league et pays)
  $('.name_of_league_span_periodique').text('Autre compétitions');
  $('.name_pays_organise').css('display' , 'none');
  $('.slach').css('display' , 'none');
  $('.date_fin_league').text('15/09/2024');
});
$('.dropdown-item_periodique_4').click(function(){
  $('.resultat_paris_periodique').hide();
  $('.resultat_paris_basketball_periodique').hide();
  $('.resultat_paris_golf_periodique').hide();
  $('.resultat_paris_footbal_americain_periodique').show();

   //changement text (nom de la league et pays)
   $('.name_of_league_span_periodique').text('Euro-American Challenge');
   $('.name_pays_organise').css('display' , 'none');
   $('.slach').css('display' , 'none');
   $('.date_fin_league').text('15/09/2024');
});



//paiment popup
$('.btn_confirmer_paiment').click(function(){
$('.succee_paiment').css({ "margin-top" : "20%", "display" : "flex" , "flex-direction" : "column" , "justify-content" : "center" ,  "align-items" : "center"});
$('.div_confirmer_paiment').hide();
$('.white_div_modal_paiment').hide();
$('.succee_paiment').show(); setTimeout(function(){
  $('.succee_paiment').hide();
}, 1500); 
 $('.choisir_quatre_ligues_div').delay(1500).fadeIn(0);
 $('.div_confirmation_quatre_league').delay(1500).fadeIn(0);
 $('.card-0').css('border' , '6px solid #FF3952');
 $('.card-2').css('border' , '6px solid #FF3952');
 $('.card-3').css('border' , '6px solid #FF3952');
 $('.card-4').css('border' , '6px solid #FF3952');
 $('.garder_compétitions').delay(3000).fadeIn(0);
 $('.close_paiment').hide();
});
$('.div_confirmation_quatre_league a').click(function(){
  location.reload(true);
});

//clique sur card
var clicks0 = 0;
  $('.card-0').click(function(){
     if(clicks0 == 0){
      $(this).css("transform","initial");
      $(this).css("opacity","1");
      $(this).css("border","none");
    clicks0++;
     }else{
      $(this).css("transform","scale(0.98)");
      $(this).css("opacity","0.5");
      $(this).css("border","6px solid #FF3952");
       clicks0--;
     }
 });
 var clicks1 = 0;
 $('.card-1').click(function(){
  if(clicks1 == 0){
 $(this).css("transform","scale(0.98)");
 $(this).css("opacity","0.5");
 $(this).css("border","6px solid #FF3952");
 clicks1++;
  }else{
   $(this).css("transform","initial");
   $(this).css("opacity","1");
   $(this).css("border","none");
    clicks1--;
  }
});
var clicks2 = 0;
$('.card-2').click(function(){
  if(clicks2 == 0){
    $(this).css("transform","initial");
    $(this).css("opacity","1");
    $(this).css("border","none");
 clicks2++;
  }else{
   $(this).css("transform","scale(0.98)");
   $(this).css("opacity","0.5");
   $(this).css("border","6px solid #FF3952");
    clicks2--;
  }
});

var clicks3 = 0;
$('.card-3').click(function(){
  if(clicks3 == 0){
    $(this).css("transform","initial");
    $(this).css("opacity","1");
    $(this).css("border","none");
 clicks3++;
  }else{
   $(this).css("transform","scale(0.98)");
   $(this).css("opacity","0.5");
   $(this).css("border","6px solid #FF3952");
    clicks3--;
  }
});

var clicks4 = 0;
$('.card-4').click(function(){
  if(clicks4 == 0){
    $(this).css("transform","initial");
    $(this).css("opacity","1");
    $(this).css("border","none");
 clicks4++;
  }else{
   $(this).css("transform","scale(0.98)");
 $(this).css("opacity","0.5");
 $(this).css("border","6px solid #FF3952");
    clicks4--;
  }
});

var clicks5 = 0;
$('.card-5').click(function(){
  if(clicks5 == 0){
 $(this).css("transform","scale(0.98)");
 $(this).css("opacity","0.5");
 $(this).css("border","6px solid #FF3952");
 clicks5++;
  }else{
   $(this).css("transform","initial");
   $(this).css("opacity","1");
   $(this).css("border","none");
    clicks5--;
  }
});

var clicks6 = 0;
$('.card-6').click(function(){
  if(clicks6 == 0){
 $(this).css("transform","scale(0.98)");
 $(this).css("opacity","0.5");
 $(this).css("border","6px solid #FF3952");
 clicks6++;
  }else{
   $(this).css("transform","initial");
   $(this).css("opacity","1");
   $(this).css("border","none");
    clicks6--;
  }
});
$( ".div_input_code_promo input" ).keyup(function() {
  $('.div_input_code_promo button').css({'background-color' : '#FF3952' , 'border' : '1px solid #FF3952'})
});

// chat div add message
  $('.btn_send_envoi').click(function(){
    send();
  });
  $(".chat-window-message").keypress(function(event){
    if(event.which==13){
      send();
    }
  });

function send(){
 $('.content_classement_chat').scrollTop($('.content_classement_chat').prop("scrollHeight"));

var x22 = $('.nom_user_ecrire').text();
var y22 = $('.img_admin').attr('src');
var z22 = $('.chat-window-message').val();
var dt = new Date();
//var w22 = dt.toLocaleTimeString();
var w22 = (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));
//$('.nom_user_a_ecrire_admin').html(x22);
$('.image_admin_chat').attr("src", y22);
//$('.texte_chat_admin').html(z22);

    if($(".chat-window-message").val()!=""){
          $(".add_chat").append(
            "<div class='chat_div_admin new'>"+
                        "<div class='img_nom_chat_admin'>"+
                          "<img class='image_admin_chat' src="+y22+" alt=''>"+
                          "<span class='nom_user_a_ecrire_admin'>"+x22+"</span>"+
                        "</div>"+
                        "<div class='txt_chat_admin'>"+
                          "<p class='texte_chat_admin'>" +z22+ "</p>"+
                          "<span class='time_chat_admin'>" +w22+ "</span>"+
                        "</div>"+
                      "</div>"
          );
          $(".chat-window-message").val("");
          setTimeout(function(){
              $('.new').removeClass('new');
          },200);
          return false; // So the change persists
      }
  }

  // navigation mes paris
 /* $('.select_ball').on('change', function() {
    var target = $('.select_ball option:selected').val();
   switch ($(this).val()) {
    case "football":
      $('#background_result_paris_id').css('background-image' , 'url("../images/Background\ soccer@2x.png")');
      $('.table_div_paris').css({'display' : 'table' , 'width': '97%'});
      $('.ul_liste_des_groupes').show();
      $('.ul_liste_des_groupes_golf').hide();
      $('.ul_liste_des_groupes_rugby').hide();
      $('.ul_liste_des_groupes_basket').hide();
      $('.span1_name_champion').text("Soccer");
      $('#slct option:nth-of-type(1)').text("SERIE A / Italy");
      $('#slct option:nth-of-type(2)').text("Premiere league / England");
      $('#slct option:nth-of-type(3)').text("Champions league / Europe");
      $('#slct option:nth-of-type(4)').text("Bundesliga / Allemagne");
      $('#slct option:nth-of-type(5)').text("Ligue 1 / France");
      break;
    case "golf":
      $('#background_result_paris_id').css('background-image' , 'url("../images/Golf/Group -1@2x.jpg")');
      $('.table_div_paris').css('display' , 'none');
      $('.ul_liste_des_groupes').hide();
      $('.ul_liste_des_groupes_golf').show();
      $('.ul_liste_des_groupes_rugby').hide();
      $('.ul_liste_des_groupes_basket').hide();
      $('.span1_name_champion').text("Golf");
      $('#slct option:nth-of-type(1)').text("US Open / USA");
      $('#slct option:nth-of-type(2)').text("");
      $('#slct option:nth-of-type(3)').text("");
      $('#slct option:nth-of-type(4)').text("");
      $('#slct option:nth-of-type(5)').text("");
      break;
    case "rugby":
      $('#background_result_paris_id').css('background-image' , 'url("../images/Football americain/Group 903@2x.jpg")');
      $('.table_div_paris').css('display' , 'none');
      $('.ul_liste_des_groupes').hide();
      $('.ul_liste_des_groupes_golf').hide();
      $('.ul_liste_des_groupes_rugby').show();
      $('.ul_liste_des_groupes_basket').hide();
      $('.span1_name_champion').text("Football américain");
      $('#slct option:nth-of-type(1)').text("NCAA");
      $('#slct option:nth-of-type(2)').text("FFFA");
      $('#slct option:nth-of-type(3)').text("FLAG");
      $('#slct option:nth-of-type(4)').text("NFL");
      $('#slct option:nth-of-type(5)').text("");
      break;
      case "basketball":
        $('#background_result_paris_id').css('background-image' , 'url("../images/Basket/Group -2@2x.jpg")');
        $('.table_div_paris').css('display' , 'none');
        $('.ul_liste_des_groupes').hide();
        $('.ul_liste_des_groupes_golf').hide();
        $('.ul_liste_des_groupes_rugby').hide();
        $('.ul_liste_des_groupes_basket').show();
        $('.span1_name_champion').text("Basketball");
        $('#slct option:nth-of-type(1)').text("FBWC");
        $('#slct option:nth-of-type(2)').text("NBA");
        $('#slct option:nth-of-type(3)').text("");
        $('#slct option:nth-of-type(4)').text("");
        $('#slct option:nth-of-type(5)').text("");
      break;
  }
  
  }); */
  //navigation type de sport 
  //Soccer
  $('.li1_paris').click(function(){
   $('.resultat_paris_paris').show();
   $('.resultat_paris_golf_paris').hide();
   $('.resultat_paris_basketball_paris').hide();
   $('.resultat_paris_rugby_paris').hide();
 $('#soccer_drop').show();
 $('#golf_drop').hide();
 $('#basket_drop').hide();
 $('#rugby_drop').hide();
  });
  //Soccer
  //Golf
  $('.li2_paris').click(function(){
    $('.resultat_paris_golf_paris').show();
    $('.resultat_paris_paris').hide();
    $('.resultat_paris_basketball_paris').hide();
    $('.resultat_paris_rugby_paris').hide();
    $('#soccer_drop').hide();
 $('#golf_drop').show();
 $('#basket_drop').hide();
 $('#rugby_drop').hide();
  });
  //Golf
  //basketball
  $('.li3_paris').click(function(){
    $('.resultat_paris_basketball_paris').show();
    $('.resultat_paris_golf_paris').hide();
    $('.resultat_paris_paris').hide();
    $('.resultat_paris_rugby_paris').hide();
    $('#soccer_drop').hide();
    $('#golf_drop').hide();
    $('#basket_drop').show();
    $('#rugby_drop').hide();
  });
  //basketball
  //footbal americain
  $('.li4_paris').click(function(){
    $('.resultat_paris_rugby_paris').show();
    $('.resultat_paris_paris').hide();
    $('.resultat_paris_golf_paris').hide();
    $('.resultat_paris_basketball_paris').hide();
    $('#soccer_drop').hide();
    $('#golf_drop').hide();
    $('#basket_drop').hide();
    $('#rugby_drop').show();
  });
  //footbal americain


  // when scroll body .. sticky navbar
  $('#background_result_paris_id').scroll(function(){
    var sc = $(this).scrollTop();
    if ( sc > 10) { // Fade The Scroll Top Btn
            
      $('.scrollTop').fadeIn();
      
  } else {
      
      $('.scrollTop').fadeOut();
      
  }
  });
   // Scroll to Top
   $('.scrollTop').click(function(){
    $('#background_result_paris_id').animate({
        scrollTop : 0
    },500);
});
  

})
