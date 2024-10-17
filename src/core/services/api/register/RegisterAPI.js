import { ErrorMessage } from 'formik';
import { getItem } from '../../common/storage';
import http from '../../interceptor';

export const RegisterAPI = async (registerObj) => {
  try {
    const phone = JSON.parse(getItem('phoneNumber'));

    const result = await http.post('/Sign/Register', { phoneNumber: phone, password: registerObj.password, gmail: registerObj.gmail } );

    return result

  } catch (error) {
    console.log(error.message);
  }
};