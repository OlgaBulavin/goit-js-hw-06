const inputLenght = document.querySelector('#validation-input');

inputLenght.addEventListener('blur', onInputBlur => {
    
       if (onInputBlur.currentTarget.value.length === inputLenght.getAttribute('length'))

            { inputLenght.classList.add("validation-input.valid");
            inputLenght.classList.remove("validation-input.invalid");
             } else {
                inputLenght.classList.add("validation-input.invalid");
                inputLenght.classList.remove("validation-input.valid");
            }
        });





        