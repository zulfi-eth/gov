import { AlignType } from '@/components/DAOStructures/Card';

const ITEMS = [
  {
    bg: '/assets/backgrounds/daotype-multisig.png',
    bgAlignment: 'right' as AlignType,
    content:
      'The Community Constitution introduces the governance structure, organizational structure, and operational mechanisms of the OMEH community and Foundation, including the Community Fund.',
    cta: {
      href: '#',
      text: 'Constitution',
    },

    title: (
      <>
        <span className='inline-block'>OMEH Community&nbsp;</span>
        <span className='inline-block'>Constitution</span>
      </>
    ),
    trackingLabel: 'constitution',
  },
  
  
  {
    bg: '/assets/backgrounds/daotype-nft-community.png',
    bgAlignment: 'left' as AlignType,
    content:
      'Every OMEH token holder can exercise their right to vote. Every 1 OMEH is equal to 1 vote. Community members should fully understand the operating mechanism of the OMEH community, Council, proposals, rules, etc. and actively participate in the decentralized governance process of OMEH. Voting is crucial to the development of OMEH, so please vote often and responsibly.',
    cta: {
      href: '#',
      text: 'Voting Guidelines',
    },
    title: (
      <>
        <span className='inline-block'>Voting&nbsp;</span>
        <span className='inline-block'>Rights</span>
      </>
    ),
    trackingLabel: 'voting_guidelines',
  },
  
  
  {
    bg: '/assets/backgrounds/daotype-tokenized.png',
    bgAlignment: 'center' as AlignType,
    content:
      'The OMEH Community Council is a member organization composed of OMEH holders who together execute the Foundation Management Regulations on behalf of the OMEH Foundation, and OMEH global community. The Council is managed by a Board of Directors which represents the interests of the global community and promotes community advancement and growth throughout the world.',
    cta: {
      href: '#',
      text: 'View Council',
    },
    title: (
      <>
        <span className='inline-block'>Council&nbsp;</span>
      </>
    ),
    trackingLabel: 'view_council',
  },
  
  
  {
    bg: '/assets/backgrounds/daotype-nft-community.png',
    bgAlignment: 'left' as AlignType,
    content:
      'Any OMEH holder can create a proposal and participate in the OMEH voting process. Proposals are reviewed by the Board of Directors on the Community Council, and then opened for public voting. Proposals can apply for funding, issue technology and development changes, add contributor roles, or request the withdrawal of various contributor roles.',
    cta: {
      href: '#',
      text: 'View Proposals',
    },
    title: (
      <>
        <span className='inline-block'>Voting&nbsp;</span>
      </>
    ),
    trackingLabel: 'view_proposals',
  },
];

export default ITEMS;
