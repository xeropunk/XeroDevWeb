function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("footani").style.marginLeft = "250px";
    document.getElementById("navonclose").style.color = "#5C6378";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("footani").style.marginLeft = "0";
    document.getElementById("navonclose").style.color= "white";
  }