

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-around items-center my-8 lg:my-12 mx-8 lg:mx-16">
                <div className="flex-1">
                    <h2 className="text-xl lg:text-2xl font-bold">Recipe Calories</h2>
                </div>
                <div className="hidden md:flex flex-1">
                    <ul className="text-[#150B2BB3] font-semibold">
                        <a className="mx-4">Home</a>
                        <a className="mx-4">Recipes</a>
                        <a className="mx-4">About</a>
                        <a className="mx-4">Search</a>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center relative">
                        <i className="text-[#150B2B80] absolute left-4 top-3 fa-solid fa-magnifying-glass"></i>
                        <input className="bg-[#ececff] rounded-3xl py-2 pl-10" type="text" placeholder="Search" />
                    </div>
                    <img className="bg-[#0BE58A] p-2 rounded-full" src="https://i.postimg.cc/0NfbK4gZ/Vector-10.png" alt="" />
                </div>
            </div>
            <div className="flex justify-center lg:hidden">
                <ul className="text-[#150B2BB3] font-semibold">
                    <a className="mx-4">Home</a>
                    <a className="mx-4">Recipes</a>
                    <a className="mx-4">About</a>
                    <a className="mx-4">Search</a>
                </ul>
            </div>
        </div>


    );
};

export default Navbar;