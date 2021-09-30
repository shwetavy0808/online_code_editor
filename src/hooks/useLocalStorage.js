//to save whatever we chnage after refresh
//If we type something it will get disaaprear if we refresh to overcome this 
// we wanted to be saved 
//we re making custome hooks to overcome this

import { useEffect, useState } from "react";

//prefix the key with prefix value
const  PREFIX = 'codeopen-clone'

//intialValue is ''  empty value set in useState in app.js
export default function useLocalStorage(key, initialValue){
    const prefixedKey = PREFIX + key;

    const [value, setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(prefixedKey)
         
        if(jsonValue != null) return JSON.parse(jsonValue)

        if(typeof initialValue === 'function'){
            return initialValue()
        }else {
            return initialValue
        
        }
    })

    //?
    useEffect(()=>{
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    },[prefixedKey, value] )


    return [value, setValue]
}