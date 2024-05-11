import { Hero, Navbar, Pattern } from './index';
import pattern1 from '../assets/bg-pattern-1.svg';
import pattern2 from '../assets/bg-pattern-2.svg';

const Header = () => {
	return (
		<header className=' w-full grid grid-cols-1 place-items-center bg-[#24053E] relative'>
			<Navbar />
			<Pattern
				pattern={pattern1}
				className='hidden md:block absolute -left-60 top-28 lg:-left-40'
			/>
			<Hero />
			<Pattern
				pattern={pattern2}
				className='hidden md:block absolute -top-62 -right-16 lg:right-8 lg:bottom-56'
			/>
		</header>
	);
};

export default Header;
