import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='flexBetween absolute bg-transparent max-container padding-container z-30 py-5'>

      <div className='relative bg-transparent flex flex-row justify-between w-[90vw]'>
        <div className='flex flex-row items-center'>
          <img src="/logo-3.png" className='w-20' alt="" />
          <Link href='/' className='font-bold text-2xl ' style={{textShadow:""}} >

          </Link>

        </div>

        <div className=''>
          <Button
            type='button'

            title='Contact  '
            icon='/user.svg'
            variant='btn_dark_green'
          />
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
