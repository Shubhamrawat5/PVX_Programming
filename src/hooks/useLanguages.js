import { useQuery } from 'react-query';

import axios from '../axios';

export const fetchLanguages = () => {
	return axios.get('/languages')
		.then((res) => res.data)
};

export default function useLanguages() {
	return useQuery('languages', fetchLanguages, {
		staleTime: 5000,
	})
};
