import Box from '@mui/material/Box';
import styles from './CardList.module.scss';
import { iArticleProps, useAxiosGetProps } from '../../interfaces/interfaces';
import { useAxiosGet } from '../../hooks';
import { PostCard } from '../PostCard';
import { Loader } from '../Loader';
import { Error } from '../Error';

const CardList = () => {
  const { state, isLoading, error }: useAxiosGetProps = useAxiosGet();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
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
