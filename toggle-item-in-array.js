 /*
 
 toggle function adds or removes a value from an array
 it accepts three parameters:
 
   1) an array
   2) a value
   3) a funcion to validate the value (optional parameter)
 
 if the array actually includes the value then it removes the value from the array
 if not then it adds the value to the array
 
 ** example:
      let arr = [12]
      toggle(arr,'bad',(v)=>v!=='bad') // will not add because the value is not valid
      
 */
      const toggle = (array, value, validationFunction = (v) => v || true) => {
            
        let index = array.indexOf(value); // to get the index of the value if it's in array
        
        if(!validationFunction(value)){
            return;
        }
        
        if(array.includes(value)){ // if array includes the value
            array.splice(index,1); // remove value from array
            return;
        }
        
        array.push(value); // else, add value to array
        
    }

    if(typeof exports != 'undefined'){
        exports.toggle = toggle
    }