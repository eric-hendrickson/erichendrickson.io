import * as sendgridMail from '@sendgrid/mail';
import { NextRequest } from 'next/server';
sendgridMail.setApiKey('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');

export async function POST(request: NextRequest) {
    console.log(request);
    return new Response('Hello, Next.js!');
}
