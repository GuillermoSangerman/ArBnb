import React from 'react'

export function Header({ stays }) {
    return (
        <header className="flex items-center justify-between mt-8 mx-5 md:mx-9 lg:mx-16">
            <h1 className="text-2xl font-bold tracking-wide">Stays in Finland</h1>
            <h2 className="tracking-tight">{stays >= 12 ? "12+" : stays} stays</h2>
        </header>
    )
}
