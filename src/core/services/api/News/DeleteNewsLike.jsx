import http from '../interceptor'

const DeleteNewsLike = async(id) => {
    try{
        await http.delete('/News/DeleteLikeNews');

    }catch(er){
        console.log(er)
    }
}
export default DeleteNewsLike