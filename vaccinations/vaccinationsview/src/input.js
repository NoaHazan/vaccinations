import React from 'react';

function input(type, name, value, options=[], required = false, id = "", funcOnChange){
    if (( type == "multiple") && options) {
        return(
            <fieldset>
                   {options.map(option => {
                       if (value=="Other" && option=="Other") {
                           return <div>
                            <input type="checkbox" name={name} id={option} onChange={funcOnChange}></input>
                            <label htmlFor={option}>{option}</label>
                            <input type="text" onChange={funcOnChange}></input>
                            <br/>
                            </div>
                       }
                       else{
                        return <div>
                            <input type="checkbox" name={name} id={option} onChange={funcOnChange}></input>
                            <label htmlFor={option}>{option}</label><br/>
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
                <select required={required} name={name} onChange={funcOnChange}>
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
            <input required={required} type={type}  name={name} onChange={funcOnChange}/>
            </label>
            </div>
        )

    }
}




    

export default input;