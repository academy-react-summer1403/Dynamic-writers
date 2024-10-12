import { getItem } from '../../common/storage';
import http from '../../interceptor';

export const VerifyMessage = async () => {
  try {
    const phone = JSON.parse(getItem('phoneNumber'));
    const code = JSON.parse(getItem('verifyMessage'));

    const result = await http.post('/Sign/VerifyMessage', { phoneNumber: phone, verifyCode: code });

    return result;

  } catch (error) {
    console.log('Error:', error.response ? error.response.data : error.message);
    return [];
  }
};