var modal=document.getElementById("myModal");
var btn=document.getElementById("myBtn");
var span=document.getElementsByClassName("close")[0];
/* var input = document.getElementById('password-input');
var see = document.getElementById('passwordcontrol'); */
const see = document.querySelector('.passwordcontrol');
const pinput = document.querySelector('#password-input');

btn.onclick=function(){
    modal.style.display="block";
}
span.onclick=function(){
    modal.style.display="none";
}
window.onclick=function(event){
    if (event.target==modal){
        modal.style.display="none";
    }
}

var mis=document.getElementById("mis");
var mis2=document.getElementById("mis2");


see.addEventListener('pointerdown', () => {
  pinput.setAttribute('type', 'text');
});

see.addEventListener('pointerup', () => {
    pinput.setAttribute('type', 'password');
});

 
 const einput = document.querySelector('#name1'); 
 const form = document.querySelector("#form1");


 form.addEventListener('blur', function (event) {
  const isValid = event.target.validity.valid;
  
  if(event.target == einput && !isValid )
  {
    einput.setCustomValidity('Введите правльный email(abc@de.com)');
    
  }
  if(event.target == pinput && !isValid)
  {
    pinput.setCustomValidity('Пароль должен быть больше 6');
  
  }

  const message = event.target.validationMessage;
  const connectedValidationId = event.target.getAttribute('aria-describedby');
  const connectedValidation = connectedValidationId ? document.getElementById(connectedValidationId) : false;

  if (connectedValidation && message && !isValid) { 
    connectedValidation.innerText = message;
  } else {
    connectedValidation.innerText = '';
    
  }
  einput.setCustomValidity('');
  pinput.setCustomValidity('');
}, true);


const formElement = document.getElementById('form1'); 
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  n=0;
  const isEmailValid = einput.validity.valid;
  const isPassValid = pinput.validity.valid;

    if(!isEmailValid || !isPassValid){
      n=1;
    }
    else{
      n=0;
    }
    if (n==0){
      const formData = new FormData(formElement); 
      const mail = formData.get('name'); 
      const password = formData.get('password');
      console.log(mail,password)
      modal.style.display="none"; 
  }
});
