const inputLenght = document.querySelector('#validation-input');

inputLenght.addEventListener('blur', onInputBlur => {
    
    if (inputLenght.value.length === Number(inputLenght.dataset.length))

            { inputLenght.classList.add("valid");
            inputLenght.classList.remove("invalid");
             } else {
                inputLenght.classList.add("invalid");
                inputLenght.classList.remove("valid");
            }
        });





        

       