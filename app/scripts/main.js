console.log('\'Allo \'Allo!');
$(document).ready(function(){
  //window height
  var wheight = $(window).height(); //get height of the window

  $('#intro').css('height', wheight);

  $(window).resize(function() {
    var wheight = $(window).height(); //get height of the window
    $('#intro').css('height', wheight);
  }); //on resize

  $('.marketing-section-div').each(function(){
    $(this).hide();
    if($(this).attr('id') === 'main'){
      $(this).show();
    }
  });
  $('.menu li').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('data-link');
    $('.marketing-section-div').each(function(){
      $(this).hide();
      if($(this).attr('id') === id){
        $(this).show();
      }
    })
  })
  $('.menu li').click(function(){
    $('.menu li.active').removeClass('active');
    $(this).addClass('active');
  })
});
