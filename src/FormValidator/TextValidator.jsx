// import React from 'react'

export default function TextValidator(e){
    let{name, value}=e.target
    switch(name){
        case'name':
        if(!value || value.length ===0)
            return name+ " field is mendatory"
        else if(value.length<2 || value.length>100 )
            return name+ "write the category btw 2 to 100 word"
        else
            return""
        default:
        return""
    }

}

