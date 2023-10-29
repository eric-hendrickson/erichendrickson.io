import { NextRequest } from 'next/server';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const dynamic = 'force-static';

export async function POST(request: NextRequest) {
    try {
        const requestJSON = await request.json();
        const { name, email, message } = requestJSON;
        const contactEmailApiUrl = String(process.env.CONTACT_EMAIL_API_URL);

        const response = await fetch(contactEmailApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });
        return response;
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
    }

    return new Response('Hello, Next.js!');
}
