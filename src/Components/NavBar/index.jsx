import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";

function NavItem({
    to, 
    className, 
    name, 
    activeStyle, 
    icon, 
    isOpenCheckout, 
    open, 
    close, 
    index
}) {

    return (
        <li className={className}>
            <div 
                className='cursor-pointer' 
                onClick={() => {
                    isOpenCheckout ? close() : open()
                }}>
                {icon}
            </div>

            <NavLink 
                to={to}
                className={({isActive}) => isActive && index ? activeStyle : undefined }>
                {name}
            </NavLink>
        </li>
    )
}

function NavBar() {  
    const {cartProducts, 
           isOpenCheckout, 
           openCheckout, 
           closeCheckout} = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-4';

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
        {
            to: '/my-order', 
            name: cartProducts.length, 
            className: 'flex items-center gap-1',
            icon: <ShoppingCartIcon className='w-6 h-6'/>,
            state: isOpenCheckout, 
            open: openCheckout,
            close: closeCheckout,
        },
    ];
    
    
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
              {sideB.map(({to, name, className, icon, state, open, close}, index) => (
                <NavItem 
                key={name}
                to={to}
                name={name}
                className={className}
                activeStyle={activeStyle}
                icon={icon}
                isOpenCheckout={state}
                open={open}
                close={close}
                index={index}/>
              ))}
            </ul>                       
        </nav>
        
    )
}

export { NavBar };

