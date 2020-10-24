
let form1 = document.getElementById('name-next-button');
form1.onclick = function()
{
  let name = document.getElementById('email-block');
  let nameButton = document.getElementById('name-next-button'); //OPEN EMAIL BLOCK
  let inputName = document.getElementById('inputName').value;
  if (inputName == '')
  {
    let inputName = document.getElementById('inputName');
    let nameHelp = document.getElementById('nameHelp');
    inputName.classList.add('is-invalid');
    nameHelp.childNodes[0].textContent = "This input is empty!";
  }
  else
  {
    let inputName = document.getElementById('inputName');
    let nameHelp = document.getElementById('nameHelp');
    name.style.display = 'block';
    nameButton.style.display = 'none';
    document.body.classList.add('form-animation');
    inputName.classList.remove('is-invalid');
    inputName.classList.add('is-valid');
    nameHelp.style.display = 'none';
  }

}

let form2 = document.getElementById('email-next-button');
form2.onclick = function()
{
  let phone = document.getElementById('phone-block');
  let emailButton = document.getElementById('email-next-button');
  let inputEmail = document.getElementById('inputEmail').value;
  if(inputEmail == '')
  {
    let inputEmail = document.getElementById('inputEmail');
    let emailHelp = document.getElementById('emailHelp');
    inputEmail.classList.add('is-invalid');
    emailHelp.childNodes[0].textContent = "This input is empty!";
  }

  else
  {
    let inputEmail = document.getElementById('inputEmail');
    let emailHelp = document.getElementById('emailHelp');
    phone.style.display = 'block'; //OPEN CONTENT-BLOCK
    emailButton.style.display = 'none';
    document.body.classList.add('form-animation2');
    inputEmail.classList.remove('is-invalid');
    inputEmail.classList.add('is-valid');
    emailHelp.style.display = 'none';
  }
}

let form3 = document.getElementById('phone-next-button');
form3.onclick = function()
{
  let content = document.getElementById('content-block');
  let phoneButton = document.getElementById('phone-next-button');
  let inputPhone = document.getElementById('inputPhone').value;
  if(inputPhone == '')
  {
    let inputPhone = document.getElementById('inputPhone');
    let phoneHelp = document.getElementById('phoneHelp');
    inputPhone.classList.add('is-invalid');
    phoneHelp.childNodes[0].textContent = "This input is empty!";
  }

  else
  {
    let inputPhone = document.getElementById('inputPhone');
    let phoneHelp = document.getElementById('phoneHelp');
    content.style.display = 'block'; //OPEN CONTENT-BLOCK
    phoneButton.style.display = 'none';
    document.body.classList.add('form-animation2');
    inputPhone.classList.remove('is-invalid');
    inputPhone.classList.add('is-valid');
    phoneHelp.style.display = 'none';
  }
}

let sub = document.getElementById('submit');
sub.oncilck = function()
{
  document.getElementById('form').display = 'none';
  document.getElementById('mes').display = 'block';
}
