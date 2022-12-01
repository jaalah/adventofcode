import { sum } from '@lib/utils';

// Day 1: This is not my solution since I missed day 1
export default (input: string) => {
	const calories = input
		.split('\n\n')
		.map((elf) => sum(elf.split('\n').map((x) => Number(x))));

	return Math.max(...calories);
};