import React from "react";
import { createRoot } from 'react-dom/client'
import '../assets/tailwind.css'

const content = (
    <>
        <div>
            <img src="icon.png" alt="" />
            <h1 className="text-3xl text-black-500">Hello World</h1>
        </div>
    </>
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(content)