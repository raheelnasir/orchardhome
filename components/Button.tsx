import Image from 'next/image';
import React from 'react';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = (props: ButtonProps) => {
  const { type, title, icon, variant, full } = props;
  return (
    <button
      type={type}
      className={` p-0 m-0 rounded-full border 
        ${variant} ${full && 'w-full'}`}>
      <a href='https://wa.me/919596000000' target='_blank' className='flex flex-row m-auto p-0'>
        {icon && <Image alt={title} src={icon} width={20} height={20} />}

        <label className='bold-16'>{title}</label>
      </a>
    </button>
  );
};

export default Button;
