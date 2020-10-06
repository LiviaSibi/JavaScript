const divElement = document.getElementById('container')
const inputElement = document.querySelector("#container input")
const searchButtonElement = document.getElementById('searchButton')
const ulElement = document.querySelector("#container ul")


//------------------------------------- USANDO AXIOS -------------------------------------
inputElement.onkeypress = function(e) {
  if (e.keyCode == 13) {
    searchUser();
    e.preventDefault();
    inputElement.value = "";
  };
};

searchButtonElement.onclick = function() {
  searchUser();
  inputElement.value = "";
};

function searchUser(user) {
  document.getElementById("errorMessage").innerHTML="";
  document.getElementById("lblLoading").innerHTML="Carregando....";
  user = inputElement.value;
  const url = 'https://api.github.com/users/'+ user + '/repos';
  
  axios
  .get(url)
  .then(function(response) {
    document.getElementById("lblLoading").innerHTML="";
    const repos = response.data;
    for(let repo of repos) {
      let liElement = document.createElement('li');
      let textItem = document.createTextNode(repo.name);
      liElement.appendChild(textItem);
      divElement.appendChild(liElement);
    };
  })
  .catch(function(error) {
    document.getElementById("lblLoading").innerHTML="";
    if(error.response.status == 404){
      document.getElementById("errorMessage").innerHTML="Usuário (" + user + ") não existe."
    }
  })
};


//------------------------------------- USANDO HTTP REQUEST -------------------------------------
var minhaPromise = function() {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    let user = inputElement.value;
    const url = 'https://api.github.com/users/'+ user + '/repos';
    xhr.open('GET', url);
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro', xhr.status, 'na requisição')
        }
      }
    }
  });
}

document.getElementById('searchButton2').onclick = function() {
  minhaPromise()
  .then(function(response){
    document.getElementById("lblLoading").innerHTML="";
    const repos = response;
    for(let repo of repos) {
      let liElement = document.createElement('li');
      let textItem = document.createTextNode(repo.name);
      liElement.appendChild(textItem);
      divElement.appendChild(liElement);
    };
  })
  .catch(function(error){
    document.getElementById("lblLoading").innerHTML="";
    let user = inputElement.value;
    if(error.status == 404){
      document.getElementById("errorMessage").innerHTML="Usuário (" + user + ") não existe."
    }
  });
}