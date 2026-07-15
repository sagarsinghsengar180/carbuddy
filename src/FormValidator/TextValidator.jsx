// import React from 'react'

export default function TextValidator(e){
    let{name, value}=e.target
    switch(name){
        case'name':
        case'icon':
        if(!value || value.length ===0)
            return name+ " field is mendatory"
        else if(value.length<2 || value.length>100 )
            return name+ "write the category btw 2 to 100 word"
        else
            return""
    
     case 'shortDescription':
        case 'answer':
            if (!value || value.length === 0)
                return name + " Field Is Mendatory"
            else if (value.length < 50)
                return name + " Field Length Must Be 50 Characters or More"
            else
                return ""

        case 'question':
            if (!value || value.length === 0)
                return name + " Field Is Mendatory"
            else if (value.length < 20)
                return name + " Field Length Must Be 20 Characters or More"
            else
                return ""

        default:
            return ""
    }

}

