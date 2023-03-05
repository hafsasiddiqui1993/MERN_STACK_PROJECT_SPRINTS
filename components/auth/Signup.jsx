import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useState } from 'react';

function Signup() {

  const [ form, setForm ] = useState({})
  const [ errors, setErrors ] = useState({})


  const [member, setmember] = useState({
   
  m_fullname:"", m_add:"", m_ph:"",m_email:"",m_pass:""
  

  });




  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })

    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }


  const findFormErrors = () => {
    const { name, add, ph, email, pass } = form
    const newErrors = {}
    // name errors
    if ( !name || name === '' ) newErrors.name = 'Enter your Name!'
    else if ( name.length > 30 ) newErrors.name = 'Name is too long!'



    if ( !add || add === '' ) newErrors.add = 'Enter your Address!'




    // rating errors
    if ( !ph || ph === '' || ph.length === 11) newErrors.ph = 'Valid Phone Number is required!'

    // comment errors
    if ( !email || email === '' || email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) newErrors.email = 'Enter your valid Email'
    if ( !pass || pass === '' || pass.match(/^[a-zA-Z]{8,22}$/)) newErrors.pass = 'Only Letters and length must best Max 8 Chracters'

    return newErrors
}

// let activity, value; 
// let exe_ac_desc, value;
// let exe_ac_type, value;
// let exe_ac_dur, value;

// const HandleInputChange = (e) => {
//   const {id, value} = e.target;
//   if(id === "exe_ac_name"){
//     setexe_ac_name(value);
//   }
//   if(id === "exe_ac_name"){
//     setexe_ac_name(value);
//   }
//   if(id === "exe_ac_name"){
//     setexe_ac_name(value);
//   }
//   if(id === "exe_ac_name"){
//     setexe_ac_name(value);
//   }

// }

const HandleInputChange = async(e) => {

  
console.log(e.target.name)

let value = e.target.value;



setmember({...member, [e.target.name]:value});
}

const MemberData = async (e) => {
  


  e.preventDefault();

  const newErrors = findFormErrors()
  // Conditional logic:
  if ( Object.keys(newErrors).length > 0 ) {
    // We got errors!
    setErrors(newErrors)
  } else {
    // No errors! Put any logic here for the form submission!
    alert('You have been Registered!')
  }


const {m_fullname,m_add,m_ph,m_email,m_pass} = member;
console.log(member)
const res = await fetch("http://localhost:8000/Signup",{
method: "POST",

headers:{
  "Content-Type": "application/json"
},
body: JSON.stringify({
  m_fullname,m_add,m_ph,m_email,m_pass
})
});



}

  return (

    <> 
    <Form className='actvty-frm' onChange={(e) => HandleInputChange(e)}>
        
    <Form.Group className="mb-3">
          <Form.Label>Enter Full Name</Form.Label>
          <Form.Control required   
          id="m_fullname"
          name="m_fullname"
          type="text" placeholder="Enter Full Name"
          onChange={ e => setField('name', e.target.value) }
        isInvalid={ !!errors.name }
  
          />
      
      <Form.Control.Feedback type='invalid'>
        { errors.name }
    </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Enter Address</Form.Label>
          <Form.Control required
          id="m_add"
          name="m_add"
          type="text" placeholder="Enter Address"
          onChange={ e => setField('add', e.target.value) }
          isInvalid={ !!errors.add }
          />

               
      <Form.Control.Feedback type='invalid'>
        { errors.add }
    </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Enter Phone</Form.Label>
          <Form.Control required 
          id="m_ph"
          name="m_ph"
          type="text" placeholder="Enter Phone" 
          onChange={ e => setField('ph', e.target.value) }
          isInvalid={ !!errors.ph }
          />
               
               <Form.Control.Feedback type='invalid'>
        { errors.ph }
    </Form.Control.Feedback>
  
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control required 
          id="m_email"
          name="m_email"
          type="email" placeholder="Enter Email" 
          onChange={ e => setField('email', e.target.value) }
          isInvalid={ !!errors.email }
  
          />
  
  <Form.Control.Feedback type='invalid'>
        { errors.email }
    </Form.Control.Feedback>
  
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control  
          id="m_pass"
          name="m_pass"
          type="password" required  placeholder="Enter Password" 
          onChange={ e => setField('pass', e.target.value) }
          isInvalid={ !!errors.pass }
          />
         <Form.Control.Feedback type='invalid'>
        { errors.pass }
    </Form.Control.Feedback>
  
        </Form.Group>
  
      <Button className='actvty-btn'  onClick={MemberData} value="Signup" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default Signup;