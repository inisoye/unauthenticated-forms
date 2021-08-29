import { useMutation } from 'react-query';
import axios from 'axios';

const submissionUrl = 'https://cemcscoop.com/forms/name';

const postSubmission = async (newObject) => {
  const { data } = await axios.post(submissionUrl, newObject);
  return data;
};
const usePostSubmission = () => {
  return useMutation((newObject) => postSubmission(newObject));
};

export { usePostSubmission };
