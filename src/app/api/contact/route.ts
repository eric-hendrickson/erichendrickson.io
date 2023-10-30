import { EMAIL_REGEX } from '@/globalsConstants';
import { NextRequest } from 'next/server';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const dynamic = 'force-static';

export async function POST(request: NextRequest) {
    try {
        const requestJSON = await request.json();
        const { name, email, message } = requestJSON;

        let badRequest = false;
        let noName = false;
        let noEmail = false;
        let badEmailFormat = false;
        let noMessage = false;

        if (!name || typeof name !== 'string') {
            noName = true;
            badRequest = true;
        }

        if (!email || typeof email !== 'string') {
            noEmail = true;
            badRequest = true;
        } else {
            if (!email.match(EMAIL_REGEX)) {
                badEmailFormat = true;
                badRequest = true;
            }
        }

        if (!message || typeof message !== 'string') {
            noMessage = true;
            badRequest = true;
        }

        if (badRequest) {
            const errorMessageArray = [];
            if (noName) {
                errorMessageArray.push('value "name" is not present or is invalid');
            }
            if (noEmail) {
                errorMessageArray.push('value "email" is not present or is invalid');
            }
            if (badEmailFormat) {
                errorMessageArray.push('value "email" is improperly formatted');
            }
            if (noMessage) {
                errorMessageArray.push('value "message" is not present or is invalid');
            }
            const errorMessage = errorMessageArray.join('; ');

            throw new Error(errorMessage);
        }

        const contactEmailApiUrl = 'https://xnvje1we7f.execute-api.us-west-2.amazonaws.com/prod/contact';
        const response = await fetch(contactEmailApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });
        return response;
    } catch (error) {
        return error;
    }

    return new Response('Hello, Next.js!');
}
