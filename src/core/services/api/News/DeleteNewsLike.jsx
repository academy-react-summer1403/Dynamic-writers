import http from '../../interceptor'
import GetNewsById from './GetNewsById';
const DeleteNewsLike = async(id) => {
    try{
        let response=await http.delete('/News/DeleteLikeNews',{
            data: {
                deleteEntityId: id
            }})
        return response

    }catch(er){
        console.log(er)
    }
}
export default DeleteNewsLike