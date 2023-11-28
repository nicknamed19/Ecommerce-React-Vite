import { NavLink } from "react-router-dom";

const sideA = [
    {to:'/', name: 'Shopi', className: 'font-semibold text-xl'},
    {to:'/',  name: 'All'},
    {to:'/clothes',  name: 'Clothes'},
    {to:'/electronics',  name: 'Electronics'},
    {to:'/furniture',  name: 'Furniture'},
    {to:'/toys',  name: 'Toys'},
    {to:'/others',  name: 'Others'},
];

const sideB = [
    {to: false, name: 'Nickname', className: 'text-black/60'},
    {to: '/my-orders', name: 'My Orders'},
    {to: '/my-account', name: 'My Account'},
    {to: '/sign-in', name: 'Sign In'},
    {to: '/my-order', name: '🛒0'},
];

const NavItem = ({to, className, name, activeStyle, index}) => {
    return (
        <li className={className}>
            <NavLink 
                to={to} 
                className={({isActive}) => isActive && index ? activeStyle : undefined }>
                {name}
            </NavLink>
        </li>
    )
}

function NavBar() {
    
    
    
    const activeStyle = 'underline underline-offset-4';
    
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-base bg-white border-b border-solid border-gray-400 shadow-md'>
            <ul className='flex items-center gap-3'>
              {sideA.map(({to, name, className}, index) => (
                <NavItem 
                key={name}
                to={to}
                name={name}
                className={className}
                activeStyle={activeStyle}
                index={index}/>
              ))}
            </ul>

            <ul className='flex items-center gap-3'>
              {sideB.map(({to, name, className}, index) => (
                <NavItem 
                key={name}
                to={to}
                name={name}
                className={className}
                activeStyle={activeStyle}
                index={index}/>
              ))}
            </ul>                       
        </nav>
        
    )
}

export { NavBar };


