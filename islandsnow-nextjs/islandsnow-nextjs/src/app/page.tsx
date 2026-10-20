import { Container } from 'react-bootstrap';
import TopMenu from '@/components/TopMenu';
import IslandSnowLogo from '@/components/IslandSnowLogo';
import MiddleMenu from '@/components/MiddleMenu';
import FullWidthImage from '@/components/FullWidthImage';
import FooterMenu from '@/components/FooterMenu';

const Home = () => (
  <main>
    <TopMenu />
    <Container className="site-content px-0">
      <IslandSnowLogo />
      <MiddleMenu />
      <FullWidthImage />
      <FooterMenu />
    </Container>
  </main>
);

export default Home;
