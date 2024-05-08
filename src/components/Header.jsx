import { Hero, Navbar } from './index';

const Header = () => {
	return (
		<header className=' w-full grid grid-cols-1 place-items-center bg-[#24053E]'>
			<Navbar />
			<Hero />
		</header>
	);
};

export default Header;
