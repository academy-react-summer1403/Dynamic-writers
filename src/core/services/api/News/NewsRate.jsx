import http from '../../interceptor'
import GetNewsById from './GetNewsById';
const NewsRate = async(id,rate) => {
    try{
        let response=await http.post('/News/NewsRate',null,{params:{NewsId:id,RateNumber:rate}});
        return response

    }catch(er){
        console.log(er)
    }
}
export default NewsRate