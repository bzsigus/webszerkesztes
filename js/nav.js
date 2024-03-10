//telefon nav expend
function toggleMenu() {
    var navbarMenu = document.querySelector('.hamb-navbar-menu');
    navbarMenu.classList.toggle('active');
  }


function toggleIcon(){
  const icon = document.querySelector('.icon')
  const icon2 = document.querySelector('.hicon')
  const menuItems = document.querySelectorAll('.navbar-menu li a');
  const menuItemshamb = document.querySelectorAll('.hamb-navbar-menu li a')
  const line = document.querySelector('footer span')

  //fehér téma
  if(icon.classList.contains('fa-moon')){
    
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    menuItems.forEach(item => {
      item.style.color = 'white';
  });
    icon2.classList.remove('fa-moon');
    icon2.classList.add('fa-sun');
    document.body.style.backgroundColor = 'black'; 
    document.body.style.color = 'white'; 
    menuItemshamb.forEach(item => {
      item.style.color = 'white';
    }); 
    line.style.backgroundColor = 'black'
  }else{
    //fekete téma
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    document.body.style.backgroundColor = 'white'; 
    document.body.style.color = 'black';  
    menuItems.forEach(item => {
    item.style.color = 'black';
  });
    icon2.classList.remove('fa-sun');
    icon2.classList.add('fa-moon');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';   
    menuItemshamb.forEach(item => {
      item.style.color = 'black';
      }); 
  }
  line.style.backgroundColor = 'white'
}
    
    


    
