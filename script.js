

function onFormSubmit() {

    const nameInput = document.getElementById("name");
    const idNumberInput = document.getElementById("id");
    const countryInput = document.getElementById("country");
    const languageInput = document.getElementById("languages");
  
    const tableBody = document.getElementById("body");
    const newRow = tableBody.insertRow(-1);
    const nameCell = newRow.insertCell(0);
    const idNumberCell = newRow.insertCell(1);
    const countryCell = newRow.insertCell(2);
    const languageCell = newRow.insertCell(3);
    const actionsCell = newRow.insertCell(4);
  
    nameCell.textContent = nameInput.value;
    idNumberCell.textContent = idNumberInput.value;
    countryCell.textContent = countryInput.value;
    languageCell.textContent = languageInput.value;
    actionsCell.innerHTML =
      '<button id="green", onclick="editUser(this)">Edit</button> <button onclick="deleteUser(this)">Delete</button>';

    nameInput.value = "";
    idNumberInput.value = "";
    countryInput.selectedIndex = 0;
    languageInput.selectedIndex = 0;

  }

  function onEdit(td){
      selectedRow = td.parentElement.parentElement;
      document.getElementById('name').value = selectedRow.cells[0].innerHTML;
      document.getElementById('id').value = selectedRow.cells[1].innerHTML;
      document.getElementById('country').value = selectedRow.cells[2].innerHTML;
      document.getElementById('languages').value = selectedRow.cells[3].innerHTML;

  }

