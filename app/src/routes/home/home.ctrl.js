'use strict';

const users = {
	id: ['woorim', 'junior', 'senior'],
	psword: ['1234', '1234', '123456'],
};

const output = {
	hello: (req, res) => {
		res.render('home/index');
	},

	login: (req, res) => {
		res.render('home/login');
	},
};

const process = {
	login: (req, res) => {
		const id = req.body.id,
			psword = req.body.psword;

		if (users.id.includes(id)) {
			const idx = users.id.indexOf(id);
			if (users.psword[idx] === psword) {
				return res.json({
					success: true,
				});
			}
		}

		return res.join({
			success: false,
			msg: 'failed to login',
		});
	},
};

module.exports = {
	output,
	process,
};
