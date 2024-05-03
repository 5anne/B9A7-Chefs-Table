import Menu from "../Menu/Menu";

const Menubar = ({menu, selectedFood}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3'>
          {
            menu.map(item => <Menu key={item.id} selectedFood={selectedFood} item={item}></Menu>)
          }
        </div>
    );
};

export default Menubar;