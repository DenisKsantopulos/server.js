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

/* function validate(){
	var x=document.getElementById('name1').value
	var y=document.getElementById('password-input').value

  at=x.indexOf("@");
  dot=x.indexOf(".");
   if (at<1 || dot <1){
      mis.style.display="block";
      return false;
   }
   if (at>=1 || dot >=1){
    mis.style.display="none";
 }
	console.log(y.length)
	if (x.length==0){
		mis.style.display="block";
	    return false;
	}
  if (x.length>0){
		mis.style.display="none";
	}
  if (y.length<6){
		mis2.style.display="block";
	    return false;
	}
  if (y.length>=6){
		mis2.style.display="none";

	}
  
  if (y.length>=6 && x.length>0 && (at>=1 || dot >=1)){
    modal.style.display="none";
    	return false;
	}

 }
 */

/* function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
} */



see.addEventListener('pointerdown', () => {
  pinput.setAttribute('type', 'text');
});

see.addEventListener('pointerup', () => {
    pinput.setAttribute('type', 'password');
});

 var n=0;
 const einput = document.querySelector('#name1'); 
 const form = document.querySelector("#form1");


 form.addEventListener('blur', function (event) {
  const isValid = event.target.validity.valid;
  
  if(event.target == einput && !isValid )
  {
    einput.setCustomValidity('Введите правльный email(abc@de.com)');
    n=1;
  }
  if(event.target == pinput && !isValid)
  {
    pinput.setCustomValidity('Пароль должен быть больше 5');
    n=1;
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


const formElement = document.getElementById('form1'); // извлекаем элемент формы
formElement.addEventListener('submit', (e) => {
  if (n==1){
    e.preventDefault();
    const formData = new FormData(formElement); // создаём объект FormData, передаём в него элемент формы
    // теперь можно извлечь данные
    const name = formData.get('name'); 
    const surname = formData.get('password');
    console.log(name,surname)
    /* modal.style.display="none"; */
  }
});