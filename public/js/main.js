async function loadUsers() {
  const res = await fetch('/api/users');
  const data = await res.json();

  const ul = document.getElementById('userList');
  ul.innerHTML = '';

  data.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.username;
    ul.appendChild(li);
  });
}

function logout() {
  localStorage.removeItem('username');
  window.location.href = 'login.html';
}

window.onload = () => {
  const username = localStorage.getItem('username');
  if (!username) {
    window.location.href = 'login.html';
  } else {
    loadUsers();
  }
};
