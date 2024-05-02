

const Menu = ({ item }) => {
    const { recipe_id, recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = item;
    console.log(recipe_id);
    return (
        <div className="border rounded-xl p-8">
            <img className="w-80 h-50 rounded-xl" src={recipe_image} alt="" />
            <h2 className="font-bold text-xl my-2">{recipe_name}</h2>
            <p className="text-[#878787] my-4">{short_description}</p>
            <div className="border-y-2 pb-4">
                <h2 className="font-bold text-lg text-[#282828] my-2">Ingredients: {ingredients.length}</h2>
                {
                    ingredients.map((ingredient, idx) => <li key={idx} className="text-[#878787]">{ingredient}</li>)
                }
            </div>
            <div className="flex items-center text-[#282828CC] gap-4 my-2">
                <div className="flex items-center gap-2">
                    <i className="fa-regular fa-clock"></i>
                    <p>{preparing_time}</p>
                </div>
                <div className="flex items-center gap-2">
                    <img src="src/assets/Images/Vector (4).svg" alt="" />
                    <p>{calories}</p>
                </div>
            </div>
            <button className="bg-[#0BE58A] text-black font-bold py-2 rounded-3xl px-4 mt-4">Want to Cook</button>
        </div>
    );
};

export default Menu;