
$(function(){
  $("#header").load("header.html"); 
  //$("#footer").load("footer.html"); 
});


function switchMode() {
  var checkBox = document.getElementById("mode");

  if (checkBox.checked == true) {
      $(':root').css('--background', '#02101f');
      $(':root').css('--text-color', '#FFF');
      $(':root').css('--shadows', 'rgba(0, 0, 0, 1)');
      $(':root').css('--neon', '#93EEDF');
      $("[for=mode]").html('<img src="svg/light_mode.svg">');

      $(':root').css('--task-background', '#121e2c');
      $(':root').css('--light-shadow', 'rgba(0, 0, 0, 0.5)');
      $(':root').css('--focused-background', '#18313d');
  } else {
      $(':root').css('--background', '#FFF');
      $(':root').css('--text-color', '##02101f');
      $(':root').css('--shadows', 'rgba(0, 0, 0, .15)');
      $(':root').css('--neon', '#93EEDF');
      $("[for=mode]").html('<img src="svg/dark_mode.svg">');

      $(':root').css('--task-background', '#FFF');
      $(':root').css('--light-shadow', 'rgba(0, 0, 0, 0.25)');
      $(':root').css('--focused-background', 'rgba(	240, 250, 255, .95)');

  }
}
