import http from '../../interceptor'

const UserDetailsWithId =async (id) => {
    try{

        const response = await http.get('/User/UserDetails/'+id);
        return response

    }catch(er){
        console.log(er)
    }

}

export default UserDetailsWithId