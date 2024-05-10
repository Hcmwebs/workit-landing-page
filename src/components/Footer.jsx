import React from 'react';
import logoDark from '../assets/logo-dark.svg';
import founderWebp from '../assets/image-founder.webp';
import founder from '../assets/image-founder.jpeg';
import { socialItems } from '../data/Data';
import { SocialItem } from './index';

const Footer = () => {
	return (
		<footer className='bg-white py-16 grid grid-col-1 place-items-center w-full'>
			<section className='align-element grid grid-col-1 place-items-center w-full gap-y-20'>
				<article className='flex flex-col'>
					<header className='w-72 h-72 grid grid-cols-1 place-items-center rounded-full'>
						<picture>
							<source srcSet={founderWebp} type='image/webp' />
							<img
								src={founder}
								alt='profile'
								className='w-full h-full object-cover'
							/>
						</picture>
					</header>
					<div className='bg-[#24053E]'>
						<h3>title</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
							nihil suscipit a mollitia dolorum ducimus iusto illo totam
							consequatur delectus.
						</p>
						<button className='btn btn-primary'>Apply for access</button>
					</div>
				</article>
				<div>
					<img src={logoDark} alt='logo' />
					<div>
						{socialItems.map((item) => {
							return <SocialItem key={item.id} {...item} />;
						})}
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
