'use strict';

const id = document.getElementById('id'),
	psword = document.getElementById('password'),
	loginBtn = document.querySelector('button');

loginBtn.addEventListener('click', login);

function login() {
	const req = {
		id: id.value,
		psword: psword.value,
	};

	fetch('/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(req),
	}).then((res) => console.log(res.json()));
}