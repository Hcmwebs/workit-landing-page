import items from '../data/Data';
import SingleItem from './SingleItem';

const MainContent = () => {
	return (
		<main className='w-full bg-[#FCF8FF] grid place-items-center py-20'>
			<section className='w-full align-element grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-10 lg:gap-x-6'>
				{items.map((item) => {
					return <SingleItem key={item.id} {...item} />;
				})}
			</section>
		</main>
	);
};

export default MainContent;
