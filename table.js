const tabla = document.getElementById('tbody')


fetch(base + '/pet.json')
.then(response => response.json())
.then(data => {    
    
    for(prop in data) {
        // const tr = document.createElement('tr');
        // const btnDelete = document.createElement('button');
        // const btnEdit = document.createElement('button');
        // btnDelete.setAttribute('id','btndelete');     
        // btnEdit.setAttribute('id', 'btnEdit');       
        // btnDelete.innerHTML = `<i class="material-icons" title="Delete">&#xE872;</i>`
        // btnEdit.innerHTML = `<span class="material-icons">create</span>`
        const pet = data[prop]
        // for(dato in pet) {         
            
        //     const td = document.createElement('td');
        //     const tdDelete = document.createElement('td');  
        //     const tdEdit = document.createElement('td');         
            
        //     td.innerHTML= pet[dato];
        //     tdDelete.appendChild(btnDelete);
        //     tdEdit.appendChild(btnEdit);
        //     tr.appendChild(td);  
        //     tr.appendChild(tdEdit);
        //     tr.appendChild(tdDelete);
            
        // }
        // btnEdit.addEventListener('click', () => { 
        //     //const modal = document.getElementById('exampleModal');
                     
        //     var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        //         keyboard: false
        //     })
        //     myModal.show()            
        // })
        // tabla.appendChild(tr)
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdEmail = document.createElement('td');
        const tdTelephone = document.createElement('td');
        const tdDirection = document.createElement('td');
        const a = document.createElement('a');
        a.setAttribute('href', 'index.html?name=' + prop);


        a.innerHTML = pet.name;
        tdEmail.innerHTML = pet.email;
        tdTelephone.innerHTML = pet.telephone;
        tdDirection.innerHTML = pet.direction;

        //Animdaciones
        tdName.appendChild(a);
        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdDirection);
        tr.appendChild(tdTelephone);
        tbody.appendChild(tr);

        //DELETE
        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add('btn');
        buttonDelete.setAttribute('id', 'delete');
        buttonDelete.innerHTML = '<i class="fa fa-trash " aria-hidden="true"> </i> Delete';
        const td = document.createElement('td');
        // buttonDelete.addEventListener('click', deletePet)
        td.appendChild(buttonDelete);
        tr.appendChild(td);

        //EDIT
        const buttonUpdate = document.createElement('button');
        buttonUpdate.classList.add('btn');
        buttonUpdate.setAttribute('id', 'update');
        buttonUpdate.style.backgroundColor = 'blue';
        buttonUpdate.innerHTML = '<i class="fa fa-upload" aria-hidden="true"></i> Update';
        const tdUpdate = document.createElement('td');
        tdUpdate.appendChild(buttonUpdate);
        tr.appendChild(tdUpdate);
        buttonUpdate.addEventListener('click', () => {
            window.location = `index.html?name=${prop}`;
            // var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
            //     keyboard: false
            // })
            // myModal.show()  
            
        })
    }
    
})