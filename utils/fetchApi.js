import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'



  export const fetchApi = async (url) => {

    const { data} = await axios.get( (url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '6ba22e425fmsh43123071b198350p1d3712jsnb26fd9a42b6c'
          }
    });
    return data;
  }