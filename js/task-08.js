const formEL = document.querySelector('.login-form ')

formEL.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault()
    
    const form = event.target;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    
    if (login.value === "" || password.value === "") {
      return console.log("Please fill in all the fields!");
    }
  
    console.log(`Login: ${login.value}, Password: ${password.value}`);
    form.reset();
  }


