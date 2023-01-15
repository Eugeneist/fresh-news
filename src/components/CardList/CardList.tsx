import Box from '@mui/material/Box';
import styles from './CardList.module.scss';
import { iArticleProps, useAxiosGetProps } from '../../interfaces/interfaces';
import { useAxiosGet } from '../../hooks';
import { PostCard } from '../PostCard';

const CardList = () => {
  const { state, isLoading, error, setLimit, limit }: useAxiosGetProps =
    useAxiosGet();

  return (
    <Box className={styles.list}>
      {state.map((post: iArticleProps) => (
        <Box key={post.id}>
          <PostCard
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
