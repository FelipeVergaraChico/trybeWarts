const botao = document.querySelector('#button-password');

botao.addEventListener('click', () => {
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
const main = document.createElement('main');
const forms = document.createElement('form');
document.body.appendChild(main);
main.appendChild(forms);

forms.id = 'evaluation-form';
