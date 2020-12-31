import React from 'react'
import { Footer } from '../ui/Footer'
import { Schedule } from '../ui/Schedule'
import ContactUs from './ContactFrom'
import { Mapa } from './Mapa'




export const ContactUsScreen = () => {
    return (
        <main>
            <Mapa />
            <ContactUs / >
            <Schedule />
            <Footer />
        </main>
    )
}
