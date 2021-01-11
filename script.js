const base = 'https://ada-tp3-default-rtdb.firebaseio.com';
const expresionemail = /\w+@\w+\.+[a-z]/;
const expresionTelefono = /^\(?([0-9]{2,4})\)?[- ]?([0-9]{6,8})$/


const crearObjeto = () => {
    const animal = document.getElementById('animal').value;
    const nombre = document.getElementById('nombre').value;
    const raza = document.getElementById('raza').value;
    const email = document.getElementById('email').value;
    
    if((!expresionemail.test(email)) || (!expresionTelefono.test(raza)) || (nombre.length >= 5))  {
        if(!expresionTelefono.test(raza)) {
            const emailinput = document.getElementById('raza');        
            emailinput.style.backgroundColor = 'red';
            // const errores = document.getElementById('erroremail');
            // const b = document.createElement('b');
            // b.innerHTML = 'El email se encuentra incompleto o mal escrito'
            // errores.appendChild(b);
            
        } 
        if(!expresionemail.test(email)) {
            const emailinput = document.getElementById('email');        
            emailinput.classList.add('error');
            const errores = document.getElementById('erroremail');
            const b = document.createElement('b');
            b.innerHTML = 'El email se encuentra incompleto o mal escrito'
            errores.appendChild(b);
            
        } 
        if(nombre.length >= 5) {
            const nombreInput = document.getElementById('nombre');
            nombreInput.classList.add('error');
            const erroresnombre = document.getElementById('errornombre');
            const b = document.createElement('b');
            b.innerHTML = 'El nombre se encuentra incompleto o mal escrito'
            erroresnombre.appendChild(b);
            
        } 
    } else {    
        return {animal, nombre, raza, email}
    }
    
}