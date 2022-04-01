import React from 'react';

function input(type, name, value, options=[], required = false){
    if (( type == "multiple") && options) {
        return(
            <fieldset>
                   {options.map(option => {
                       if (value=="Other" && option=="Other") {
                           return <div>
                            <input type="checkbox" name={name} id={option}></input>
                            <label for={option}>{option}</label>
                            <input type="text"></input>
                            <br/>
                            </div>
                       }
                       else{
                        return <div>
                            <input type="checkbox" name={name} id={option}></input>
                            <label for={option}>{option}</label><br/>
                            </div>
                       }
                   })}
          </fieldset>
          )
        } else if ((type == "select" && options)) {
        return(
            <div>
                <label>
                {name} 
                <select required={required} name={name} >
                   {options.map(option => <option>{option}</option>)}

                </select>
    
            </label>
          </div>
          )
    } else {
        return(
            <div>
            <label>
                {name} 
            <input required={required} type={type}  name={name} />
            </label>
            </div>
        )

    }
}




    

export default input;