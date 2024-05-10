import logoDark from '../assets/logo-dark.svg';

import { socialItems } from '../data/Data';
import { SocialItem } from './index';

const Socials = () => {
	return (
		<div>
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
