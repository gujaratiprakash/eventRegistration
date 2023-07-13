import { useState } from "react";

const Data = () => {
    const [value, setValue] = useState([]);
    useState(() => {
        const getData = async () => {
            try {
                const response = await axios.get('/api/data');
                setValue(response.data);
                console.log(value);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, []);
    return (
        <>
           view in console
        </>
    )
}

export default Data;