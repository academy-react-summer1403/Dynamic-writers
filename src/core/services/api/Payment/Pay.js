import http from '../../interceptor'
const Pay = async(CourseId,Paid,PeymentDate,PaymentInvoiceNumber) => {
    try{

        const formData=new FormData();
        formData.append('CourseId',CourseId);
        formData.append('Paid',Paid);
        formData.append('PeymentDate',PeymentDate);
        formData.append('PaymentInvoiceNumber',PaymentInvoiceNumber);
        const response=await http.post('/CoursePayment/StudentAddPeyment',formData)
        return response
    }catch(er){
        console.log(er)
    }
}
export default Pay