const url = new URL(window.location);
const idAModificar = url.searchParams.get('name');

const formulario = document.getElementById('form-pet');
const btn = document.getElementById('btn');


const registerPet = (e) => {
    e.preventDefault() 
    spinner.classList.add('d-inline-block');
    spinner.classList.remove('d-none');        
    fetch(base + '/pets.json', {
        method: 'POST',
        headers: {
            'Content-Type' : 'Aplicación / json'
        },
        body: JSON.stringify(crearObjeto())
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
formulario.addEventListener('click', registerPet);