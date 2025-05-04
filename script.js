let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Arrar.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if (e.target.innerHTML == '='){
            String = eval(string);
            input.value = string;
        }

        string += e.target.innerHTML;
        input.value = string;
    })
})
