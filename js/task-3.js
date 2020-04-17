const ADMIN_PASSWORD = 'qwerty';
let message;
const password = prompt('Enter password');

if (password === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else if (password === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  console.log(message);
} else {
  message = 'Доступ запрещен, неверный пароль!';
  console.log(message);
}
