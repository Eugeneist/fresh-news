import Container from '@mui/material/Container';
import styles from './HomePage.module.scss';
import { CardList, SearchBar } from '../../components';
const HomePage = () => {
  return (
    <Container className={styles.container} maxWidth="xl">
      <SearchBar />
      <CardList />
    </Container>
  );
};

export default HomePage;
