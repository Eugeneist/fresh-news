import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToPosts } from '../../redux/actions/postsActions';
import { RootState } from '../../redux/store/store';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { FiSearch } from 'react-icons/fi';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const [filter, setFilter] = useState();

  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.postsReducer);

  // useEffect(() => {
  //   dispatch(addToPosts());
  // }, []);

  let input = document.getElementById('search');

  return (
    <Box className={styles.searchbar}>
      <Typography className={styles.searchbar__title}>
        Filter by keywords
      </Typography>
      <Paper className={styles.searchbar__field} component="form">
        <IconButton
          id="searchButton"
          type="button"
          sx={{ p: '12px 15px' }}
          aria-label="search"
          onClick={() => input?.focus()}
        >
          <FiSearch />
        </IconButton>
        <InputBase
          className={styles.searchbar__input}
          id="search"
          type="search"
        />
      </Paper>
      <Box className={styles.searchbar__results}>
        <Typography className={styles.searchbar__text}>Results:</Typography>
      </Box>
    </Box>
  );
};

export default SearchBar;
