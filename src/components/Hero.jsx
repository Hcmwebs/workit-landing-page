import heroImgWebp from '../assets/image-hero.webp';
import heroImg from '../assets/image-hero.jpeg';
const Hero = () => {
	return (
		<div className='hero align-element'>
			<div className='w-full md:max-w-xl lg:max-w-[635px] hero-content text-center grid grid-cols-1 place-items-center gap-10'>
				<h1 className='text-5xl md:text-6xl lg:text-7xl font-semibold text-white'>
					Data {''}
					<span className='underline underline-offset-8 decoration-[#44FFA1]'>
						tailored
					</span>{' '}
					to your needs.
				</h1>
				<button className='btn btn-primary rounded-none border-0 bg-[#44FFA1] text-[#24053E] hover:border hover:border-[#44FFA1] hover:bg-[#24053E] hover:text-[#44FFA1] transition duration-500 ease-in-out cursor-pointer'>
					Learn more
				</button>
				<div className='w-80 md:w-[514px] lg:w-[767px] h-[184px] md:h-[296px] lg:h-[441px]'>
					<picture>
						<source srcSet={heroImgWebp} type='image/webp' />
						<img
							src={heroImg}
							alt='mobile phone'
							className='w-full h-full object-cover'
						/>
					</picture>
				</div>
			</div>
		</div>
	);
};

export default Hero;
