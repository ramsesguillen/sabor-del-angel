import React from 'react'
import { Footer } from '../ui/Footer'
import { Schedule } from '../ui/Schedule'
import { ProductAttributes } from './ProductAttributes'
import { ProductComposition } from './ProductComposition'
import { ProductPresentation } from './ProductPresentation'

export const ProductScreen = () => {
    return (
        <main className="mt-4">
            <ProductPresentation precio={false}/>
            <ProductAttributes />
            <Schedule />
            <ProductComposition />
            <Footer />
        </main>
    )
}
