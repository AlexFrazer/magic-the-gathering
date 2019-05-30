import axios from 'axios';

const instance = axios.create();

instance.defaults.baseURL = 'https://api.magicthegathering.io/v1';

export default instance;
