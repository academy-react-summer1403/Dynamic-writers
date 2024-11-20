import http from '../../interceptor'
const GetAllPayment = async() => {
    try{

        let response=await http.get('/CoursePayment/StudentUserPayList');
        return response

    }catch(er){
        console.log(er)
    }
}
export default GetAllPayment