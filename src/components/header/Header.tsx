import Logo from "../logo/Logo";
import Theme from "../theme/Theme";

const Header = () => {
  return (
    <header className="bg-background dark:bg-dark-bg text-text-primary dark:text-text-light transition-colors duration-300">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Logo />
        <Theme />
      </div>
    </header>
  );
};

export default Header;
