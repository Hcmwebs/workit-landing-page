import { Hero, Navbar } from './index';

const Header = () => {
	return (
		<header className=' w-full grid grid-cols-1 place-items-center'>
			<Navbar />
			<Hero />
			<button>learn</button>
		</header>
	);
};

export default Header;
