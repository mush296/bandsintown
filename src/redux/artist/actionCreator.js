import artistService from '../../services/artistService';
import actions from './actions';

const { fetchArtist, artistIsFetching} = actions;

const getArtist = artistName => {
    return async dispatch => {
        try {
          dispatch(artistIsFetching());
          const response = await artistService.getArtist(artistName);
          dispatch(fetchArtist(response.data));
        } catch (err) {
          const error = new Error("Problem fetching artist");
          error.inner = err;
          throw error;
        }
      };
};

export default getArtist;