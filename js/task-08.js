const formEL = document.querySelector('.login-form ')

formEL.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    
    const {
        elements: { email, password },
      } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
      return alert("Please fill in all the fields!");
    }

  const result = { email: email.value, password: password.value };
  console.log(result);
  event.currentTarget.reset();
}

