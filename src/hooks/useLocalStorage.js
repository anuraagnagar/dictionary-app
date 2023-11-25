import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        if (!localStorage.getItem(key)) {
            return defaultValue;
        } else {
            return (
                JSON.parse(localStorage.getItem(key)) || String(defaultValue)
            );
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
};

export default useLocalStorage;
