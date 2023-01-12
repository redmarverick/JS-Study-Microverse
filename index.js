
function staircase(n) {
  let m=1, o=n-1;
  let str="";
  for(let k = 0;k<n;k++)
  {
    for(let i = o;i>0;i--)
      {
        str+=" ";
        
      }
    for(let j=0;j<m;j++)
      {
        str+="#";
      }
    o--;
    m++;
    console.log(str);
    str="";
  }
}
staircase(10);
