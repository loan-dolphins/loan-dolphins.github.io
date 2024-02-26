let Header = () => {
    return (
        <header className=" w-full bg-transparent py-10 px-5">
            <div className="container mx-auto flex justify-between items-center w-full h-full backdrop-blur-lg text-white rounded-full px-5 py-2">
                <h1 className="text-3xl font-bold">Dolphin Loans 🐬</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
