import React, {useState} from 'react';

const Form = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [boxDisplay, setBoxDisplay] = useState('none');
    const [message, setMessage] = useState('');

    const check_email = (emailValue) => {
        let at = emailValue.indexOf('@');
        if (at < 1) return false;
        let dot = emailValue.lastIndexOf('.');
        if (dot <= at + 2) return false;
        if (dot === emailValue.length - 1) return false;
        return true;
    }

    const check_consent = (checkboxValue) => {return checkboxValue};

    function handleSubmit(e) {
        e.preventDefault();
        validate();
    }

    function validate() {
        let errors = '';
        if (fname.trim() === '') {errors += 'Please enter your first name, ';}
        if (lname.trim() === '') {errors += 'Please enter your last name, ';}
        if (email.trim() === '') {errors += 'Please enter your email address, ';} 
        else if (!check_email(email)) {errors += 'Please enter a valid email address, ';}
        if (subject.trim() === '') {errors += 'Please enter a subject, ';}
        if (!check_consent(checkbox)) {errors += 'Please review our privacy policy and check the box,';}
        if (errors === '') {setMessage('Message successfully sent!'); setBoxDisplay('block');
        }else{
        setMessage(errors);
        setBoxDisplay('block');
        }
    }
  return (
                <form>
                       <div style={{ display: boxDisplay, background: 'linear-gradient(to right, rgba(190, 110, 182, 0.5), rgba(31, 31, 101, 0.5))', padding: '50px', marginBottom: "10px" }}>
                                {message}
                        </div>
                        <label htmlFor ="fname">*First Name</label>
                            <input type = "text" id = "fname" name = "fname" placeholder= "John" maxlength="50" value={fname} onChange={(e) => setFname(e.target.value)} />

                        <label htmlFor ="lname">*Last Name</label>
                            <input type = "text"  id = "lname" name = "lname" placeholder="Doe" maxlength="50" value={lname} onChange={(e) => setLname(e.target.value)} />

                        <label htmlFor ="email">*Email</label>
                            <input type = "text"  id = "email" name = "email" placeholder="Example@email.com" maxlength="200" value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <label htmlFor ="subject">*Subject</label>
                            <input type = "text" id = "subject" name = "subject" placeholder="Subject" maxlength="100" onChange={(e) => setSubject(e.target.value)}/>

                        <label htmlFor ="message">Message</label>
                            <textarea  type = "text" id = "message" name ="message" placeholder="Your message" maxlength="500"/>

                        <label htmlFor ="consent">**I consent to having this website my submitted information so they can respond to my inquiry.<br /> 
                            <a href = "private.html">Privacy Policy</a></label>
                            <input type="checkbox" value = "checkboxValue" id="check_consent" />

                        <input type = "button"  id = "submit" value = "Submit" onClick={handleSubmit} />
                    </form>
  )
}

export default Form