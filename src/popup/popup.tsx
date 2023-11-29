import test from "node:test";
import React from "react";
import { createRoot } from 'react-dom/client'

const popup = (
    <>
        <div>
            <h1>Hello World</h1>
        </div>
    </>
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(popup)