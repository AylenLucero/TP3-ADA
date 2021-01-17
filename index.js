const url = new URL(window.location);
const idAModificar = url.searchParams.get('name');

const formulario = document.getElementById('form-pet');
const btn = document.getElementById('btn');
const btnUpdate = document.getElementById('btnUpdate');


const registerUser = (e) => {
    e.preventDefault() 
    console.log('register');
    spinner.classList.add('d-inline-block');
    spinner.classList.remove('d-none');        
    fetch(base + '/pet.json', {
        method: 'POST',
        headers: {
            'Content-Type' : 'Application/json'
        },
        body: JSON.stringify(createObject())
    })
    .then(response => {
        response.json();
            if(response.ok) {                       
                window.location ='index.html'
            } 
        spinner.classList.add('d-none');
        spinner.classList.remove('d-inline-block');
        
    })
    .then(data =>console.log(data.name))
    .catch(error => error)  
      
}


const getPet = () => {
    fetch(base + '/pet/' + idAModificar + '.json')
        .then(response => {
            return response.json()

        })
        .then(data => {       
            if(idAModificar) {
                btnUpdate.removeAttribute('hidden');
                btn.setAttribute('hidden', 'true');
            }    
            document.getElementById('name').value = data.name;
            document.getElementById('email').value = data.email;
            document.getElementById('direction').value = data.direction;
            document.getElementById('telephone').value = data.telephone;
            console.log(document.getElementById('name').value)
            var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
                keyboard: false
            })
            myModal.show() 
             
        })
        .catch(error => console.log(error))
}
getPet()

const updatePet = (e) => {    
    e.preventDefault()

    
    console.log('aca')
    fetch(base + '/pet/' + idAModificar + '.json', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(createObject())
    })
        .then(response => {
            return response.json()
        })
        .catch(error => console.log(error))
}

btn.addEventListener('click', registerUser);
btnUpdate.addEventListener('click', updatePet);
// if (idAModificar) {
//     btn.innerHTML = 'Update';
//     btn.addEventListener('submit', updatePet);
// } else {
//     btn.addEventListener('submit', registerUser)
// }

// const EventClick = (x) => {
//     btn.addEventListener('click', x);
// }