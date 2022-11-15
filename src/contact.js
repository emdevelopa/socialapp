import React from 'react'
function Contact() {
    return (
            <div className='mainappcontainer contact-container'>
            <form>
                    <h2>CONTACT ME</h2>
                    <input type='text' placeholder='First Name'/>
                    <input type='text' placeholder='Last Name'/>
                    <input type='text' placeholder='Email'/>
                    <textarea placeholder='Measssge'></textarea>
                    <input type='submit' />
                </form>
            </div>
    )
} 
export default Contact