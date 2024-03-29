const pass = document.getElementById('password')
const confirm = document.getElementById('confirm-password')

const passCheck = () => {
   const passInput = pass.value;
   const confirmInput = confirm.value;
   const missMatch = document.getElementsByClassName('passMissMatch')

   if(passInput !== confirmInput) {
      pass.classList.add('invalid');
      confirm.classList.add('invalid')
      missMatch.style.display = 'block';
      missMatch.style.color = 'red';
      missMatch.style.fontSize = '0.8rem'
   } else {
      pass.classList.remove('invalid');
      confirm.classList.remove('invalid');
      missMatch.style.display = 'none';
   }
}

pass.addEventListener('input', passCheck);
confirm.addEventListener('input', passCheck);