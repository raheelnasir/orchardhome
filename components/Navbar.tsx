import { NAV_LINKS } from '@/constants/constant.index';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link href='/' className='font-bold text-3xl'>
        Orchard Homestay
      </Link>

      <div className='flexCenter'>
        <Button
          type='button' 
          title='Contact  '
          icon='/user.svg'
          variant='btn_dark_green'
        />
      </div>


    </nav>
  );
};

export default Navbar;
