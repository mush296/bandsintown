import axiosInstance from '../@axios';

class ArtistService {
    async getArtist(artistName){
        const url = `/${artistName}?app_id=9c42d4dc9c1397201a4e3dc4d0bb840c`;
        return await axiosInstance.get(url);
    }
}

const artistService = new ArtistService();
export default artistService;