

function criaNovoUsuario(){

  fetch('http://localhost:8080/usuario/novoUsuario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      { 
        nome: document.getElementById("entradaNome").value, 
        email: document.getElementById("entradaEmail").value,
        senha: document.getElementById("entradaPassword").value,
        dtNascimento: document.getElementById("entradaDtNascimento").value,
        paisOrigem: document.getElementById("entradaPaisOrigem").value,
        sexo: document.getElementById("entradaSexo").value
      }
    )
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    if(response.ok){
      alert('Req Sucesso!');
    }else{
      alert('Erro!')
    }
  }



  function logarUsuario() {
    const email = document.getElementById('entradaEmail').value;
    const senha = document.getElementById('entradaPassword').value;
    let url = 'http://localhost:8080/usuario/getEmail/' + email
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var emailUsuario = data.email
        var senhaUsuario = data.senha
        var idUsuario = data.idUsuario

        if (emailUsuario == email && senhaUsuario == senha) {
          localStorage.setItem("idUser", idUsuario);
          window.location.href = "paginaUsuario.html";
          alert(valor)
        } else {
          alert('Usuário inválido');
        }
      })
      .catch(error => console.error(error));
  }

  function carregarDados(){
    var idUsuario = localStorage.getItem('idUser');

    let url = 'http://localhost:8080/usuario/' + idUsuario
    console.log(url)
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Erro na requisição. Status: ' + response.status);
      }
    })
    .then(data => {
      // Aqui você pode utilizar os dados retornados pela requisição
      console.log(data);
      localStorage.setItem("nomeUser", data.nome);
      localStorage.setItem("emailUser", data.email);
      localStorage.setItem("senhaUser", data.senha);
      localStorage.setItem("dtNascimentoUser", data.dtNascimento);
      localStorage.setItem("paisOrigemUser", data.paisOrigem);
      localStorage.setItem("sexoUser", data.sexo);

      var nomeUsuario = localStorage.getItem('nomeUser')
      var emailUsuario = localStorage.getItem('emailUser')
      var senhaUsuario = localStorage.getItem('senhaUser')
      var dtNascimentoUsuario = localStorage.getItem('dtNascimentoUser')
      var paisOrigemUsuario = localStorage.getItem('paisOrigemUser')
      var sexoUsuario = localStorage.getItem('sexoUser')
      
      


      const elementoNome = document.getElementById('entradaNome')
      const elementoSenha = document.getElementById('entradaSenha')
      const elementoDtNasc = document.getElementById('entradaDtNasc')
      const elementoEmail = document.getElementById('entradaEmail')
      const elementoSexo = document.getElementById('entradaSexo')
      const elementoPaisOrigem = document.getElementById('entradaPaisDeOrigem')
      
      elementoNome.value = nomeUsuario
      elementoSenha.value = senhaUsuario
      elementoDtNasc.value = dtNascimentoUsuario
      elementoEmail.value = emailUsuario
      elementoPaisOrigem.value = paisOrigemUsuario

      for(let i = 0; i < elementoSexo.options.length; i++){
        if(elementoSexo.options[i].value === sexoUsuario){
          elementoSexo.selectedIndex = i;
          break;
        }
      }

      const meuUsuario = document.getElementById('meuUsuario')
      

      meuUsuario.textContent = nomeUsuario
      
      // Recriar o elemento <svg> e adicioná-lo novamente
      const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgElement.setAttribute("width", "16");
      svgElement.setAttribute("height", "16");
      svgElement.setAttribute("fill", "currentColor");
      svgElement.setAttribute("class", "bi bi-person-circle");
      svgElement.setAttribute("viewBox", "0 0 16 16");

      const pathElement1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathElement1.setAttribute("d", "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z");

      const pathElement2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathElement2.setAttribute("fill-rule", "evenodd");
      pathElement2.setAttribute("d", "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z");

      svgElement.appendChild(pathElement1);
      svgElement.appendChild(pathElement2);

      meuUsuario.appendChild(svgElement);

      })
    .catch(error => {
      // Aqui você trata o erro caso a requisição falhe
      console.error(error);
    });

  }

  function carregarDadosModal(){

    var nomeUsuario = localStorage.getItem('nomeUser')
    var emailUsuario = localStorage.getItem('emailUser')
    var senhaUsuario = localStorage.getItem('senhaUser')
    var dtNascimentoUsuario = localStorage.getItem('dtNascimentoUser')
    var paisOrigemUsuario = localStorage.getItem('paisOrigemUser')
    var sexoUsuario = localStorage.getItem('sexoUser')

    const elementoNomeModal = document.getElementById('entradaNomeModal')
    const elementoSenhaModal = document.getElementById('entradaSenhaModal')
    const elementoDtNascModal = document.getElementById('entradaDtNascModal')
    const elementoEmailModal = document.getElementById('entradaEmailModal')
    const elementoSexoModal = document.getElementById('entradaSexoModal')
    const elementoPaisOrigemModal = document.getElementById('entradaPaisDeOrigemModal')
      
    elementoNomeModal.value = nomeUsuario
    elementoSenhaModal.value = senhaUsuario
    elementoDtNascModal.value = dtNascimentoUsuario
    elementoEmailModal.value = emailUsuario
    elementoPaisOrigemModal.value = paisOrigemUsuario

    for(let i = 0; i < elementoSexoModal.options.length; i++){
      if(elementoSexoModal.options[i].value === sexoUsuario){
        elementoSexoModal.selectedIndex = i;
        break;
      }
    }
  }


  function atualizarDadosUsuario(){
  
    var idUser = localStorage.getItem('idUser');
    const elementoNomeModal = document.getElementById('entradaNomeModal').value
    const elementoSenhaModal = document.getElementById('entradaSenhaModal').value
    const elementoDtNascModal = document.getElementById('entradaDtNascModal').value
    const elementoEmailModal = document.getElementById('entradaEmailModal').value
    const elementoSexoModal = document.getElementById('entradaSexoModal').value
    const elementoPaisOrigemModal = document.getElementById('entradaPaisDeOrigemModal').value

    console.log(elementoSexoModal)

    let url = 'http://localhost:8080/usuario/atualizacaoUsuario'
    
    const data = {
      idUsuario: idUser,
      nome: elementoNomeModal,
      email: elementoEmailModal,
      senha: elementoSenhaModal,    
      dtNascimento: elementoDtNascModal,
      paisOrigem: elementoPaisOrigemModal
  };

  console.log(elementoSexoModal)
  fetch(url, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => {
    if (response.ok) {
      console.log('Requisição PUT bem-sucedida');
      // Faça algo após a requisição PUT ser concluída com sucesso
      alert('Dados Atualizados!')
      window.location.reload()
    } else {
      console.log('Erro na requisição PUT');
      // Faça algo para tratar o erro na requisição PUT
    }
  })
  .catch(error => {
    console.log('Erro na requisição PUT:', error);
    // Faça algo para tratar o erro na requisição PUT
  });




  }

  function apagarUsuario(){
    var idUsuario = localStorage.getItem('idUser');

    let url = 'http://localhost:8080/usuario/exclusaoUsuario/' + idUsuario
    fetch(url, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // Exclusão bem-sucedida
          console.log('Exclusão realizada com sucesso.');
          // Verificar se o recurso de cache está disponível no navegador
          localStorage.clear();
          alert('Usuario Deletado!')
          window.location.href = "login.html"
        } else {
          // Tratar erro de exclusão
          console.log('Erro ao realizar a exclusão.');
        }
      })
      .catch(error => {
        // Tratar erro de conexão ou outros erros
        console.log('Erro ao conectar-se ao servidor:', error);
      });
    
  }