import React from 'react';
import uuid from 'react-uuid';

const Slides = () => {
    const data = [
        {
            title: "BIT 001",
            description: "Some random text."
        },
        {
            title: "BIT 002",
            description: "Some random text."
        },
        {
            title: "BIT 003",
            description: "Some random text."
        },
        {
            title: "BIT 004",
            description: "Some random text."
        },
        {
            title: "BIT 005",
            description: "Some random text."
        },
        {
            title: "BIT 006",
            description: "Some random text."
        }
    ];

    return (
        <ul>
            {data.map(slide => (
                <Slide key={uuid()} title={slide.title} description={slide.description} >
                    <div>{slide.title}</div>
                    <div>{slide.description}</div>
                </Slide>))}
        </ul>
    )
}

export { Slides }





