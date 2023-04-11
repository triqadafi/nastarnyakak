$( "#buttonNastar" ).click(function() {

});
// Deleting a cookie
// document.cookie = "nastar_limit=; max-age=0";
// document.cookie = "nastar_total=; max-age=0";

// var nastar_limit = getCookie('nastar_limit');
// var nastar_total = getCookie('nastar_total');
// console.log(nastar_limit);

// if (nastar_limit >= 2) {
//   data = {
//     'api_status': 'AGAIN',
//     'level': nastar_total,
//   }
//   form_transition(data);
// }else{
$( "#register-wrapper-inner" ).attr('style', 'opacity: 1;'); 
// }

$( ".bubbly-button" ).click(function(e) {
  e.preventDefault();
  var el = $(this);
  if($("#shake").hasClass('shake')){
    el.removeClass("animate");
    el.addClass("animate");
    $("#shake").removeClass('shake');
    setTimeout(function(){
      el.removeClass("animate");
  
      alert( "Mana bisa xixixixi" );
      alert( "Gimana kalau nastarnya dikirim lewat no hp?" );
      $( "#register" ).attr('style', 'opacity: 1;z-index: 1;'); 
  
    },1000);
  }else{
    el.removeClass("animate");
    el.addClass("animate");
    setTimeout(function(){
      el.removeClass("animate");
    alert( "Udah bro, sekali aja :)" );
  },1000);
  }
});

$("#quicktf").submit(function(e) {
  e.preventDefault();
  var submitButton = $('#quicktf input[type="submit"]');
  submitButton.attr('disabled','disabled');

  var values = $(this).serializeArray();
  $.ajax({
    url : "https://api.triqada.fi/quicktf/guest",
    type: "POST",
    data : {"phone":values[0].value, "portal":values[1].value},
    success: function(data) {
        console.log(data)
        submitButton.removeAttr('disabled');
        // if(data['api_status'] == 'OK'){
        //   var nastar_limit = getCookie('nastar_limit');
        //   if (nastar_limit) {
        //     nastar_limit = parseInt(nastar_limit)+1;
        //     setCookie('nastar_limit', nastar_limit, 30);
        //   }else{
        //     setCookie('nastar_limit', 1, 30);
        //   }
        //   var nastar_total = getCookie('nastar_total');
        //   if (nastar_total) {
        //     nastar_total = parseInt(nastar_total) + parseInt(data['level']);
        //     setCookie('nastar_total', nastar_total, 30);
        //   }else{
        //     setCookie('nastar_total', data['level'], 30);
        //   }
        // }
        form_transition(data)
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log(xhr.status);
      console.log(thrownError);
      $("#quicktf")[0].reset();
      alert('[ERROR]' + thrownError);
    }
  });

});

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

$("#share_wa").click(function () {
  if (isMobile) {
    var nastar = $(this).attr("data-nastar");
    var text = "Aku dapat " + nastar + " nastar guys! Yuk cobain dijamin ga nyesel!";
    var url = $(this).attr("data-link");
    var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
    var whatsapp_url = "whatsapp://send?text=" + message;
    window.location.href = whatsapp_url;
  } else {
    alert("Please share this article in mobile device");
  }
});

