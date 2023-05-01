import React,{useState} from 'react';
import '../ContactMe/ContactMe.css';

export const ContactMe = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    })

    const InputEvent = (event) => {
        const { name, value } = event.target

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (event) => {
        event.preventDefault()
        alert(
            `My name is ${data.fullname}. 
        My phone number is ${data.phone}. 
        My email address is ${data.email}. 
        My Subject on  ${data.subject}. 
        Here is my message I want to say : ${data.message}. 
        `
        )
    }

    return (
        <>
            <section className='Contact' id='ContactMe'>
                <div className='container-fluid row'>
                    <div className='col-md-12 text-center header'>
                        <h4>CONTACT</h4>
                        <h1>Contact With Me</h1>
                    </div>

                    <div className='row'>
                        <div className='col-md-4 offset'>
                            <div className='box box_shodow'>
                                <div className='img'>
                                    {/* <img src={contact1} alt='' /> */}
                                </div>
                                <div className='details'>
                                    <h1>Amlan Bhowmick</h1>
                                    <p>Associate Consultant at KPMG</p>
                                    <p>Phone: +91 8017323753</p>
                                    <p>Email: amlanbhowmick111@gmail.com</p> <br />
                                    <span>FIND WITH ME</span>
                                    <div className='button f_flex'>
                                        <button className='btn_shadow'>
                                            <i className='fab fa-facebook-f'></i>
                                        </button>
                                        <button className='btn_shadow'>
                                            <i className='fab fa-instagram'></i>
                                        </button>
                                        <button className='btn_shadow'>
                                            <i className='fab fa-twitter'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-8'>
                            <div className='box box_shodow'>
                            <form onSubmit={formSubmit}>
                                <div className='form'>
                                    <div className='form-group'>
                                        <span>YOUR NAME</span>
                                        <input type='text' className='form-control' name='fullname' value={data.fullname} onChange={InputEvent} />
                                    </div>
                                    <div className='form-group'>
                                        <span>PHONE NUMBER </span>
                                        <input type='number' className='form-control' name='phone' value={data.phone} onChange={InputEvent} />
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <span>EMAIL </span>
                                    <input type='email' className='form-control' name='email' value={data.email} onChange={InputEvent} />
                                </div>
                                <div className='form-group'>
                                    <span>SUBJECT </span>
                                    <input type='text' className='form-control' name='subject' value={data.subject} onChange={InputEvent} />
                                </div>
                                <div className='form-group'>
                                    <span>YOUR MESSAGE </span>
                                    <textarea cols='30' rows='10' className='form-control' name='message' value={data.message} onChange={InputEvent}></textarea>
                                </div>
                                <button className='btn_shadow'>
                                    SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                                </button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ContactMe
