'use client';

import HomepageSection from '@/components/homepage/HomepageSection';
import { EMAIL_REGEX } from '@/globalsConstants';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const formIsValid = () => {
        if (name.length && message.length && EMAIL_REGEX.test(email)) {
            return true;
        }
        return false;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });
            if (response.status === 200) {
                setName('');
                setEmail('');
                setMessage('');
                return alert('Email has been successfully sent');
            } else {
                // eslint-disable-next-line no-console
                console.log(response);
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    };

    return (
        <HomepageSection id="contact" heading="Contact" sectionBackgroundColor="bg-blue-300">
            <div className="mx-auto mb-8 flex max-w-screen-2xl flex-col flex-wrap items-center justify-center">
                <p className="py-2 text-center text-xl">
                    Want to work together? Know of any exciting opportunities I may be interested in?
                </p>
                <p className="py-2 text-center text-xl">Maybe you just want to say hello.</p>
                <p className="my-2 mb-8 py-2 text-center text-xl">
                    No problem! Feel free to send me a message using the form below!
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="w-full rounded bg-gradient-to-br from-yellow-50 to-cyan-200 px-7 py-2 md:w-11/12"
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="name"
                        label="Full Name"
                        type="text"
                        id="name"
                        autoComplete="name"
                        value={name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setName(event.target.value);
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setEmail(event.target.value);
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        multiline
                        minRows={4}
                        id="message"
                        label="Message"
                        name="message"
                        value={message}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setMessage(event.target.value);
                        }}
                    />
                    <Button
                        type="submit"
                        disabled={!formIsValid()}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        className="bg-green-700"
                    >
                        Send Message
                    </Button>
                </form>
            </div>
        </HomepageSection>
    );
}
