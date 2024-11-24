import http from '../../interceptor'
import UploadImagePayment from './UploadImagePayment';
const Pay = async(CourseId,Paid,PeymentDate,PaymentInvoiceNumber,image) => {
    try{

        const formData=new FormData();
        formData.append('CourseId',CourseId);
        formData.append('Paid',Paid);
        formData.append('PeymentDate',PeymentDate);
        formData.append('PaymentInvoiceNumber',PaymentInvoiceNumber);
        let response=await http.post('/CoursePayment/StudentAddPeyment',formData)
        response=await UploadImagePayment(response.id,image)
        return response
    }catch(er){
        console.log(er)
    }
}
export default Pay