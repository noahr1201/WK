function myFunction() {
    location.replace("../Pages/speelschemas.html");
  }

  // Ik heb geen gebruikt gemaakt van PHP dit omdat ik de benidugde kennis niet heb om dit te doen. //

function koop() {
window.alert("Uw ticket is succesvol gekocht!");
  }

  var countdown = new Date("Jul 23, 2023 09:30:00").getTime();

  var x = setInterval(function() {
  
      var now = new Date().getTime();
      var distance = countdown - now;
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("count").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
  
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
  } , 1000);
