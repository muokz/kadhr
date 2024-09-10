import Sidebar from './sidebar';
import axios from 'axios';
import { useState,useEffect,useContext } from 'react';
function CustomerAddAddress(){    
    const baseUrl = 'http://127.0.0.1:8000/api';
    var customer_id=localStorage.getItem('customer_id');
    const [ErrorMsg,setErrorMsg]=useState('');
    const [SuccessMsg,setSuccessMsg]=useState('');
    const [AddressFormData,setAddressFormData]=useState({  
        "address":'', 
        "customer":customer_id
    });

    const inputHandler =(event) => {
        setAddressFormData({
            ...AddressFormData,
            [event.target.name]:event.target.value
        });
    };

    const submitHandler =() => {
        const formData=new FormData();
            formData.append('address',AddressFormData.address);
            formData.append('customer',AddressFormData.customer);

            //SUBMIT DATA
            axios.post(baseUrl+'/address/',formData)
            .then(function (response){
                if(response.status != 201){
                    setSuccessMsg('');
                    setErrorMsg('Data not saved');
                }else{
                    setErrorMsg('');
                    setSuccessMsg('Data saved');
                    setAddressFormData({
                        'address':''
                    });
                }
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            });
    };

    const buttonEnable=(AddressFormData.address!='')


    return (
        <section className="container mtopcon">
            <div className="row">
                <div className="col-12 col-lg-3 mb-3">
                    <Sidebar/>
                </div>
                <div className="col-12 col-lg-9">
                    
                    <div className="card shadow-sm border border-secondary border-opacity-10">
                        <div className="card-header"><h5>Add Address</h5></div>
                        <div className="card-body"> 
                            {ErrorMsg && <p className='alert alert-danger'>{ErrorMsg}</p>}
                            {SuccessMsg && <p className='alert alert-success'>{SuccessMsg}</p>}       
                            <div className="mb-3">
                                <label for="InputEmail" className="form-label">Address</label>
                                <textarea className="form-control" name='address' onChange={inputHandler} value={AddressFormData.address}></textarea>
                            </div>
                            <button disabled={!buttonEnable} type="button" onClick={submitHandler} className="col-12 btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerAddAddress;