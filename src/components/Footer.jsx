import React from 'react';
import logoDark from '../assets/logo-dark.svg';
import founderWebp from '../assets/image-founder.webp';
import founder from '../assets/image-founder.jpeg';
import facebook from '../assets/icon-facebook.svg';
import instagram from '../assets/icon-instagram.svg';
import twitter from '../assets/icon-twitter.svg';

const Footer = () => {
	return (
		<footer className='bg-white grid grid-col-1 place-items-center w-full'>
			<section className='align-element'>
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
						<a href='#'>
							<img src={facebook} alt='facebook' />
						</a>
						<a href='#'>
							<img src={facebook} alt='facebook' />
						</a>
						<a href='#'>
							<img src={facebook} alt='facebook' />
						</a>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
