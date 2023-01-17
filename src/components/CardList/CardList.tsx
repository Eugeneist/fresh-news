import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import Box from '@mui/material/Box';
import styles from './CardList.module.scss';
import { iArticleProps, useAxiosGetProps } from '../../interfaces/interfaces';
import { useAxiosGet } from '../../hooks';
import { PostCard } from '../PostCard';
import { Loader } from '../Loader';
import { Error } from '../Error';

const CardList = () => {
  const { state, isLoading, error }: useAxiosGetProps = useAxiosGet();
  const filteredState = useSelector(
    (state: RootState) => state.filteredReducer,
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  if (filteredState) {
    return (
      <Box className={styles.list}>
        {filteredState.map((post: iArticleProps) => (
          <Box key={post.id}>
            <PostCard
              id={post.id}
              body={post.summary}
              title={post.title}
              image={post.imageUrl}
              publishedAt={post.publishedAt}
            />
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Box className={styles.list}>
      {state.map((post: iArticleProps) => (
        <Box key={post.id}>
          <PostCard
            id={post.id}
            body={post.summary}
            title={post.title}
            image={post.imageUrl}
            publishedAt={post.publishedAt}
          />
        </Box>
      ))}
    </Box>
  );
};

export default CardList;
