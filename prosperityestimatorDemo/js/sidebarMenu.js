// $("#menu-toggle").click(function(e) {
//     e.preventDefault();
//     $("#wrapper").toggleClass("toggled");
// });

//  $("#menu-toggle-2").click(function(e) {
//     e.preventDefault();
//     $("#wrapper").toggleClass("toggled-2");
//     $('#menu ul').hide();
// });

$("#wrapper").toggleClass("toggled-2");

var height = $(window).height() - 51;
$("#map-div").height(height - 40);
// $('#menu ul').hide();

 // function initMenu() {
 //  // $('#menu ul').hide();
 //  $('#menu ul').children('.current').parent().show();
 //  //$('#menu ul:first').show();
 //  $('#menu li a').click(
 //    function() {
 //      var checkElement = $(this).next();
 //      if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
 //        return false;
 //        }
 //      if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
 //        $('#menu ul:visible').slideUp('normal');
 //        checkElement.slideDown('normal');
 //        return false;
 //        }
 //      }
 //    );
 //  }
// $(document).ready(function() {
//   initMenu();
//   //Subtracting 50px for navbar and for some reasons mapbox adds
//   var height = $(window).height() - 51;
//   // $("#sidebar-wrapper").height(height);
//   // console.log(height);
//   //40px to the height so subtracting that as well
//   // $("#map-div").height(height - 40);
//   // $("#map-div").height(height);
//   // console.log(height);
// });
