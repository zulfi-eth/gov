import Image from 'next/image';

import clsxm from '@/lib/clsxm';
import trackClick from '@/lib/trackClick';

import * as Anchor from '@/components/Anchor';
import Header from '@/components/Header';
import Text from '@/components/Text';
import { BsArrowRight } from "react-icons/bs";

export declare type AlignType = 'left' | 'center' | 'right';

interface Props {
  bg: string;
  bgAlignment: AlignType;
  className?: string;
  content: string;
  cta: {
    href: string;
    text: string;
  };

  title: React.ReactNode;
  trackingContext: string;
  trackingLabel: string;
}

export default function Card(props: Props) {
  return (
    <article
      className={clsxm(
        props.className,
        'overflow-hidden',
        'px-5',
        'py-8',
        'relative',
        'rounded-md',
        'sm:p-8'
      )}
    >
      <div
        className={clsxm(
          '-z-10',
          'absolute',
          'bottom-0',
          'h-[450px]',
          'w-[800px]',
          props.bgAlignment === 'left' && 'left-0',
          props.bgAlignment === 'right' && 'right-0',
          props.bgAlignment === 'center' && 'left-1/2',
          props.bgAlignment === 'center' && '-translate-x-1/2'
        )}
      >
        <Image alt='background' layout='fill' src={props.bg} />
      </div>
      <div className='mb-5 flex items-center lg:min-h-[98px] 1_5xl:max-w-[360px]'>
        <Header as='h3'>{props.title}</Header>
      </div>
      <Text withOpacity className='block max-w-[489px] pb-8 lg:min-h-[104px]'>
        {props.content}
      </Text>

      <Anchor.Dark
        className='w-full max-w-[356px] justify-between'
        href={props.cta.href}
        onClick={() => trackClick(props.trackingLabel, props.trackingContext)}
      >
        {props.cta.text}{' '}
        <BsArrowRight
          className={clsxm(
            'ml-4',
            'transition-all',
            'group-focus:brightness-0',
            'group-hover:brightness-0'
          )}
          alt='Arrow'
        />
      </Anchor.Dark>
    </article>
  );
}
