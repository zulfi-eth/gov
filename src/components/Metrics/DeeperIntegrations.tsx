import Header from '@/components/Header';
import Text from '@/components/Text';
import Tooltip from '@/components/Tooltip';

import Content from './Content';
import Section from './Section';

const INTEGRATIONS = [

] as const;

interface Props {
  className?: string;
}

export default function DeeperIntegrations(props: Props) {
  return (
    <Section className={props.className}>
      <div className='mb-5'>
        <Header className='bold' as='h2'>
          Next level blockchain 
          <span
          style={{
            color: `#99B83C`
          }}> solution </span>
        </Header>
      </div>
      <Text>Microservices allow you to evolve and scale up much more quickly and allows you to organize around business capabilities. You can organize around autonomous cross-functional teams, just like a construction site with independent, parallel work being performed.</Text>
    </Section>
  );
}
