// Add your code here
function submitData(userName, userEmail) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  })
    .then((res) => res.json())
    .then((json) => (document.body.innerHTML = json['id']))
    .catch((err) => (document.body.innerHTML = err.message));
}
