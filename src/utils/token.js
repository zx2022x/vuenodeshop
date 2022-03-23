//存储token
export const setToken=(token)=>{
     
    localStorage.setItem('TOKEN',token)
    

}
//得到token
export const getToken=()=>{
    localStorage.getItem('TOKEN')
}
