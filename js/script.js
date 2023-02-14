// Toggle class Active
const navbarNav = document.querySelector('.navbar-nav');


// ketika hamburger dibuka
document.querySelector('#hamburger-menu').
onclick = () => {
  navbarNav.classList.toggle('active');
};


// function menu
const hamburgermenu = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e){
  if (!hamburgermenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// click send whatsapp
$(document).on('click','.send_form', function(){
  var input_blanter = document.getElementById('wa_email');
  
  /* Whatsapp Settings */
  var walink = 'https://web.whatsapp.com/send',
      phone = '6289610618417',
      walink2 = 'Halo saya ingin ',
      text_yes = 'Terkirim.',
      text_no = 'Isi semua Formulir lalu klik Send.';
  
  /* Smartphone Support */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  var walink = 'whatsapp://send';
  }
  
  if("" != input_blanter.value){
  
   /* Call Input Form */
  var 
      input_name1 = $("#name").val(),
      input_email1 = $("#email").val(),
      input_number1 = $("#phone").val();
  
  /* Final Whatsapp URL */
  var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
      '*Name* : ' + input_name1 + '%0A' +
      '*Email Address* : ' + input_email1 + '%0A' +
      '*Input Number* : ' + input_number1 + '%0A';
  
  /* Whatsapp Window Open */
  window.open(blanter_whatsapp,'_blank');
  document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
  } else {
  document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
  }
  });
