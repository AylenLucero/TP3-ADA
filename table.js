const tabla = document.getElementById('tbody')


fetch(base + '/pets.json')
.then(response => response.json())
.then(data => {    
    
    for(prop in data) {
        const tr = document.createElement('tr');
        const btnDelete = document.createElement('button');
        const btnEdit = document.createElement('button');
        btnDelete.setAttribute('id','btndelete');     
        btnEdit.setAttribute('id', 'btnEdit');       
        btnDelete.innerHTML = `<i class="material-icons" title="Delete">&#xE872;</i>`
        btnEdit.innerHTML = `<span class="material-icons">create</span>`
        const pet = data[prop]
        for(dato in pet) {         
            
            const td = document.createElement('th');
            const tdDelete = document.createElement('th');  
            const tdEdit = document.createElement('th');         
            
            td.innerHTML= pet[dato];
            tdDelete.appendChild(btnDelete);
            tdEdit.appendChild(btnEdit);
            tr.appendChild(td);  
            tr.appendChild(tdEdit);
            tr.appendChild(tdDelete);
            
        }
        btnEdit.addEventListener('click', () => { 
            //const modal = document.getElementById('exampleModal');
                     
            var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
                keyboard: false
            })
            myModal.show()            
        })
        tabla.appendChild(tr)
    }
    
})