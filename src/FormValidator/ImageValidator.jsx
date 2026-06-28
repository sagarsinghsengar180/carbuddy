// import React from 'react'

export default function ImageValidator(e) {
    if (e.target.files.length === 1) {
        let pic = e.target.files[0]
        if (!["image/jpg","image/jpeg","image/png","image/gif"].includes(pic.type))
            return "pic is not valid"
        else if (pic.size > 1048576)
            return "pic is too heavy"
        else
            return ""

    }
    else {
        return ""
    }
}