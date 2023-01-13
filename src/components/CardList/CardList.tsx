import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { iArticleProps, useAxiosGetProps } from '../../interfaces/interfaces';
import { useAxiosGet } from '../../hooks';
import { PostCard } from '../PostCard';

const CardList = () => {
  const { state, isLoading, error, setLimit, limit }: useAxiosGetProps =
    useAxiosGet();

  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {state.map((post: iArticleProps) => (
          <Grid item xs={2} sm={4} md={4} key={post.id}>
            <PostCard
              article_body={post.summary}
              article_title={post.title}
              article_image={post.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardList;
