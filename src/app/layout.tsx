import './globals.css';
import { Lato } from 'next/font/google';

import { ILink } from '@/models/ILink';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';

export const metadata = {
  title: 'Eric Hendrickson - Software Engineer',
  description: 'Portfolio page for Eric Hendrickson',
};

const links: ILink[] = [
  {
    label: 'Home',
    url: '#',
  },
  {
    label: 'About Me',
    url: '#about-me',
  },
  {
    label: 'My Work',
    url: '#my-work',
  },
  {
    label: 'Contact',
    url: '#contact',
  },
];

const lato = Lato({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lato.className}>
      <body className="text-black">
        <Header />
        <Navbar links={links} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
