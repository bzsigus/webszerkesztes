// A gombra kattintáskor az "active" osztály hozzáadása a ".hamb-navbar-menu"-hoz
function toggleMenu() {
    var navbarMenu = document.querySelector('.hamb-navbar-menu');
    navbarMenu.classList.toggle('active');
  }

function toggleIcon(){
  const icon = document.querySelector('.icon')
  const icon2 = document.querySelector('.hicon')

  if(icon.classList.contains('fa-moon')){
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    icon2.classList.remove('fa-moon');
    icon2.classList.add('fa-sun');
    document.body.style.backgroundColor = 'black'; 
    document.body.style.color = 'white';  
    console.log("done")
  }else{
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    document.body.style.backgroundColor = 'white'; 
    document.body.style.color = 'black';  
    icon2.classList.remove('fa-sun');
    icon2.classList.add('fa-moon');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';   

    console.log("done2")
  }



}
    
    


    
