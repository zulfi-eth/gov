import Link from 'next/link';

import clsxm from '@/lib/clsxm';
import trackClick from '@/lib/trackClick';

import * as Anchor from '@/components/Anchor';
import SocialIcons from '@/components/SocialIcons';
import { BsBoxArrowUpRight } from "react-icons/bs";

interface Props {
  className?: string;
}

export default function Footer(props: Props) {
  return (
    <div className={props.className}>
      <footer
        className={clsxm(
          'flex-wrap',
          'flex',
          'gap-x-10',
          'items-center',
          'justify-between',
          'mx-auto',
          'relative',
          'w-full',
          'md:max-w-[1548px]'
        )}
      >
        <div />
        <div
          className={clsxm(
            'absolute',
            'flex-col',
            'flex',
            'gap-2',
            'items-center',
            'justify-center',
            'left-1/2',
            'pb-4',
            'top-1/2',
            '-translate-x-1/2',
            'translate-y-[60px]',
            'md:pb-0',
            'md:-translate-y-1/2',
            'w-fit'
          )}
        >
          <div
            className={clsxm(
              'flex',
              'flex-col',
              'items-center',
              'justify-center'
            )}
          >
            <SocialIcons className='mb-5' trackingContext='footer' />
            <div className='flex justify-center space-x-2 text-sm opacity-70'>
              <div className='whitespace-nowrap'>
                © 2022 Omeh
              </div>
              <span>|</span>
              <Link className='whitespace-nowrap' href='/terms' passHref>
                <a onClick={() => trackClick('terms', 'footer')}>Terms</a>
              </Link>
              <span>|</span>
              <Link
                className='whitespace-nowrap'
                href='/privacy-policy'
                passHref
              >
                <a onClick={() => trackClick('privacy', 'footer')}>
                  Privacy Policy
                </a>
              </Link>
            </div>
          </div>
          <div className='opacity-70'>
            Powered by <span className='font-bold'>Solana</span>
          </div>
        </div>
        <div className='overflow-hidden'>
          <Anchor.Tertiary
            className='-mr-11'
            href='https://docs.realms.today/'
            onClick={() => trackClick('read_docs', 'footer')}
          >
            <BsBoxArrowUpRight
              className='mr-2'
            />{' '}
            Read the docs
          </Anchor.Tertiary>
        </div>
      </footer>
    </div>
  );
}
