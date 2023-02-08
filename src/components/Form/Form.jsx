import React from 'react'

const Form = () => {
  return (
    <section className='Form'>
        <div className="container">
            <h2>Want To Get In Touch?</h2>
            <form action="form">
                <div className="form-group-1">
                    <input type="Name" placeholder='Name'/>
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="form-group-2">
                    <input type="tel" placeholder='Phone Number'/>
                    <textarea name="Message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                </div>
                <div className="spacing">
                    <button>Submit Now</button>
                </div>
            </form>
        </div>
        
    </section>
  )
}

export default Form;
