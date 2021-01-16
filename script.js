const base = 'https://ada-tp3-default-rtdb.firebaseio.com';
const expresionEmail = /\w+@\w+\.+[a-z]/;
const expresionTelephone = /^\(?([0-9]{2,4})\)?[- ]?([0-9]{6,8})$/


const createObject = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const direction = document.getElementById('direction').value;
    const telephone = document.getElementById('telephone').value;
    if((!expresionEmail.test(email)) || (!expresionTelephone.test(telephone)) || (name.length >= 5) || (direction.length >= 60))  {
        if(!expresionTelephone.test(telephone)) {
            const emailInput = document.getElementById('telephone');        
            emailInput.style.backgroundColor = 'red';
            
        } 
        if(direction.length >= 60) {
            const directionInput = document.getElementById('direction');        
            directionInput.style.backgroundColor = 'red';
        } 
        if(!expresionEmail.test(email)) {
            const emailInput = document.getElementById('email'); 
            emailInput.style.backgroundColor = 'red';     
            
        } 
        if(name.length >= 5) {
            const nameInput = document.getElementById('name');
            nameInput.style.backgroundColor = 'red'
            
        } 
    } else {    
        return {name, email, direction, telephone}
    }
    
}
