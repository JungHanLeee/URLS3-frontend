import axios from 'axios';
import { backUrl } from '../variable/url';
import { LoginToken } from '../variable/token';

export const formData = new FormData();
export const ImgUpload = async () => {
  await axios.post(`${backUrl}/profile/image/`, {
    image: formData
  }, {
    headers: {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      Authorization: `Token ${LoginToken}`,
      'Content-Type': 'multipart/form-data'
    }
  }).catch((err) => { console.log(err); });
};

export const onChange = (e: any) => {
  const img = e.target.files[0];

  formData.append('file', img);
  console.log(formData);
};