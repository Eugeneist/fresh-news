import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { addToFiltered } from '../../redux/actions/filteredActions';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { FiSearch } from 'react-icons/fi';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const [value, setValue]: any = useState('');
  let input = document.getElementById('search');

  const state = useSelector((state: RootState) => state.postsReducer);
  const filteredState = useSelector(
    (state: RootState) => state.filteredReducer,
  );

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value?.length === 0) {
      dispatch(addToFiltered(state));
    }

    const filteredTitle = state.filter((x) =>
      x.title.toLowerCase().includes(value.toLowerCase()),
    );

    const filteredSummary = state.filter((x) =>
      x.summary.toLowerCase().includes(value.toLowerCase()),
    );

    const filteredList = [...filteredTitle, ...filteredSummary];
    let uniqueFilteredList = filteredList.filter((article, index) => {
      return filteredList.indexOf(article) === index;
    });

    dispatch(addToFiltered(uniqueFilteredList));
  }, [dispatch, state, value]);

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
          onChange={handleChange}
        />
      </Paper>
      <Box className={styles.searchbar__results}>
        <Typography className={styles.searchbar__text}>
          Results: {filteredState.length}
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchBar;
