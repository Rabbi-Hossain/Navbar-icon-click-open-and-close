
const Nav = ({nav}) => {
    return (
        <div>
           <li className="md:mr-10 hover:bg-amber-600 "><a href={nav.path}>{nav.name}</a></li>
        </div>
    );
};

export default Nav;