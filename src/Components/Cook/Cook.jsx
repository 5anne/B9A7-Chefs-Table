

const Cook = () => {
    return (
        <div>
            <h1 className="font-bold text-2xl text-center border-b-2 pb-4">Want to cook: 0</h1>
            <table>
                <tr className="flex justify-around gap-12 my-4 text-[#878787]">
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
            </table>
            <h1 className="font-bold text-2xl text-center border-b-2 pb-4">Currently cooking: 0</h1>
            <table>
                <tr className="flex justify-around gap-12 my-4 text-[#878787]">
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
            </table>
            <div className="flex">
                <div className="w-1/5"></div>
                <div className="flex gap-8 text-[#282828CC] font-bold w-4/5">
                    <p>Total Time = 0 minutes</p>
                    <p>Total Calories = 0 calories</p>
                </div>
            </div>
        </div>
    );
};

export default Cook;