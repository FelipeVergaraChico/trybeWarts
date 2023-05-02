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
const btnSubmit = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
console.log(btnSubmit);
console.log(checkbox);

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    btnSubmit.disabled = false;
    console.log(btnSubmit.disabled);
  } else {
    btnSubmit.disabled = true;
    console.log(btnSubmit.disabled);
  }
});
