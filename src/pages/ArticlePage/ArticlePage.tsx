import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { RootState } from '../../redux/store/store';
import styles from './ArticlePage.module.scss';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ArticlePage = () => {
  const state = useSelector((state: RootState) => state.postsReducer);
  const { id } = useParams();

  const [post, setPost] = useState(state);

  useEffect(() => {
    const filteredList = state.find((x) => x.id === id);
    setPost(filteredList);
  }, [id, state]);

  return (
    <Container maxWidth="xl">
      <Box className={styles.article__image}>img </Box>
    </Container>
  );
};

export default ArticlePage;
