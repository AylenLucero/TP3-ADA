
const init = () => {
    fetch(`${base}/users.json`)
        .then(response => response.json())
        .then(data => {
            loadTable('tbl-users', data);
        })
};
init();

const loadTableRow = (tr, object) => {
    const tdName = document.createElement('td');
    const tdEmail = document.createElement('td');
    const tdAddress = document.createElement('td');
    const tdPhone = document.createElement('td');
    tdName.innerHTML = object.name;
    tdEmail.innerHTML = object.email;
    tdAddress.innerHTML = object.direction;
    tdPhone.innerHTML = object.telephone;
    tr.appendChild(tdName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdAddress);
    tr.appendChild(tdPhone);

    //LINK EDIT
    const aEdit = document.createElement('a');
    aEdit.innerHTML = '<i class="material-icons" title="Edit">&#xE254;</i>';
    aEdit.setAttribute('href', 'index.html?name=' + object.id);
    const tdActions = document.createElement('td');
    tdActions.appendChild(aEdit);

    //LINK DELETE
    const aDelete = document.createElement('a');
    aDelete.setAttribute('href', 'index.html?name=' + object.id + '&accion=delete');
    aDelete.innerHTML = '<i class="material-icons" title="Delete">&#xE872;</i>';
    tdActions.appendChild(aDelete);

    tr.appendChild(tdActions);
}


const loadTable = (tableId, data) => {
    const table = document.getElementById(tableId);
    const tbody = table.getElementsByTagName('tbody')[0];

    tbody.innerHTML = '';
    for (let objectId in data) {
        const tr = document.createElement('tr');
        data[objectId].id = objectId;
        loadTableRow(tr, data[objectId]);
        tbody.appendChild(tr);
    }
}

const filterButton = document.getElementById('filterButton');

const filter = (event) => {
    event.preventDefault();

    fetch(`${base}/users.json`)
        .then(response => response.json())
        .then(data => {
            const inputFilter = document.getElementById('filter').value;
            let filteredData = {}

            for (let objectId in data) {

                if (data[objectId].name.includes(inputFilter)) {
                    filteredData[objectId] = data[objectId];
                }
                loadTable('tbl-users', filteredData);
            }
            SeefullTable('fullTable');
        })        
}

filterButton.addEventListener('click', filter);

const SeefullTable = () => {
    const btnSeeFullTable = document.getElementById('btnSeeFullTable');
    btnSeeFullTable.removeAttribute('hidden')
    btnSeeFullTable.addEventListener('click', () => {
        close()
    });
}

const deleteUsers = () => {
    fetch(base + '/users/' + idAModificar + '.json', {
        method: 'DELETE',
    })
        .then(response => {
            return response.json()
            
        })
        .then(data => {
            swal({
                text: "User has been deleted",
                icon: "success",
                button: "Okay!",
              })
            .then(() => {
                close();
            });    
        })
        .catch(error => console.log(error))
}
