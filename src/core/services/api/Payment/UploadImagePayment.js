import http from '../../interceptor'
const UploadImagePayment = async(paymentId,Image) => {
    try{

        const formData=new FormData();
        formData.append('PaymentId',paymentId);
        formData.append('Image',Image);
        const response=await http.post('/CoursePayment/StudentAddPeymentImage',formData)
        return response
    }catch(er){
        console.log(er)
    }
}
export default UploadImagePayment