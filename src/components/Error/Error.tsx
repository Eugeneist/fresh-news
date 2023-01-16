import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import styles from './Error.module.scss';

const Error = () => {
  return (
    <Container className={styles.container} maxWidth="xl">
      <Stack className={styles.container__stack} spacing={2}>
        <Alert variant="filled" severity="error">
          There was an error loading data!
        </Alert>
      </Stack>
    </Container>
  );
};

export default Error;
