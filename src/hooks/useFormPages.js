import { useQuery } from 'react-query';
import axios from 'axios';

const url = 'https://cemcscoop.com/membership/api/Form/ui';

const getFormPages = async () => {
  const { data } = await axios.get(url);
  return data;
};

const useFormPages = () => {
  return useQuery('form-pages', getFormPages);
};

export default useFormPages;
