//存储token
export const setToken=(token)=>{
     token=`Bearer ${token}`
     console.log('setToken:'+token)
    localStorage.setItem('TOKEN',token)
    

}
//得到token
export const getToken=()=>{
    console.log('更新token')
   return  localStorage.getItem('TOKEN')

}

