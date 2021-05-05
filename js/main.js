$('.catalogButton').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
})

$('.catalogSmartphone').on('click', function(e) {
  e.preventDefault();
  $('.menu2').toggleClass('menu_active2');
})

$('.catalogTablets').on('click', function(e) {
  e.preventDefault();
  $('.menu3').toggleClass('menu_active3');
})