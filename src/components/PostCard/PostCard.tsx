import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CiCalendar } from 'react-icons/ci';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './PostCard.module.scss';
import { NavLink } from 'react-router-dom';
import { iCardProps } from '../../interfaces/interfaces';
import { getPublishedDate } from '../../helpers';

const PostCard: React.FC<iCardProps> = ({
  id,
  body,
  title,
  image,
  publishedAt,
}) => {
  return (
    <Box className={styles.card} sx={{ maxWidth: 400, p: 0, m: 0 }}>
      <CardMedia
        className={styles.card__image}
        component="img"
        alt="article picture"
        height="140"
        image={image}
      />
      <CardContent className={styles.card__contentbox}>
        <Box className={styles.card__datebox}>
          <CiCalendar className={styles.card__datebox_icon} />
          <Typography className={styles.card__datebox_date}>
            {getPublishedDate(publishedAt)}
          </Typography>
        </Box>
        <Box className={styles.card__articlebox}>
          <Box className={styles.card__typographybox}>
            <Typography className={styles.card__title}>
              {title.split(' ').slice(0, 4).join(' ')}
            </Typography>
            <Typography className={styles.card__text}>
              {body.split(' ').slice(0, 20).join(' ') + '...'}
            </Typography>
          </Box>
          <NavLink className={styles.card__navlink} to={`/article/${id}`}>
            <Button className={styles.card__button}>
              Read more <ArrowForwardIcon className={styles.card__buttonicon} />
            </Button>
          </NavLink>
        </Box>
      </CardContent>
    </Box>
  );
};

export default PostCard;
