import NotFoundImage from "../../assets/svg/not_found.svg";

const NotFound = () => {
    return (
        <div className="mb-8">
            <div className="flex justify-center">
                <img
                    className="h-2/4 w-2/4"
                    src={NotFoundImage}
                    alt="Image"
                />
            </div>
            <h5 className="my-4 text-2xl text-center font-bold tracking-tight text-gray-500 dark:text-slate-500">
                Sorry, we couldn't find any result.
            </h5>
        </div>
    );
};

export default NotFound;
