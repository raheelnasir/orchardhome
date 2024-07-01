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
      className={`flexCenter  rounded-full border 
        ${variant} ${full && 'w-full'}`}>
      <a href='https://wa.me/919596000000' target='_blank' className='flex'>
        {icon && <Image alt={title} src={icon} width={24} height={24} />}

        <label className='bold-16'>{title}</label>
      </a>
    </button>
  );
};

export default Button;
