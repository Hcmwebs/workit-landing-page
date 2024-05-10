import React from 'react';
import { Profile, Socials } from './index';

const Footer = () => {
	return (
		<footer className='bg-white py-16 grid grid-col-1 place-items-center w-full'>
			<section className='align-element grid grid-col-1 place-items-center w-full gap-y-20'>
				<Profile />
				<Socials />
			</section>
		</footer>
	);
};

export default Footer;
