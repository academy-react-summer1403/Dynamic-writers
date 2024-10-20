import React from 'react'
import http from '../../interceptor'

const UpdateInformation =async (profile,lName,fName,userAbout,homeAdderess,nationalCode,gender,birthDay) => {
    try{
        const formData = new FormData();
        formData.append('LName',lName);
        formData.append('FName',fName);
        formData.append('UserAbout', userAbout);
        formData.append('LinkdinProfile', profile.linkdinProfile);
        formData.append('TelegramLink', profile.telegramLink);
        formData.append('ReceiveMessageEvent', profile.receiveMessageEvent);
        formData.append('HomeAdderess',homeAdderess);
        formData.append('NationalCode', nationalCode);
        formData.append('Gender',gender);
        formData.append('BirthDay', birthDay);
        formData.append('Latitude', profile.latitude);
        formData.append('Longitude', profile.longitude);
    
        let response=await http.put('/SharePanel/UpdateProfileInfo',formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }})
    
        return response
    
      }catch(error){
        if(error.response){
          if(error.response.status==422){
            return {"message":"تاریخ تولد نامعتبر می باشد"}
          }
        }
      }
}

export default UpdateInformation