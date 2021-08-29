import { useMutation } from 'react-query';
import axios from 'axios';

const loginBaseUrl =
  'https://cemcscoop.com/auth/api/Login/4a7481a7c0e14bed98ad92aa31088a6d';

const login = async (credentials) => {
  const { data } = await axios.post(loginBaseUrl, credentials);
  return data;
};

export default function useAuth() {
  return useMutation((credentials) => login(credentials));
}
