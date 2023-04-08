import { useQuery } from 'react-query';
import axios from 'axios';

export const GetData = () => {
    return useQuery('data', async () => {
        const data = await axios("./data/data.json");
        return data;
    })
}