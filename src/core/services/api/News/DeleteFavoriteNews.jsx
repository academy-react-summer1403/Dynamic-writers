import http from '../../interceptor'
import GetNewsById from './GetNewsById';
const DeleteFavoriteNews = async(id) => {
    try{
        let News=await GetNewsById(id);
        let response=await http.delete('/News/DeleteFavoriteNews',{
            data: {
                deleteEntityId: News.detailsNewsDto.currentUserFavoriteId
            }})
        console.log(response)
        return response

    }catch(er){
        console.log(er)
    }
}
export default DeleteFavoriteNews