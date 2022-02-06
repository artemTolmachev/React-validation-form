import './OrderForm.scss';
import React, {useEffect, useState} from 'react';
import  {FormError}  from './FormErr';

    function OrderForm(props) { //получаем инфу из заказа для отправки
    const[value, setValue] = useState({
        Имя: '',
        Email: '',
        Телефон: '',
        Адрес: '',
        Сообщение: '',
        fieldErrors: {Имя : '', 
                    Email: '',
                    Телефон: ''
                 },
        emailValid: false,
        nameValid: false,
        phoneValid: false,
        formValid: false,
        productArr: false
    });

    const [valid, setValid] = useState([]);
    const [arr, setArro] = useState(false);
    
    
    function ValidateField(field, val){
        let validfieldErrors = value.fieldErrors;
        let emailValid = value.emailValid;
        let nameValid = value.nameValid;
        let phoneValid = value.phoneValid;
    
        switch(field) {
            case 'Email':
            emailValid = val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            validfieldErrors.Email = emailValid ? '' : 'не корректно введен';
            break;

            case 'Имя':
            nameValid = val.length >= 2;
            validfieldErrors.Имя = nameValid ? '' : 'слишком короткое';
            break;

            case 'Телефон':
            phoneValid = val.match(/^\+38[-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/);
            validfieldErrors.Телефон = phoneValid ? '': 'не корректно введен';
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

   function errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

 
      function HendlerRelaud(){
        window.location.reload();
      }

    return (
        <form action="" className='order-form'>
            <input type="hidden" name="Тема" value="Обратный звонок"/>
            <input type="hidden" name="admin_email[]" value="lidama65@mail.ua"/>
            <input type="hidden" name="form_subject" value="Заявка с сайта Сайт"/>
            <div className="panel panel-default">
                <FormError formErrors={value.fieldErrors} />
            </div>
            <div className='form-group'>
                <label className='label-control' htmlFor="name">Ваше имя *</label>
                <div className="elements-wr">
                    <input type="text"
                             name='Имя'
                             value={value.Имя}
                             onChange={handleChange} 
                             placeholder='Ваше имя'
                             className={`form-control ${errorClass(value.fieldErrors.Имя)}`}/>
                </div>
            </div>

            <div className='form-group'>
                <label className='label-control' htmlFor="email">Email *</label>
                <div className="elements-wr">
                    <input type="email"
                          name='Email' 
                          value={value.Email}
                          onChange={handleChange} 
                          placeholder='Email'
                          className={`form-control  ${errorClass(value.fieldErrors.Email)}`}/>                    
                </div>
            </div>

            <div className='form-group'>
                <label className='label-control' htmlFor="phone">Телефон *</label>
                <div className="elements-wr">
                    <input type='tel' 
                        name='Телефон'
                        value={value.Телефон}
                        className={`form-control ${errorClass(value.fieldErrors.Телефон)}`}
                        placeholder='+389999999999'
                        onChange={handleChange} />                 
                </div>
            </div>

            <div className='form-group'>
                <label className='label-control'>Адрес доставки</label>
                <div className="elements-wr">
                    <textarea 
                            name='Адрес' 
                            onChange={handleChange}
                            placeholder='Ваш город, номер отделения "Новой почты"' 
                            className='form-control'/>                    
                </div>
            </div>
            <div className='form-group'>
                <label className='label-control'>Cообщение</label>
                <div className="elements-wr">
                    <textarea
                            name='Сообщение'
                            placeholder='сообщение'

                            className='form-control'/>    
                </div>
            </div>

            <input type="text" name="test"
            onChange={handleChange}
            
            />
            <button onClick={HendlerRelaud} className="btn-reset btn-primery order-btn" >ОТПРАВИТЬ ЗАКАЗ</button>
        </form>
    );
}


export default OrderForm;