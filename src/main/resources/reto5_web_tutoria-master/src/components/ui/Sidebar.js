import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
       return( 
        <div className="md:w-2/6 xl:w-1/5 bg-blue-500">
            <div className="p-6">
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">Tienda de alto turmeque</p>

                <p className="mt-3 text-white-600">El administrador puede realizar las siguientes opciones</p>

                <nav className="mt-10">
                    
                    <NavLink className="p-1 text-black-400 block hover:bg-blue-900 hover:text-gray-100" activeClassName="text-yellow-500" exact="true" to="/ordenes">Ordenes</NavLink>
                    <NavLink className="p-1 text-black-400 block hover:bg-blue-900 hover:text-gray-100" activeClassName="text-yellow-500" exact="true" to="/productos">Productos</NavLink>
                    <NavLink className="p-1 text-black-400 block hover:bg-blue-900 hover:text-gray-100" activeClassName="text-yellow-500" exact="true" to="/usuarios">Usuarios</NavLink>
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;