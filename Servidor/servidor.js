const express = require('express');
const app = express();
const port = 3000;

// Para lidar com dados de formulários codificados em URL e JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Definir rota para a página de registro
app.get('/servidor', (req, res) => {
  res.sendFile(__dirname + '/register.html');
});

// Definir rota para a página de login
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// Rota para lidar com o envio dos dados do formulário de registro
app.post('/register', (req, res) => {
  // Obter os dados do formulário do corpo da solicitação
  const { username, password } = req.body;
  
  // Aqui você lidaria com o armazenamento dos dados do usuário no seu banco de dados ou qualquer outra lógica necessária
  console.log(`Usuário registrado com sucesso! Nome de usuário: ${username}, senha: ${password}`);
  
  // Enviar uma resposta de sucesso ao usuário
  res.render('resposta', { mensagem: 'Registro concluído com sucesso!' });
});

// Rota para lidar com o envio dos dados do formulário de login
app.post('/login', (req, res) => {
  // Obter os dados do formulário do corpo da solicitação
  const { username, password } = req.body;
  
  // Aqui você lidaria com a validação dos dados do usuário no seu banco de dados ou qualquer outra lógica necessária
  if (username === 'usuário' && password === 'senha') {
    console.log(`Usuário logado com sucesso! Nome de usuário: ${username}, senha: ${password}`);
    
    // Enviar uma resposta de sucesso ao usuário
    res.render('resposta', { mensagem: 'Login bem-sucedido!' });
  } else {
    // Enviar uma resposta de erro ao usuário
    res.render('resposta', { mensagem: 'Nome de usuário ou senha incorretos!' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
