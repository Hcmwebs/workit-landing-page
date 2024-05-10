import React from 'react';
import { nanoid } from 'nanoid';
import facebook from '../assets/icon-facebook.svg';
import instagram from '../assets/icon-instagram.svg';
import twitter from '../assets/icon-twitter.svg';

export const items = [
	{
		id: nanoid(),
		number: 1,
		title: 'Actionable insights',
		text: 'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.',
	},
	{
		id: nanoid(),
		number: 2,
		title: 'Data-driven decisions',
		text: 'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.',
	},
	{
		id: nanoid(),
		number: 3,
		title: 'Always affordable',
		text: 'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.',
	},
];

export const socialItems = [
	{
		id: nanoid(),
		title: 'facebook',
		src: facebook,
	},
	{
		id: nanoid(),
		title: 'instagram',
		src: instagram,
	},
	{
		id: nanoid(),
		title: 'twitter',
		src: twitter,
	},
];
