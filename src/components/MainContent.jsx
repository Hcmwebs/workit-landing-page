import items from '../data/Data';
import SingleItem from './SingleItem';

const MainContent = () => {
	return (
		<main className='align-element bg-[#FCF8FF] grid grid-cols-1 place-content-center gap-y-10'>
			{items.map((item) => {
				return <SingleItem key={item.id} {...item} />;
			})}
		</main>
	);
};

export default MainContent;
