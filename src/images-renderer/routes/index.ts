import { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
	res.send(
		'<h3>Go to <a href="https://github.com/snrankin/github-readme-linkedin">github-readme-linkedin</a> for more info!</h3>'
	);
};
