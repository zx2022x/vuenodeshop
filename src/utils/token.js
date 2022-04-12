//存储token
export const setToken=(token)=>{
    
     token=`Bearer ${token}`
     console.log('setToken:'+token)
    localStorage.setItem('TOKEN',token)
    

}
//得到token
export const getToken=()=>{
    
   return  localStorage.getItem('TOKEN')

}
//清零token
export const clearToken=()=>{
    
    localStorage.removeItem('TOKEN')

}

