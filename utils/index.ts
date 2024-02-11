import { FilterNewVideos } from "@/types";
import axios from "axios";

export async function newVideos(params:FilterNewVideos) {
    const {title, description, image, url} = params;

    const response = await axios.get('http://localhost:2000/newvideos');
    console.log(response.data.data);
    return response.data.data
}

export async function formNewVideos(params:FilterNewVideos) {
    const {title, description, image, url} = params;

    const response = await axios.post('http://localhost:2000/newvideos');
    console.log(response.data.data);
    return response.data.data
}