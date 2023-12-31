import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./popup/popup";

function init() {
    const appContainer = document.createElement('div')
    document.body.appendChild(appContainer)
    
    if (!appContainer) {
        throw new Error("Cannot find AppContainer")
    }

    const root = createRoot(appContainer)
    console.log(appContainer)
    root.render(<Popup />)
}

init()