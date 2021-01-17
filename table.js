const tabla = document.getElementById('tbody')

const createTable = () =>{
fetch(base + '/pet.json')
.then(response => response.json())
.then(data => {    
    
    for(prop in data) {
        const pet = data[prop]
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
        const buttonUpdate = document.createElement('a');
        buttonUpdate.classList.add('btn');
        buttonUpdate.setAttribute('href', 'index.html?name=' + prop);
        buttonUpdate.setAttribute('id', 'update');
        buttonUpdate.style.backgroundColor = 'blue';
        buttonUpdate.innerHTML = '<i class="fa fa-upload" aria-hidden="true"></i> Update';
        const tdUpdate = document.createElement('td');
        tdUpdate.appendChild(buttonUpdate);
        tr.appendChild(tdUpdate);
    }
    
})
}
createTable()