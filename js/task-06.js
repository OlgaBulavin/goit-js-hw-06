const inputLenght = document.querySelector('#validation-input');

inputLenght.addEventListener('blur', onInputBlur => {
    
       if (onInputBlur.currentTarget.value.length === inputLenght.getAttribute('length'))

            { inputLenght.classList.add("valid");
            inputLenght.classList.remove("invalid");
             } else {
                inputLenght.classList.add("invalid");
                inputLenght.classList.remove("valid");
            }
        });





        