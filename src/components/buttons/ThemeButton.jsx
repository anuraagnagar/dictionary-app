import useTheme from "../../hooks/useTheme";
import Brightness from "../../assets/svg/brightness.svg";
import Moon from "../../assets/svg/moon.svg";

const ThemeButton = () => {
    const theme = useTheme();

    const DARK = theme.mode === "dark";

    const themeChange = () => {
        if (DARK) {
            theme.setMode("light");
        } else {
            theme.setMode("dark");
        }
    };

    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                checked={DARK ? true : false}
                onChange={themeChange}
            />
            <div className="relative flex justify-around items-center w-14 h-7 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-pink-700">
                <svg
                    className={DARK ? "visible" : "invisible"}
                    height="22"
                    width="22">
                    <image
                        href={Brightness}
                        className="w-full text-gray-20"
                    />
                </svg>
                <svg
                    className={DARK ? "invisible" : "visible"}
                    height="22"
                    width="22">
                    <image
                        href={Moon}
                        className="w-full text-gray-20"
                    />
                </svg>
            </div>
        </label>
    );
};

export default ThemeButton;
