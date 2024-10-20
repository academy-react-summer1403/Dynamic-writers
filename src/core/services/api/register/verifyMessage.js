import { getItem } from '../../common/storage';
import http from '../../interceptor';

export const VerifyMessage = async (verificationCode) => {
  try {
    const phone = JSON.parse(getItem('phoneNumber'));

    const result = await http.post('/Sign/VerifyMessage', { phoneNumber: phone, verifyCode: verificationCode });

    return result;

  } catch (error) {
    console.log(error);
    return [];
  }
};