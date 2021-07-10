/*global document*/
// variables
var data = ['0%', '10%', '20%', ' 30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'];
var samgau = document.getElementById('pb');
var p = 0;
var coder = ['gani.omyrzak@gmail.com', 'Gani Omirzak', 'rabi2018'];
var designer = ['kanat.amantayev@gmail.com', 'Kanat Amantayev', 'Nulu2013'];
var avatar = document.getElementById('pfic');
var name = "0";
var avname = document.getElementById('5');
var access = "no";
var random = Math.floor(Math.random() * 1001) + 600;


//functions
function ss() {
    'use strict';
    samgau.textContent = data[p];
    p = p + 1;
    document.getElementById('ln').style.width = data[p];
    if (p > 11) {
        samgau.textContent = 'Loading Complete!';
    }
    if (p > 12){
        p = 0;
        window.clearInterval(ss);
        $('#ln').hide();
    }
}

document.querySelector('button').onclick = function () {
    var user = document.getElementById('user').value;
    var code = document.getElementById('code').value;
    if (user == coder[0] && code == coder[2]) {
      avatar.setAttribute('src', 'images/ganiavatar.png');
      name = "1";
      access = "yes";
    } else if (user == designer[0] && code == designer[2]) {
      avatar.setAttribute('src', 'images/kanatavatar.png');
      name = "2";
      access = "yes";
    } else {
      alert("Please make sure you entered the correct creditionals");
      access = "no";
    }
}
$(document).ready(function () {
        'use strict';
        $('.about-div').hide();
        $('#ln').hide();
        setInterval(ss, random);
        clearInterval(ss);
        $('#pfic').hide();
        $('#5').hide();
        $("#10").click(function () {
          if (access === "yes") {
              $('#pfic').show();
              document.getElementById('pfic').style.marginTop = '50px';
              $(".input").hide();
              if (name === "1") {
                  avname.textContent = coder[1];
                  $("#5").show();
              } else if (name == "2") {
                  avname.textContent = designer[1];
                  $("#5").show();
                };
              $(this).hide();
  };
});
  $("#12").click(function(){
    $('#pfic').hide();
    $(".input").show();
    $("#5").hide();
    $('#10').show();
    access = "no";
      });
  $('.home').click(function() {
    document.title = "Samgau | Home";
    $('.about-div').hide();
    $('#ln').hide();
    clearInterval(ss);
    p = 0;
  });
  $('.about').click(function() {
    document.title = "Samgau | About Us";
    $('.about-div').show();
    $('#ln').hide();
    clearInterval(ss);
  });
  $('.news').click(function() {
    document.title = "Samgau | News";
    $('.about-div').hide();
    $('#ln').show();
    setInterval(ss, random);
  });
  });
/*function welcome(){
  var cookies = window.confirm('Accept cookies for us work properly');
  localStorage.setItem('cookie', cookies);
}


//conditionals
if (!localStorage.getItem('cookie')){
  welcome();
} else {
  welcome();
}*/
