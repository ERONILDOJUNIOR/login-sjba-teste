document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username && password) {
      if (username === 'admin' && password === 'admin') {
        window.location.href = 'pagina-secundaria.html';
      } else {
        alert("Credenciais inválidas!");
      }
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  });
  