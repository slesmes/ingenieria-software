function saludo(){
    console.log('hola desde la funcion saludo');
}

const saludo1= function(){
    console.log('hola desde la funcion anonima')
}

const saludo2= () => {
    console.log('hola desde la funcion flecha')
}

const formsvalue = () => {
    const user_name = document.getElementById('user_name').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    console.log(user_name,lastname,email);
}

const formsvalue2= () => {
    const array_ids = ["user_name", "lastname", "email"];
    const array_values = [];
    for (let i=0; i<array_ids.length; i++){
        array_values.push(document.getElementById(array_ids[i]).value)
    }
    console.log(array_values)
}