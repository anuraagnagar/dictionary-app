import Logo from "../ui/Logo";
import ThemeButton from "../buttons/ThemeButton";

const Header = () => {
    return (
        <header className="mx-2">
            <div className="flex justify-between">
                <Logo />
                <ThemeButton />
            </div>
        </header>
    );
};

export default Header;
