import { bottombarLinks } from '@/constants';
// Removed unnecessary import { link } from 'fs';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Bottombar = () => {
  const { pathname } = useLocation();

  return (
    <section className='bottom-bar'>
      {bottombarLinks.map((link)=> {
        const isActive = pathname === link.route;

        return (
            <Link 
              to={link.route}
              key={link.label} 
              className={`${isActive ? 'bg-primary-500 rounded-[10px]' : ''} flex-center flex-col gap-1 p-2 transition`} /* Replaced single quotes with backticks to correctly use template literals */
            >

            <img 
            src={link.imgURL} 
            alt={link.label} 
            width={16}
            height={16}
            className={`${isActive ? 'invert-white' : ''}`} /* Replaced single quotes with backticks to correctly use template literals */
            />
            <p className="tiny-medium text-light-2">{link.label}</p>
            </Link>
        )
      })}
    </section>
  )
}

export default Bottombar;
