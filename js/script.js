
$('.carousel .carousel-item').each(function(){
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<minPerSlide;i++) {
    next=next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    
    next.children(':first-child').clone().appendTo($(this));
  }
});

// quantity show product
$(document).ready(function(){
  var quantity = 1;

  $('.quantity-right-plus').click(function(e){
      e.preventDefault();
      var quantity = parseInt($('#quantity').val());
      $('#quantity').val(quantity + 1);
  });

  $('.quantity-left-minus').click(function(e){
      e.preventDefault();
      var quantity = parseInt($('#quantity').val());
      if(quantity > 1){
          $('#quantity').val(quantity - 1);
      }
  });

});
