import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    let ignore = false

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((response) => {
            setData(response[currency])
        })
        .catch(() => {
            if (!ignore) {
                setData
            }
        }) 
    }, [currency])
    return data
}

export default useCurrencyInfo;