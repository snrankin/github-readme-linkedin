import { VercelRequest, VercelResponse } from '@vercel/node';
import _ from 'lodash';
import scraper from './scraper';

export default async (req: VercelRequest, res: VercelResponse) => {
	if (_.get(req, ['query', 'username'])) {
		try {
			const result = await scraper(`https://www.linkedin.com/in/${_.get(req, ['query', 'username'])}`);
			if (!result) {
				res.json({ error: 'The people/company has not been found.', result: null });
			} else {
				res.json({ error: null, result });
			}
		} catch (e) {
			res.json({ error: e.message, result: null });
		}
	} else {
		res.json({ error: 'A LinkedIn username is required.' });
	}
};
