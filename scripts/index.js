const url = new URL(window.location);
const idAModificar = url.searchParams.get('name');
const idAccion = url.searchParams.get('accion');

const formulario = document.getElementById('form-user');
const btn = document.getElementById('btn');
const btnUpdate = document.getElementById('btnUpdate');


const registerUser = (e) => {
    e.preventDefault() 
    spinner.classList.add('d-inline-block');
    spinner.classList.remove('d-none');        
    fetch(base + '/users.json', {
        method: 'POST',
        headers: {
            'Content-Type' : 'Application/json'
        },
        body: JSON.stringify(createObject())
    })
    .then(response => {
        response.json();
            if(response.ok) {                       
                close();
            } 
        spinner.classList.add('d-none');
        spinner.classList.remove('d-inline-block');
        
    })
    .then(data =>console.log(data.name))
    .catch(error => error)  
      
}

const LoadModal = (idModal, data) => {
    document.getElementById('fullname').value = data.name;
    document.getElementById('email').value = data.email;
    document.getElementById('address').value = data.direction;
    document.getElementById('phone').value = data.telephone;
    var myModal = new bootstrap.Modal(document.getElementById(idModal), {
        keyboard: false
    })
    myModal.show(); 
}

const getPet = () => {
    fetch(base + '/users/' + idAModificar + '.json')
        .then(response => {
            return response.json();
        })
        .then(data => { 
            if(idAccion!=='delete') {     
                if(idAModificar) {                
                    btnUpdate.removeAttribute('hidden');
                    btn.setAttribute('hidden', 'true');
                    const titleModal = document.getElementById('exampleModalLabel');
                    titleModal.innerHTML = 'Edit Employee'
                }    
                LoadModal('exampleModal', data);
            } else {
                swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this file!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                      deleteUsers();                 
                    } else {
                      close();
                    }
                });
            }
        })
        .catch(error => console.log(error))
}
getPet() 



const updateUsers = (e) => {    
    e.preventDefault();    
    fetch(base + '/users/' + idAModificar + '.json', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(createObject())
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            close();
        })
        .catch(error => console.log(error))
}

btn.addEventListener('click', registerUser);
btnUpdate.addEventListener('click', updateUsers);

const close = () => {
    window.location = "index.html";
}

const directionButtonsClose = () => {
    const closeModal = document.getElementById('closeModal');
    closeModal.addEventListener ('click', () => {
        close()
    })
    const cruzModal = document.getElementById('cruzModal');
    cruzModal.addEventListener ('click', () => {
        close()
    })
}
directionButtonsClose();





