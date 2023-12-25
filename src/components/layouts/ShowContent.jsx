import AudioButton from "../buttons/AudioButton";

const ShowContent = ({ data }) => {
    return (
        <article className="my-5">
            <section className="flex justify-between mb-7">
                <div className="">
                    <h1 className="font-semibold text-4xl lg:text-6xl mb-3 lg:mb-5">
                        {data?.word}
                    </h1>
                    <p className="text-lg lg:text-2xl text-gray-500 dark:text-gray-300">
                        {data?.phonetic}
                    </p>
                </div>
                {data.phonetics && (
                    <span className="cursor-pointer mr-3">
                        <AudioButton src={data.phonetics} />
                    </span>
                )}
            </section>
            {data.meanings?.map((meaning, meaningIndex) => {
                return (
                    <section
                        key={meaningIndex}
                        className="mb-7 md:mb-10">
                        <h3 className="flex text-center text-3xl lg:text-4xl font-semibold dark:text-white italic after:content-[''] after:self-center after:h-px after:w-full after:ml-4 after:mt-2 after:bg-pink-700 mb-4 md:mb-5">
                            {meaning?.partOfSpeech}
                        </h3>
                        <p className="text-xl lg:text-2xl mb-3">Meaning</p>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                            {meaning?.definitions.map((word, wordIndex) => {
                                return (
                                    <li key={wordIndex}>
                                        <div className="flex before:content-['•'] before:text-pink-700 before:mx-2">
                                            {word?.definition}
                                        </div>
                                        {word?.example && (
                                            <p className="ml-5 mt-2 text-gray-500">
                                                <span className="px-2 py-1 mr-1 text-gray-800 bg-gray-200 dark:text-gray-300 dark:bg-gray-900 rounded">
                                                    Example
                                                </span>
                                                : {word?.example}
                                            </p>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                );
            })}
            <hr className="border-gray-300 dark:border-gray-600 my-3 lg:my-5" />
            <section className="mb-5">
                <h3 className="font-semibold text-xl lg:text-2xl mb-4">
                    License
                </h3>
                <p className="font-semibold">{data.license?.name}</p>
                <a
                    href={data.license?.url}
                    target="_blank"
                    className="cursor-pointer underline text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:text-gray-400">
                    {data.license?.url} &#8690;
                </a>
            </section>
            <section className="inline-block">
                <h3 className="font-semibold text-xl lg:text-2xl mb-4">
                    Source
                </h3>
                <div className="flex flex-col">
                    {data.sourceUrls?.map((url, urlIndex) => {
                        return (
                            <a
                                key={urlIndex}
                                href={url}
                                target="_blank"
                                className="cursor-pointer underline text-gray-500 hover:text-gray-700 dark:text-gray-400">
                                {url} &#8690;
                            </a>
                        );
                    })}
                </div>
            </section>
        </article>
    );
};

export default ShowContent;
