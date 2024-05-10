import founderWebp from '../assets/image-founder.webp';
import founder from '../assets/image-founder.jpeg';
import { Pattern } from './index';
import pattern3 from '../assets/bg-pattern-3.svg';

const Profile = () => {
	return (
		<article className='flex flex-col md:flex-row w-full md:max-w-2xl lg:max-w-6xl justify-center items-center md:h-[526px] lg:h-[650px]'>
			<header className='w-72 lg:w-[477px] h-72 lg:h-[477px] grid grid-cols-1 place-items-center md:self-start  rounded-full'>
				<picture>
					<source srcSet={founderWebp} type='image/webp' />
					<img
						src={founder}
						alt='profile'
						className='w-full h-full object-cover'
					/>
				</picture>
			</header>
			<div className='bg-[#24053E] grid grid-cols-1 place-items-center md:justify-items-start gap-y-4 w-full p-8 md:p-14 lg:p-16 -translate-y-12 md:translate-y-8 md:-translate-x-16 lg:-translate-x-10 lg:translate-y-24 lg:min-h-[413px] relative'>
				<h3 className='w-full text-white font-semibold text-3xl text-center md:text-left md:text-4xl lg:text-6xl'>
					Be the first to test
				</h3>
				<p className='text-white text-base font-normal text-center md:text-left lg:text-lg'>
					Hi, I'm Louis Graham, the founder of the company. Book a demo call
					with me to become a beta tester for our app and kickstart your
					company. Apply for access below and I’ll be in touch to schedule a
					call.
				</p>
				<button
					className='btn btn-primary font-bold text-base lg:text-lg w-fit rounded-none border-0 bg-[#44FFA1] text-[#24053E] hover:bg-[#24053E] hover:text-[#44FFA1] hover:border
        hover:border-[#44FFA1]'
				>
					Apply for access
				</button>
			</div>
		</article>
	);
};

export default Profile;
