import './OrderForm.scss';
import React, {useEffect, useState} from 'react';
import  {FormError}  from './FormErr';

    function OrderForm(props) { //получаем инфу из заказа для отправки
    const[value, setValue] = useState({
        Name: '',
        Email: '',
        Phone: '',
        fieldErrors: {Name : '', 
                    Email: '',
                    Phone: ''
                 },
        emailValid: false,
        nameValid: false,
        phoneValid: false,
        formValid: false,
        productArr: false
    });

    const [valid, setValid] = useState([]);
    // const [arr, setArro] = useState(false);
    const [span1, setSpan1] = useState('');
    const [span2, setSpan2] = useState('');
    const [span3, setSpan3] = useState('');

    function ValidateField(field, val){
        let validfieldErrors = value.fieldErrors;
        let emailValid = value.emailValid;
        let nameValid = value.nameValid;
        let phoneValid = value.phoneValid;
        switch(field) {
            case 'Email':
            emailValid = val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            validfieldErrors.Email = emailValid ? '' : 'address is incorrect';
            break;

            case 'Name':
            nameValid = val.length >= 2;
            validfieldErrors.Name= nameValid ? '' : 'to short';
            break;

            case 'Phone':
            phoneValid = val.match(/^\+38[-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/);
            validfieldErrors.Phone = phoneValid ? '': 'number is incorrect';
            break;
            default:
            break;
        }

        setValue(prev => {
            
            return{
                ...prev,
                fieldErrors: validfieldErrors,
                emailValid: emailValid,
                nameValid: nameValid,
                phoneValid: phoneValid,
                formValid: phoneValid && nameValid && emailValid
            }
        })
    }

    function handleChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;


   
    setValue(prev => {
        
        return{
        ...prev,
        [name]:value
        
        }

    });
        setValid([name,value])
    }

    useEffect(() => {
        ValidateField(valid[0],valid[1]);
    },[valid]);// eslint-disable-line react-hooks/exhaustive-deps
       
      function HendlerRelaud(){
        window.location.reload();
      }
   
    return (
        <form action="" className='order-form'>
            <input type="hidden" name="Тема" value="Обратный звонок"/>
            <input type="hidden" name="admin_email[]" value="lidama65@mail.ua"/>
            <input type="hidden" name="form_subject" value="Заявка с сайта Сайт"/>
            <div className="panel panel-default">
                <FormError formErrors={value.fieldErrors} formValid={value.formValid}/>
            </div>
            <div className='form-group'>
                {/* <label className='label-control' htmlFor="name">Ваше имя *</label> */}
                <div className={`elements-wr`}>
                <span className={`fake__placeholder ${span1}`}>Full name</span>
                    <input type="text"
                             name='Name'
                             value={value.Name}
                             onChange={handleChange}
                             onFocus={(event) => event.type === 'focus' ?  setSpan1('active') : false}
                            //  placeholder='Ваше имя'
                             className={`form-control`}/>
                </div>
            </div>

            <div className='form-group'>
                {/* <label className='label-control' htmlFor="email">Email *</label> */}
                <div className={`elements-wr`}>
                <span className={`fake__placeholder ${span2}`}>E-mail address</span>
                    <input type="email"
                          name='Email' 
                          value={value.Email}
                          onChange={handleChange}
                          onFocus={(event) => event.type === 'focus' ?  setSpan2('active') : false}
                        //   placeholder='Email'
                          className={`form-control`}/>                    
                </div>
            </div>

            <div className='form-group'>
                {/* <label className='label-control' htmlFor="phone">Телефон *</label> */}
                <div className={`elements-wr`}>
                <span className={`fake__placeholder ${span3}`}>Phone +389999999999</span>
                    <input type='tel' 
                        name='Phone'
                        value={value.Phone}
                        className={`form-control`}
                        onFocus={(event) => event.type === 'focus' ? setSpan3('active') : false}
                        onChange={handleChange} />                 
                </div>
            </div>
            <div className="btn-wr">
                <button onClick={HendlerRelaud} disabled={!value.formValid} className="btn-reset btn-primery order-btn">Login</button>
            </div>
        </form>
    );
}


export default OrderForm;