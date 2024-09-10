function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

if (screen.width < 440) {
    document.getElementById('wabutton1').setAttribute('href', "whatsapp://send?phone=447942207637&text=Message%20the%20team");
    document.getElementById('wabutton2').setAttribute('href', "whatsapp://send?phone=447942207637&text=OrderDemo");
    document.getElementById('wabutton3').setAttribute('href', "whatsapp://send?phone=447942207637&text=dynamicMenu");
    document.getElementById('wabutton4').setAttribute('href', "whatsapp://send?phone=447942207637&text=deleteMe");
    document.getElementById('wabutton5').setAttribute('href', "whatsapp://send?phone=447942207637&text=certificate");
  document.getElementById('wabutton6').setAttribute('href', "whatsapp://send?phone=447860002273&text=OpenWeather");
}

function resMenu() {
  var x = document.getElementById("myNavMenu");
  if (x.className === "navMenu") {
    x.className += " responsive";
  } else {
    x.className = "navMenu";
  }
}