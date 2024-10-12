import React from 'react'
import http from '../../interceptor'

const UserDetailsWithId =async (id) => {
    try{

        let response=await http.get('/User/UserDetails/'+id);
        console.log(response)
        return response

    }catch(er){
        console.log(er)
    }

}

export default UserDetailsWithId