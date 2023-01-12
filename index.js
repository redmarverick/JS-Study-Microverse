function translatePigLatin(str) {
  let str2=""
  for(let i=0;i<str.length;i++)
  {
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u")
    {
      if(i==0)
      {
        str2=str+"way";
        break;
      }
      else
      {
        str2=str.substring(i)
        for(let j=0;j<i;j++)
        {str2+=str[j];}
        str2+="ay";
        break;
      }
    }
    if(i==str.length-1 && str2=="")
    {
      str2=str+"ay";
    }
  }
  
  
  return str2;
}

translatePigLatin("consonant");