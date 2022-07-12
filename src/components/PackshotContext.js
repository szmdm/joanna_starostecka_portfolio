import { createContext, useState } from "react";

const PackshotContext = createContext()

export function PackshotProvider ({children}) {

    return (
        <PackshotContext.Provider value={{item: 1}}>{children}</PackshotContext.Provider>
    )
}


export default PackshotContext