function form_transition(data) {
  if(data['api_status'] == 'OK' || data['api_status'] == 'DUPLICATE'){
    $( "#nastar_total" ).html('Wiih <b><u>' + data['nastar'] + ' nastar</b></u> kamu sikat');
    $( "#register-wrapper-inner" ).attr('style', 'opacity: 0;'); 
    setTimeout(function(){
      $( "#register-wrapper-inner" ).attr('style', 'display: none;'); 
      $( "#loader" ).attr('style', 'display: block;'); 
      setTimeout(function(){
        $( "#loader" ).attr('style', 'display: block;opacity: 1;'); 
        $("#quicktf")[0].reset();
      }, 500);
      setTimeout(function(){
        if(data['api_status'] == 'OK' || data['api_status'] == 'DUPLICATE' || data['api_status'] == 'AGAIN'){
          var nastar_total = parseInt(data['nastar']);
          $("#share_wa").attr("data-nastar", nastar_total);
          if(nastar_total >= 1){
            setTimeout(function(){
              alert("Ambil 1 deh myam...");
              if(nastar_total >= 2){
                setTimeout(function(){
                  alert("Kurang nih 1 lagi deh, myam...");
                  if(nastar_total >= 3){
                    setTimeout(function(){
                      alert("Kok enak ya, myam...");
                      if(nastar_total >= 4){
                        setTimeout(function(){
                          alert("Lagi dong, myam...");
                          if(nastar_total >= 5){
                            setTimeout(function(){
                              alert("Ga ada orang nih, lagi dah...");
                              $( "#loader" ).attr('style', 'display: block;opacity: 0;'); 
                              setTimeout(function(){
                                $( "#loader" ).attr('style', 'display: none;'); 
                                $( "#done" ).attr('style', 'display: block;'); 
                                setTimeout(function(){
                                    $( "#done" ).attr('style', 'opacity: 1;'); 
                                },500);
                              },500);
                            },1000);
                          }else{
                            $( "#loader" ).attr('style', 'display: block;opacity: 0;'); 
                            setTimeout(function(){
                              $( "#loader" ).attr('style', 'display: none;'); 
                              $( "#done" ).attr('style', 'display: block;'); 
                              setTimeout(function(){
                                  $( "#done" ).attr('style', 'opacity: 1;'); 
                              },500);
                            },500);
                          }
                        },1000);
                      }else{
                        $( "#loader" ).attr('style', 'display: block;opacity: 0;'); 
                        setTimeout(function(){
                          $( "#loader" ).attr('style', 'display: none;'); 
                          $( "#done" ).attr('style', 'display: block;'); 
                          setTimeout(function(){
                              $( "#done" ).attr('style', 'opacity: 1;'); 
                          },500);
                        },500);
                      }
                    },1000);
                  }else{
                    $( "#loader" ).attr('style', 'display: block;opacity: 0;'); 
                    setTimeout(function(){
                      $( "#loader" ).attr('style', 'display: none;'); 
                      $( "#done" ).attr('style', 'display: block;'); 
                      setTimeout(function(){
                          $( "#done" ).attr('style', 'opacity: 1;'); 
                      },500);
                    },500);
                  }
                },1000);
              }else{
                $( "#loader" ).attr('style', 'display: block;opacity: 0;'); 
                setTimeout(function(){
                  $( "#loader" ).attr('style', 'display: none;'); 
                  $( "#done" ).attr('style', 'display: block;'); 
                  setTimeout(function(){
                      $( "#done" ).attr('style', 'opacity: 1;'); 
                  },500);
                },500);
              }
            },1000);
          }else{
            $( "#loader" ).attr('style', 'display: block;opacity: 0;'); 
            setTimeout(function(){
              $( "#loader" ).attr('style', 'display: none;'); 
              $( "#done" ).attr('style', 'display: block;'); 
              setTimeout(function(){
                  $( "#done" ).attr('style', 'opacity: 1;'); 
              },500);
            },500);
          }
        }
      },500);
    },500);
  }else{
    alert(data['message']);
  }
}


// function setCookie(name, value, daysToLive) {
//   // Encode value in order to escape semicolons, commas, and whitespace
//   var cookie = name + "=" + encodeURIComponent(value);
  
//   if(typeof daysToLive === "number") {
//       /* Sets the max-age attribute so that the cookie expires
//       after the specified number of days */
//       cookie += "; max-age=" + (daysToLive*24*60*60);
      
//       document.cookie = cookie;
//   }
// }
// function getCookie(name) {
//   // Split cookie string and get all individual name=value pairs in an array
//   var cookieArr = document.cookie.split(";");
  
//   // Loop through the array elements
//   for(var i = 0; i < cookieArr.length; i++) {
//       var cookiePair = cookieArr[i].split("=");
      
//       /* Removing whitespace at the beginning of the cookie name
//       and compare it with the given string */
//       if(name == cookiePair[0].trim()) {
//           // Decode the cookie value and return
//           return decodeURIComponent(cookiePair[1]);
//       }
//   }
  
//   // Return null if not found
//   return null;
// }

var magnets = document.querySelectorAll('.magnetic')
var strength = 100

magnets.forEach( (magnet) => {
  magnet.addEventListener('mousemove', moveMagnet );
  magnet.addEventListener('mouseout', function(event) {
    TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
  } );
});

function moveMagnet(event) {
  var magnetButton = event.currentTarget
  var bounding = magnetButton.getBoundingClientRect()

  //console.log(magnetButton, bounding)

  TweenMax.to( magnetButton, 1, {
    x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
    y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
    ease: Power4.easeOut
  })

  //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
}

// $("img").on("taphold", function(e) {
//   e.preventDefault();
//   e.stopImmediatePropagation();
// })

$(document).on('contextmenu', function (e) {
  // stop long touch hold from poping up context menus
  return false;
});