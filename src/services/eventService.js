import axiosInstance from '../@axios';

class EventService {
    async getEvents(artistName){
        const url = `/${artistName}/events?app_id=9c42d4dc9c1397201a4e3dc4d0bb840c`;
        return await axiosInstance.get(url);
    }
}

const eventService = new EventService();
export default eventService;