
$(document).ready(function(){
  var height = parseInt(prompt("How tall are you in centimters?"));

  if (height < 125){
    $('.ride1, .ride2').show();
  } else if (125 < height < 175){
      $('.ride1, .ride3').show();
  } if (height > 175){
    $('.ride1, .ride4').show();
    $('.ride3').hide();
  }
});
