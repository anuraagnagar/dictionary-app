import axios from "axios";
import { useState } from "react";

import { API_URL } from "../utils/constants";

const useFetchData = () => {
    const [data, setData] = useState([]);

    const fetchData = async (word) => {
        let response = await axios.get(API_URL + word);
        if (!response.status == 200) {
            throw new Error(response.data);
        }
        setData(response.data);
    };

    return { data, setData, fetchData };
};

export default useFetchData;
