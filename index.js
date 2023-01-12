function convertHTML(str) {
  let chars="&<>\"\'",str2="";
  for(let i=0;i<str.length;i++)
  {
    if(chars.includes(str[i])==true)
    {
      switch(str[i]){
        case "&":str2+="&amp;"
          break;
        case "<":
          str2+="&lt;"
          break;
        case ">":
          str2+="&gt;"
          break;
        case "\'":
          str2+="&apos;"
          break;
        case "\"":
          str2+="&quot;"
          break;
        default:
          break
      }
    }
    else
    {
      str2+=str[i];
    }
  }
  return str2;
}

convertHTML("Dolce & Gabbana");