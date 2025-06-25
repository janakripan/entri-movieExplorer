import {API} from "./httpServices"
import { SHOWS } from "./endPoints"

// //////////////// GET SHOWS⚠️⚠️⚠️⚠️⚠️⚠️//////////////

export const getShows = async () =>{
    const response = await API.get(SHOWS);
    return response.data
}