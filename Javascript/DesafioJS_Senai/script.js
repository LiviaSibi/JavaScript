var selectedRow = null;

function onFormSubmit()
{
    var formData = readFormData();

    if(selectedRow == null)
    {
        insertNewRecord(formData);
    }
    else
    {
        updateRecord(formData)
        resetForm();
    }
}

function readFormData()
{
    var formData = {};

    formData["nomePet"] = document.getElementById("nomePet").value;
    formData["nomeDono"] = document.getElementById("nomeDono").value;
    formData["raca"] = document.getElementById("raca").value;
    formData["idade"] = document.getElementById("idade").value;
    formData["cor"] = document.getElementById("cor").value;
    formData["porte"] = document.getElementById("porte").value;
    formData["massa"] = document.getElementById("massa").value;
    formData["tipo"] = document.getElementById("tipo").value;
    formData["sexo"] = document.getElementById("sexo").value;
    formData["descricao"] = document.getElementById("descricao").value;

    return formData;
}

function insertNewRecord(data)
{
    var table = document.getElementById("dadosList").getElementsByTagName('tbody')[0];

    var newRow = table.insertRow(table.lenght);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nomePet;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nomeDono;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.raca;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.idade;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.cor;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.porte;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.massa;

    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.tipo;

    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.sexo;

    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.descricao;

    cell10 = newRow.insertCell(10);
    cell10.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm()
{
    document.getElementById("nomePet").value = "";
    document.getElementById("nomeDono").value = "";
    document.getElementById("raca").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("cor").value = "";
    document.getElementById("porte").value = "";
    document.getElementById("massa").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("descricao").value = "";

    var selectedRow = null;
}

function onEdit(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nomePet").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nomeDono").value = selectedRow.cells[1].innerHTML;
    document.getElementById("raca").value = selectedRow.cells[2].innerHTML;
    document.getElementById("idade").value = selectedRow.cells[3].innerHTML;
    document.getElementById("cor").value = selectedRow.cells[4].innerHTML;
    document.getElementById("porte").value = selectedRow.cells[5].innerHTML;
    document.getElementById("massa").value = selectedRow.cells[6].innerHTML;
    document.getElementById("tipo").value = selectedRow.cells[7].innerHTML;
    document.getElementById("sexo").value = selectedRow.cells[8].innerHTML;
    document.getElementById("descricao").value = selectedRow.cells[9].innerHTML;
}

function updateRecord(formData)
{
    selectedRow.cells[0].innerHTML = formData.nomePet;
    selectedRow.cells[1].innerHTML = formData.nomeDono;
    selectedRow.cells[2].innerHTML = formData.raca;
    selectedRow.cells[3].innerHTML = formData.idade;
    selectedRow.cells[4].innerHTML = formData.cor;
    selectedRow.cells[5].innerHTML = formData.porte;
    selectedRow.cells[6].innerHTML = formData.massa;
    selectedRow.cells[7].innerHTML = formData.tipo;
    selectedRow.cells[8].innerHTML = formData.sexo;
    selectedRow.cells[9].innerHTML = formData.descricao;
}

function onDelete(td)
{
    if(confirm('Você tem certeza que quer deletar os dados?'))
    {
        row = td.parentElement.parentElement;

        document.getElementById("dadosList").deleteRow(row.rowIndex);

        resetForm();
    }
}