import React from 'react'

import { useState } from 'react'
import { addUser} from '../api/api.js'
function Contact() {


	const defaultValue = {
		fullname:'',
		email:'',
		subject:'',
		message:''
	  }

	const [user , setUser] = useState({defaultValue});


	const onValueChange = (e) => {
		setUser({...user,[e.target.name]:e.target.value})
		console.log(user);  
	  }
	  const   addUserDetails =async() => {
		await addUser(user);  
	   //  navigate('/organizers');
	 
	   }
  return (
    <div class="contact1" id='contact' data-aos="fade-up">
		<div class="container-contact1">
			<div class="contact1-pic js-tilt" data-tilt>
            <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_TNi3iOF9S4.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
			</div>

			<form class="contact1-form validate-form">
				<span class="contact1-form-title">
					Get in touch
				</span>

				<div class="wrap-input1 validate-input" data-validate = "Name is required">
					<input class="input1" type="text" id="name" placeholder="Name" onChange={(e)=>onValueChange(e)} name='full name'/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input class="input1" type="email" id='email' placeholder="Email" onChange={(e)=>onValueChange(e)} name='email'/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Subject is required">
					<input class="input1" type="text" id="subject" placeholder="Subject" onChange={(e)=>onValueChange(e)} name='subject'/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea class="input1" id="message" placeholder="Message" onChange={(e)=>onValueChange(e)} name='message'></textarea>
					<span class="shadow-input1"></span>
				</div>

				<div class="container-contact1-form-btn">
					<button class="contact1-form-btn" type="submit" onClick={()=>addUserDetails()}>
						<span>
							Send Email
							<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>
  )
}

export default Contact