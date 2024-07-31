import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='flexBetween absolute bg-transparent max-container z-30'>

      <div className='relative bg-transparent flex flex-row justify-between w-[90vw]'>
        <div className='flex flex-row items-center'>
          <img src="/logo.png" className='w-32 rounded-full ' alt="" />

        </div>



      </div>

    </nav>
  );
};

export default Navbar;
