

const Cook = ({ items, prepareFood, cooking, prepTime, calory }) => {

    // console.log(items);

    return (
        <div>
            <h1 className="font-bold text-2xl text-center border-b-2 pb-4">Want to cook: {items.length}</h1>
            <table>
                <tr className="flex gap-12 my-4 text-[#878787]">
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>

                {
                    items.map((item, idx) => (
                        <tr key={idx} className="flex items-center font-semibold text-sm my-4 text-[#878787] bg-[#28282808]">
                            <td className="mr-2">{idx + 1}</td>
                            <td className="w-[100px]">{item.recipe_name}</td>
                            <td className="mr-6">{item.preparing_time} minutes</td>
                            <td className="mr-4">{item.calories} calories</td>
                            <td><button onClick={() => prepareFood(item.recipe_id, item)} className="bg-[#0BE58A] text-black font-semibold text-sm py-2 rounded-3xl px-2">Preparing</button></td>
                        </tr>
                    ))
                }
            </table>
            <h1 className="font-bold text-2xl text-center border-b-2 pb-4">Currently cooking: {cooking.length}</h1>
            <table>
                <tr className="flex justify-around gap-12 my-4 text-[#878787]">
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                {
                    cooking.map((cooked, idx) => (
                        <tr key={idx} className="flex justify-around items-center font-semibold text-sm gap-4 my-4 text-[#878787] bg-[#28282808]">
                            <td className="w-[8px]">{idx + 1}</td>
                            <td className="w-1/3">{cooked.recipe_name}</td>
                            <td className="w-1/3">{cooked.preparing_time} minutes</td>
                            <td className="w-1/3">{cooked.calories} calories</td>
                        </tr>
                    ))
                }
            </table>
            <div className="flex">
                <div className="w-1/5"></div>
                <div className="flex gap-8 text-[#282828CC] font-bold w-4/5">
                    <p>Total Time = {prepTime} minutes</p>
                    <p>Total Calories = {calory} calories</p>
                </div>
            </div>
        </div>
    );
};

export default Cook;