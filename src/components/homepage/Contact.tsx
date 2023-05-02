'use client';

import HomepageSection from '@/components/homepage/HomepageSection';
import { Box, TextField, Button } from '@mui/material';

export default function Contact() {
    return (
        <HomepageSection id="contact" heading="Contact" sectionBackgroundColor="bg-blue-300">
            <div className="mx-auto flex max-w-screen-2xl flex-col flex-wrap items-center justify-center">
                <p className="py-2 text-xl">Want to work together?</p>
                <p className="py-2 text-xl">Know of any exciting opportunities I may be interested in?</p>
                <p className="py-2 text-xl">Maybe you just want to say hello.</p>
                <p className="my-2 py-2 text-xl">No problem! Feel free to send me a message using the form below!</p>
                <Box
                    component="form"
                    onSubmit={() => console.log('submitted')}
                    noValidate
                    className="rounded bg-gradient-to-br from-yellow-50 to-cyan-200 px-3"
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="name"
                        label="Name"
                        type="text"
                        id="name"
                        autoComplete="name"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
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
                        autoFocus
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className="bg-green-700">
                        Sign In
                    </Button>
                </Box>
            </div>
        </HomepageSection>
    );
}
