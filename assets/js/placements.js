/*$('.dropdown').hover(function(){ 
  $('.dropdown-toggle', this).trigger('click'); 
});*/
/*AOS.init();*/
new WOW().init();
/*$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
});*/
$(document).ready(function () {
    $('#pl-1718').click(function () {
        $('#dt-1718').css('display', 'block');
        $('#dt-1617').css('display', 'none');
        $('#dt-1516').css('display', 'none');
    });
    $('#pl-1617').click(function () {
        $('#dt-1617').css('display', 'block');
        $('#dt-1718').css('display', 'none');
        $('#dt-1516').css('display', 'none');
    });
    $('#pl-1516').click(function () {
        $('#dt-1516').css('display', 'block');
        $('#dt-1617').css('display', 'none');
        $('#dt-1718').css('display', 'none');
    });
});