import { getItem } from '../../common/storage';
import http from '../../interceptor';

export const SendVerifyMessage = async () => {
  try {
    const phone = JSON.parse(getItem('phoneNumber'));

    const result = await http.post('/Sign/SendVerifyMessage', { phoneNumber: phone });

    return result;

  } catch (error) {
    console.log('Error:', error.response ? error.response.data : error.message);
    return [];
  }
};