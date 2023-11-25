import AppLogo from "../../assets/logo.png";
import { GIT_REPO_LINK, SITE_TITLE } from "../../utils/constants";

const Logo = () => {
    return (
        <a
            href={GIT_REPO_LINK}
            target="_blank">
            <div className="flex justify-start w-fit">
                <img
                    alt="Logo"
                    className="h-10 w-10 md:h-12 md:w-12 mr-2"
                    src={AppLogo}
                />
                <h1 className="font-semibold text-2xl md:text-3xl my-auto">
                    {SITE_TITLE}
                </h1>
            </div>
        </a>
    );
};

export default Logo;
