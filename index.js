function sumAll(arr) {
  let x=arr[0], y=arr[1],soma=0;
  if(x<y)
  {
    for(let i=x;i<y+1;i++)
    {
      soma+=i;
    }
  }
  else
  {
    for(let i=y;i<x+1;i++)
    {
      soma+=i;
    }
  }
  return soma;
}

console.log(sumAll([1, 4]));