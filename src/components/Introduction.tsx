import Image from 'next/image';
import Link from 'next/link';

import trackClick from '@/lib/trackClick';

import * as Anchor from '@/components/Anchor';
import CenteredContent from '@/components/CenteredContent';
import Header from '@/components/Header';
import Text from '@/components/Text';
import { BsArrowRight, BsBoxArrowUpRight } from "react-icons/bs";

export default function Introduction() {
  return (
    <div className='relative overflow-hidden'>
      <div className='absolute -top-[275px] left-1/2 -z-10 h-[844px] w-[1800px] -translate-x-1/2'>
        <Image
          priority
          className='w-full'
          alt='hero image'
          src='/assets/backgrounds/landing-hero-desktop.png'
          layout='fill'
        />
      </div>
      <CenteredContent className='px-5'>
        <article className='pt-[100px] pb-[50px] sm:pt-[200px] sm:pb-[155px]'>
          <div className='max-w-screen-lg'>
            <Header as='h1'>
              Reach new heights with <span className='font-bold'>OMEH</span>
            </Header>
          </div>
          <div className='mt-4 mb-11 w-full max-w-[679px] md:mb-14 md:text-left xl:w-2/3'>
            <Text as='p1' withOpacity>
              With innovation and blockchain expertise, the OMEH platform empowers you to employ advanced technologies and develop that market-leading product.
            </Text>
          </div>
          <div className='flex flex-col items-center gap-4 sm:flex-row'>
          
            <Anchor.Secondary
              className='w-full justify-center sm:w-auto'
              href='#'
              onClick={() => trackClick('enter_app', 'index_introduction')}
            >
              Enter App{' '}
              <BsArrowRight className='ml-2' />
              
            </Anchor.Secondary>
            <Link passHref href='/create-dao'>
              <Anchor.Secondary
                className='w-full justify-center sm:w-auto'
                onClick={() => trackClick('create_dao', 'index_introduction')}
              >
                Governance{' '}
              <BsArrowRight className='ml-2' />
              </Anchor.Secondary>
            </Link>
            
            <Anchor.Tertiary
              className='block w-full justify-center sm:hidden sm:w-auto'
              href='https://docs.realms.today/'
              onClick={() => trackClick('read_docs', 'index_introduction')}
            >
              <BsBoxArrowUpRight
                img='external-link-thin-white'
                className='mr-2'
                alt='External link icon'
              />{' '}
              Read the docs
            </Anchor.Tertiary>
          </div>
        </article>
      </CenteredContent>
    </div>
  );
}
