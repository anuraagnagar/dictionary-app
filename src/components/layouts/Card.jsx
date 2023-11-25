import { useState } from "react";
import useFetchData from "../../hooks/useFetchData";

import Header from "./Header";
import NotFound from "./NotFound";
import SearchForm from "./SearchForm";
import ShowContent from "./ShowContent";
import Loader from "../ui/Loader";

const Card = () => {
    const { data, setData, fetchData } = useFetchData();
    const [loading, setLoading] = useState(false);
    const [word, setWord] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await fetchData(word);
        } catch (error) {
            console.error("Error fetching data!");
            setData([]);
        } finally {
            setLoading(false);
        }
        setWord("");
    };

    return (
        <section className="h-fit w-full md:w-11/12 lg:w-8/12 xl:w-7/12 my-8 lg:my-10 lg:px-5">
            <div className="block">
                <Header />
                <SearchForm
                    query={{
                        word,
                        setWord,
                        submitForm,
                    }}
                />
                {loading ? (
                    <Loader />
                ) : !data.length == 0 ? (
                    <ShowContent data={data[0]} />
                ) : (
                    <NotFound />
                )}
            </div>
        </section>
    );
};

export default Card;
