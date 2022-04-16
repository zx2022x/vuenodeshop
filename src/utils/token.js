//存储token
export const setToken=(token)=>{
    
     token=`Bearer ${token}`
    //  console.log('setToken:'+token)
    localStorage.setItem('TOKEN',token)
    

}
//得到token
export const getToken=()=>{
    // console.log('拿到token了')
   return  localStorage.getItem('TOKEN')

}
//清零token
export const clearToken=()=>{
    
    localStorage.removeItem('TOKEN')

}
//存储ID
export const setID=(id)=>{
    localStorage.setItem('ID',id)
}
export const getID=()=>
    localStorage.getItem('ID')


