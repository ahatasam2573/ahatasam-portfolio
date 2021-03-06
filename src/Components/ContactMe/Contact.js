import React from 'react';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t41hhbf', 'template_lbbwzws', form.current, 'xpMnxF5gvd9rKbtnK')
            .then((result) => {
                toast.success("Thank You. I will response as soon as possible!!")
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div id="contact">
            <h1 className='headings'>Contact Me</h1>
            <div className="contact-form">
                <div className="w-left">
                    <div className="awesome">
                        <span>Knock Me!!</span>
                        <span>Thanks in Advance</span>
                        <div>
                            <div className="blur s-blur1" style={{ background: 'ABF1FF94' }}></div>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" className="user" placeholder="Name" required />
                        <input type="email" name="email" className="user" placeholder="Email" required />
                        <textarea name="message" className="user" rows='7' placeholder="Message" required />
                        <input className='btn primary-btn' type="submit" value="Submit" />
                        <div
                            className="blur c-blur1"
                            style={{ background: "var(--purple)" }}
                        ></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
