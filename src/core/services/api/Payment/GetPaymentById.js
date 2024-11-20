import http from '../../interceptor'
const GetPaymentById = async(id) => {
    try{

        let response=await http.get('/CoursePayment/StudentUserPayList?CourseId='+id);
        return response

    }catch(er){
        console.log(er)
    }
}
export default GetPaymentById