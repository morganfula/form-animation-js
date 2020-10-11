function animatedForm() {
  const arrows = document.querySelectorAll('.fa-arrow-circle-down');
  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      // Check for validation
      if(input.type === 'text' && validateUser(input)){
        nextSlide(parent, nextForm);
      } else if (input.type === 'email' && validateEmail(input)){
        nextSlide(parent, nextForm)
      } else if (input.value === 'password' && validateUser(input)){
        nextSlide(parent, nextForm)
      } else {
        parent.style.animation = 'shake 0.5s ease'
      }

      // get rid of animation
      parent.addEventListener('animationend',() => {
        parent.style.animation = ''
      })
    });
  });
}

function validateUser(user) {
  if(user.value.length < 6){
    console.log('not enough character');
    error('#ea4335');
  } else {
    error('#34a852');
    return true
  }
}

function validateEmail(email) {
  const validation = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi
  if(validation.test(email.value)){
    error('#34a852');
    return true;
  } else {
    error('#ea4335');
  }
}

function nextSlide(parent, nextForm ) {
  parent.classList.add('inactive');
  parent.classList.remove('active');
  nextForm.classList.add('active');
}

function error(color) {
  document.body.style.backgroundColor = color
}

animatedForm();