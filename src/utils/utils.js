const getUser=()=>{
    const user = sessionStorage.getItem('user');
    return user
}
export default getUser;