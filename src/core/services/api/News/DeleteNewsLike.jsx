import http from '../../interceptor'
import GetNewsById from './GetNewsById';
const DeleteNewsLike = async(id) => {
    try{
        let News=await GetNewsById(id);
        let response=await http.delete('/News/DeleteLikeNews',{
            data: {
                deleteEntityId:  News.detailsNewsDto.likeId
            }})
        return response

    }catch(er){
        console.log(er)
    }
}
export default DeleteNewsLike