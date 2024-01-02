const pot = document.querySelector('.honey-pot');
const bee = document.querySelector('.bee-image');
const container = document.querySelector('.container');
const emailBtn = document.querySelector('#email');
const fbBtn = document.querySelector('#facebook');
const googleBtn = document.querySelector('#google');
const registerAttr = document.querySelector('.sign-up');
const submitForm = document.querySelector('#submit-form');
const passwordInput = document.querySelector('.email-pw');
let animationIndex = 0;

emailBtn.addEventListener('click',(e)=> {
  animationIndex = 1;
  e.preventDefault();
  if (bee.classList.contains('bee-fly-back') || !bee.classList.contains('bee-animation')) {
    bee.classList.remove('bee-fly-back');
    pot.classList.remove('remove-honey-pot');
    bee.classList.add('bee-animation');
    pot.classList.add('honey-animation');
  }
  
  submitForm.classList.remove('hide');
  submitForm.classList.add('reveal-form');
  emailBtn.classList.add('collapse-email');
  fbBtn.classList.add('collapse-fb', 'hide');
  googleBtn.classList.add('hide'); 
  passwordInput.classList.remove('password-input-up');

});

registerAttr.addEventListener('click', ()=> {
  if(bee.classList.contains('bee-animation')) {
    bee.classList.remove('bee-animation');
    pot.classList.remove('honey-animation');
    bee.classList.add('bee-fly-back');
    pot.classList.add('remove-honey-pot');
  }
  
  passwordInput.classList.add('password-input-up');
  submitForm.classList.add('hide');
  submitForm.classList.remove('reveal-form'); //remove but add above another class to smooth
  emailBtn.classList.remove('collapse-email'); 
  fbBtn.classList.remove('collapse-fb', 'hide');
  googleBtn.classList.remove('hide'); 
  
  
})
