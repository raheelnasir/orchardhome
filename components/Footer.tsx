import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants/constant.index'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className='flexCenter border-t pt-5 mb-24'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <div>
            <img src="/logo-33.png" className='w-40' alt="" />
          </div>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns: any) => (
              <FooterColumn title={columns.title}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                  {columns.links.map((link: any) => (
                    <Link href='/' key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className='flex flex-col max-w-[300px]'>
              <p className=' font-bold text-[18px]'>
                Location

              </p>
              <p>
                Bhat Mohallah Villagam Kupwara Jammu & Kashmir

                Country

                India

                Postal Code

                193224
              </p>
            </div>

            <div className='flex flex-col gap-5'>

            </div>
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link: any) => (
                <div key={link.label} className='flex gap-4 md:flex-col lg:flex-row'>
                  <p className='whitespace-nowrap'>{link.label}:</p>
                  <Link
                    href={
                      link.label === 'Email'
                        ? `mailto:${link.value}`
                        : link.label === 'Phone'
                          ? `tel:${link.value}`
                          : link.label === 'Whatsapp'
                            ? `https://wa.me/${link.value}`
                            : '/'
                    }
                    className='medium-14 whitespace-nowrap text-blue-70'>
                    {link.value}
                  </Link>
                </div>
              ))}
            </FooterColumn>
            <div className="fixed z-50  top-1/2 right-0 transform -translate-y-1/2 bg-green-90 p-2 rounded-l-lg flex flex-col gap-4">
              <a href="tel:+919797152006" target='_blank' className="text-white w-[20px]  hover:text-blue-500">
                <FontAwesomeIcon icon={faPhoneAlt} fontSize={"20px"} />

              </a>
              <a href="https://wa.me/+917006379928" target='_blank' className="text-white hover:text-green-500">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
              <a href="mailto:marifat.edu.17@gmail.com" className="text-white hover:text-blue-400 ">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
            </div>
            {/* <div className='flex flex-col gap-5'>
              <FooterColumn title={SOCIALS.title}>
                <ul className='regular-14 flex gap-4 text-gray-30'>
                  {SOCIALS.links.map((link: any) => (
                    <Link href='/' key={link}>
                      <Image src={link} alt='logo' width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div> */}
          </div>
        </div>

        <div className='border bg-gray-20' />
        
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
