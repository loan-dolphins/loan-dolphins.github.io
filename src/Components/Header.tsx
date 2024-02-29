let Header = () => {
    return (
        <header className="w-full bg-transparent py-10 px-5">
            <div className="container mx-auto flex justify-between items-center w-full h-full backdrop-blur-lg text-white rounded-full px-5 py-2 hover:backdrop-blur-3xl flex-col md:flex-row">
                <h1 className="text-3xl font-bold ">Dolphin Loans 🐬</h1>
                <nav>
                    <ul className="flex space-x-4 text-neutral-200">
                        {[
                            'About',
                            'Services',
                            'Reviews',
                            'Accessibility',
                        ].map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className="transition-all duration-200  hover:scale-110 text-lg hover"
                                >
                                    <a href={`#${item.toLowerCase()}`} className="text-neutral-300 text-[0.9em] font-nunito font-normal hover:text-violet-500 transition-all duration-300 ease-in-out">
                                        {item}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
