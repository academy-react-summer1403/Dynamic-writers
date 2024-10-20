import React from 'react'
import http from '../../interceptor'
const UpdateLocationInProf =async (profile,linkdinLink,telegramLink) => {
  try{
    const formData = new FormData();
    formData.append('LName',profile.lName);
    formData.append('FName',profile.fName);
    formData.append('UserAbout', profile.userAbout);
    formData.append('LinkdinProfile', linkdinLink);
    formData.append('TelegramLink', telegramLink);
    formData.append('ReceiveMessageEvent', profile.receiveMessageEvent);
    formData.append('HomeAdderess',profile.homeAdderess);
    formData.append('NationalCode', profile.nationalCode);
    formData.append('Gender',profile.gender);
    formData.append('BirthDay', profile.birthDay);
    formData.append('Latitude', profile.latitude);
    formData.append('Longitude', profile.longitude);

    let response=await http.put('/SharePanel/UpdateProfileInfo',formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }})

    return response

  }catch(error){
    
    return error
  }
}

export default UpdateLocationInProf