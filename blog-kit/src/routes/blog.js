import { basename, extname } from 'path';

export async function get() {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('./blog/*.{md,svx}')).map(async ([path, module]) => {
			const slug = basename(path, extname(path));
			const { metadata } = await module();

			return {
				slug,
				...metadata
			};
		})
	);

	return {
		body: {
			posts: posts.sort((a, b) => (b.date < a.date ? 1 : -1))
		}
	};
}
