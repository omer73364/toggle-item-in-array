# toggle-item-in-array
A JavaScript function to toggle a value in an array with an optional validation function

# toggle function adds or removes a value from an array
## it accepts three parameters:
 
   1) an array
   2) a value
   3) a funcion to validate the value (optional parameter)
 
 if the array actually includes the value then it removes the value from the array
 if not then it adds the value to the array
 
## ** usage:
  ### NPM:
      download this library:
        npm i toggle-item-in-array --save
        
      then import it:
        import { toggle } from 'toggle-item-in-array';
        
        then you can use it as a function by "toggle" name
        
## ** example:
      let arr = [12]
      toggle(arr,'bad',(v)=>v!=='bad') // will not add because the value is not valid
      
