export const validation =(value)=>{
     for (const key in value) {
       switch (value[key]){
        case "": 
        return true
          break;
        }        
      }return false
    }
  



