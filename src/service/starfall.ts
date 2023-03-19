export interface IStar {
	size: number;
	left: number;
	top: number;
	duration: number;
}

export function generateStarfall(starCount: number): IStar[] {
	const stars: IStar[] = [];

	for (let i = 0; i < starCount; i++) {
		const size = Math.random() * 2 + 1;
		const left = Math.random() * 100;
		const top = Math.random() * 100;
		const duration = Math.random() * 3 + 1;

		stars.push({ size, left, top, duration });
	}

	return stars;
}
