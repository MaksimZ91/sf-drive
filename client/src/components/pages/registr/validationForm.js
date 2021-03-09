export const validation =(value)=>{
     for (const key in value) {
       switch (value[key]){
        case "": 
        return true
          break;
        }        
      }return false
    }
  
/*case 'isEmail':
          const validEmail= /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
          validEmail.test(String(value))?setEmailError(false):setEmailError(true)
          break;*/


