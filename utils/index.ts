import { FilterNewVideos } from "@/types";
import axios from "axios";

export async function newVideos(params:FilterNewVideos) {
    // const {title, description, image, url} = params;

    // const response = await axios.get('http://localhost:2000/newvideos');
    // console.log(response.data.data);
    // return response.data.data

    try {
        const { id, title, description, image, url } = params;
        const response = await axios.get(`http://localhost:2000/newvideos`);
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        console.error('Error in newVideos:', error);
        throw error;
    }
}

export async function formNewVideos(params: FilterNewVideos) {
    try {
      const { title, description, image, url } = params;
  
      const response = await axios.post('http://localhost:2000/newvideos', {
        title: title,
        description: description,
        image: image,
        url: url,
      });
  
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.error('Error in formNewVideos:', error);
      throw error;
    }
  }

export async function editVideos(params: FilterNewVideos) {
    try {
      const { id, title, description, image, url } = params;
  
      const response = await axios.put(`http://localhost:2000/newvideos/${id}`, {
        id: id,
        title: title,
        description: description,
        image: image,
        url: url,
      });
  
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.error('Error in editVideos:', error);
      throw error;
    }
  }

export async function deleteVideos(params: FilterNewVideos) {
    try {
      const { id } = params;
        
      const response = await axios.delete(`http://localhost:2000/newvideos/${id}` );
  
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.error('Error in deleteVideos:', error);
      throw error;
    }
  }