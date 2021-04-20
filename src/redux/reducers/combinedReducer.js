import {combineReducers} from 'redux';
import popularMovies from './popularMovies';
import movie from './movie';
import popularSeries from './popularSeries';
import series from './series';
import popularPersons from './popularPersons';

export default combineReducers({
  popularMovies,
  movie,
  popularSeries,
  series,
  popularPersons,
});
