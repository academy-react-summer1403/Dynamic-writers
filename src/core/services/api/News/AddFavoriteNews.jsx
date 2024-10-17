import http from '../../interceptor'
import GetNewsById from './GetNewsById';
const AddFavoriteNews = async(id) => {
    try{

        let response=await http.post('/News/AddFavoriteNews',null,{params:{NewsId:id}});
        console.log(response)
        return response

    }catch(er){
        console.log(er)
    }
}
export default AddFavoriteNews