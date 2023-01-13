import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { iCardProps } from '../../interfaces/interfaces';

const PostCard: React.FC<iCardProps> = ({
  article_body,
  article_title,
  article_image,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={article_image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article_body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
