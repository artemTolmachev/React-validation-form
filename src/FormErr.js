import React from 'react';

export const FormError = ({formErrors}) =>
  <div className='formErrors'>
     <div className={`login ${formErrors.Name || formErrors.Email || formErrors.Phone ? 'login-none' : ''}`}>Login</div>
      {Object.keys(formErrors).map((fieldName, i) => {
        if(formErrors[fieldName].length > 0){
          return (
            <div className='div-error' key={i}>{fieldName} {formErrors[fieldName]}</div>
          )        
        } else {
          return '';
        }
      })}
    
  </div>