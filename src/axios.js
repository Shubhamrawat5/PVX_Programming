import Axios from 'axios';

const URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001/api/v1';

const axios = Axios.create({
	baseURL: URL,
	timeout: 3000,
});

export default axios;
