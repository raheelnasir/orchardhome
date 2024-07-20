import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='flexBetween absolute bg-transparent max-container padding-container z-30 py-5'>

      <div className='relative bg-transparent flex flex-row justify-between w-[90vw]'>
        <div className='flex flex-row items-center'>
          <img src="/logo.png" className='w-14' alt="" />

        </div>



      </div>

    </nav>
  );
};

export default Navbar;
