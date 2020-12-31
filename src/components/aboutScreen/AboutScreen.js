import React from 'react'

import '../../index.css';
import { Footer } from '../ui/Footer';
import { Schedule } from '../ui/Schedule';
import { About } from './About';
import { Empresa } from './Empresa';
import { History } from './History';



export const AboutScreen = () => {
    return (
        <main className="mt-4">
            <About />
            <History />
            <Schedule />
            <Empresa />
            <Footer/>
        </main>
    )
}
