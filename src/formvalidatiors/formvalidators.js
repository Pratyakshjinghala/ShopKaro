
export default function formvalidators(e) {
 
    let {name , value} = e.target
    switch(name){
        case "name":
            if(!value || value.length===0)
                return name + " Field is Mendatory "
            else if (value.length<3 || value.length > 50)
                return name + "Field lenght must be 3-50 character"
            else
                return ""

                default:
                    return ""

    }
}
