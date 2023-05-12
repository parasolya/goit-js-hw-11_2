import axios from 'axios';

export class UnsplashAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '34888739-64f83dbd913255152a5bcb43e';

  query = 'null';
  page = 1;
  per_page = 40;

  getPhotos() {
    const searchParams = new URLSearchParams({
      q: this.query,
      key: this.#API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: this.per_page,
      page: this.page,
    });
    return axios.get(`${this.#BASE_URL}?${searchParams}`);
  }
}
