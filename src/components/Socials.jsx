import logoDark from '../assets/logo-dark.svg';

import { socialItems } from '../data/Data';
import { SocialItem } from './index';

const Socials = () => {
	return (
		<div className='grid grid-cols-1 place-items-start w-full max-w-28 gap-y-14'>
			<img src={logoDark} alt='logo' />
			<div>
				{socialItems.map((item) => {
					return <SocialItem key={item.id} {...item} />;
				})}
			</div>
		</div>
	);
};

export default Socials;
