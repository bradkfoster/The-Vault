'use strict';
module.exports = function(key,value) {
	let vault = {};

   
  let setValue = (key,value)=>{
			return vault[key] = value;
  }

	let getValue = (key) => {
		if(vault.hasOwnProperty(key)){
			return vault[key];
		}else{
			return null;
		}
	}


  return {
		setValue:setValue,
		getValue:getValue
        

    }


};