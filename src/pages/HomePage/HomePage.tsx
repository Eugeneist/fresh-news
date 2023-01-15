import Container from '@mui/material/Container';
import styles from './HomePage.module.scss';
import { CardList } from '../../components';
const HomePage = () => {
  return (
    <Container className={styles.container} maxWidth="xl">
      <CardList />
    </Container>
  );
};

export default HomePage;
