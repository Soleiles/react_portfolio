import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/Contact.css";


import { validateEmail } from "../utils/helpers";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        setErrorMessage("");
        const { target } = e;
        const inputType = target.id;
        const inputValue = target.value;

        if (inputType === "formBasicText") {
            setName(inputValue);
        } else if (inputType === "formBasicEmail") {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleName = (e) => {
        e.preventDefault();
        setErrorMessage("");
        if (!name) {
            setErrorMessage("Name required");
            return;
        } else {
            if (!email) {
                setErrorMessage("Email required");
                return;
            } else if (!validateEmail(email)) {
                setErrorMessage("Email invalid");
                return;
            } else if (!message) {
                setErrorMessage("Message required");
                return;
            }
        }
    };

    const handleEmail = (e) => {
        e.preventDefault();
        setErrorMessage("");
        if (!email) {
            setErrorMessage("Email required");
            return;
        } else {
            if (!validateEmail(email)) {
                setErrorMessage("Email invalid");
                return;
            } else {
                if (!name) {
                    setErrorMessage("Name required");
                    return;
                } else if (!message) {
                    setErrorMessage("Message required");
                    return;
                }
            }
        }
    };

    const handleMessage = (e) => {
        e.preventDefault();
        setErrorMessage("");
        if (!message) {
            setErrorMessage("Message required");
            return;
        } else {
            if (!name) {
                setErrorMessage("Name required");
                return;
            } else if (!email) {
                setErrorMessage("Email required");
                return;
            } else if (!validateEmail(email)) {
                setErrorMessage("Email invalid");
                return;
            }
        }
    };


    return (
        <div className="contact">
            <h2>Contact me!</h2>
            <article className="contact-form">
                <Form>
                    <Form.Group className='mb-3' controlId='formBasicText'>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Ex: John Doe'
                            onChange={handleInputChange}
                            onBlur={handleName}
                            value={name}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Ex: JohnDoe123@email.com'
                            onChange={handleInputChange}
                            onBlur={handleEmail}
                            value={email}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formControlTextarea'>
                        <Form.Label>Your Message:</Form.Label>
                        <Form.Control
                            as='textarea'
                            placeholder="Ex: You're super cool!"
                            rows='4'
                            onChange={handleInputChange}
                            onBlur={handleMessage}
                            value={message}
                        />
                        <Form.Text className='text-error'>{errorMessage}</Form.Text>
                    </Form.Group>
                    <Button variant='primary' type='submit'>Submit</Button>
                </Form>
            </article>
        </div>
    )
}

export default Contact;