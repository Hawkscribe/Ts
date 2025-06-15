export const random=function(len:number){
    let ans="";
    let opction="qwertyuiopasdfgh12345678";
    let length=opction.length;
    for (let index = 0; index < len; index++) {
ans+=opction[Math.floor((Math.random()*length))] ;       
    }

return ans;
}