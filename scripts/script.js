const base = 'https://ada-tp3-default-rtdb.firebaseio.com';



const createObject = () => {
    const expresionEmail = /\w+@\w+\.+[a-z]/;
    const expresionTelephone = /^\(?([0-9]{2,4})\)?[- ]?([0-9]{6,8})$/
    const name = document.getElementById('fullname').value.toLowerCase();
    const email = document.getElementById('email').value.toLowerCase();
    const direction = document.getElementById('address').value.toLowerCase();
    const telephone = document.getElementById('phone').value.toLowerCase();
    if((!expresionEmail.test(email)) || (!expresionTelephone.test(telephone)) || (name.length >= 50) || (direction.length >= 60))  {
        swal("Error!", "Some of your date is incorrectly completed", "error");
        if(!expresionTelephone.test(telephone)) {     
            negativevalidation('phone', 'textPhone', 'Do not enter 0 or 15. The phone cannot have more than 12 characters')            
        } 
        if(direction.length >= 60) {
            negativevalidation('adress', 'textAdress', 'Address cannot be longer than sixty characters')
        } 
        if(!expresionEmail.test(email)) {
            negativevalidation('email', 'textEmail', 'It must have an email format xxxx@xxxx.xxx');               
        } 
        if(name.length >= 50) {
            negativevalidation('fullname', 'textName', 'The name cannot exceed fifty characters')            
        } 
    }else { 
        return {name, email, direction, telephone}
    } 
}

const negativevalidation = (idInput, idText, data) => {
    const input = document.getElementById(idInput); 
    let p = document.getElementById(idText);
    p.innerHTML = data;
    input.classList.add('input');
}
