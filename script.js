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

const imagemColores = document.querySelector('#trybewarts-forms-logo');
main.appendChild(imagemColores);
const input = document.createElement('input');
input.id = 'input-name';
input.setAttribute('placeholder', 'Nome');
forms.appendChild(input);
const input2 = document.createElement('input');
input2.id = 'input-lastname';
input2.setAttribute('placeholder', 'Sobrenome');
forms.appendChild(input2);
const input3 = document.createElement('input');
input3.id = 'input-email';
input3.setAttribute('placeholder', 'Email');
forms.appendChild(input3);
const select = document.createElement('select');
forms.appendChild(select);
select.id = 'house';
const option = document.createElement('option');
option.id = 'gitnoria-house';
option.text = 'Gitnória';
select.add(option);
const option2 = document.createElement('option');
option2.id = 'reactpuff-house';
option2.text = 'Reactpuff';
select.add(option2);
const option3 = document.createElement('option');
option3.id = 'corvinode-house';
option3.text = 'Corvinode';
select.add(option3);
const option4 = document.createElement('option');
option4.id = 'pytherina-house';
option4.text = 'Pytherina';
select.add(option4);
