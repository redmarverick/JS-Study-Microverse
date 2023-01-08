function destroyer(arr) {
  let arrCorr=[], list=[], lNum=[], contem=false;
  lNum=arguments[0]
  //console.log(lNum);
  for (let i=1;i<arguments.length;i++)
  {
    list.push(arguments[i]);
  }
   //console.log(list);
  for(let i=0;i<lNum.length;i++)
  {
    contem=false;
    for(let j=0;j<list.length;j++)
      {
        if(lNum[i]==list[j])
        {
          break;
          contem=true;
        }
        else if(contem==false&&j==list.length-1)
        {
          arrCorr.push(lNum[i]);
        }
      }
  }
  return arrCorr;

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));