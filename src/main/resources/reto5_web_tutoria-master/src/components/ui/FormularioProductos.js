import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ActualizarProducto from '../paginas/ActualizarProducto';


const FormularioProductos = ({producto}) => {

    const {reference, price,photography, category,quantity} = producto;

    const [ productos, guardarProductos] = useState([]);

    fetch("http://129.151.113.224:8080/api/clothe/all")
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
        guardarProductos(data);
    });
   
const actualizarProducto = reference =>{

    {productos.map( producto =>(
        <ActualizarProducto 
       key={producto.reference}
        producto={producto}
       /> ))}
  
}


    const borrarProducto = reference =>{

        Swal.fire({
            title: 'Quieres borrar el producto?',
            text: "Estas seguro que deseas borrar este producto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, borralo!'
          }).then((result) => {
            if (result.isConfirmed) {
                try{
                    console.log(reference);
                    fetch(`http://129.151.113.224:8080/api/clothe/${reference}`,{
                        method: "DELETE",
                        headers: {
                            Accept: "aplication/json",
                            "Content-Type": "aplication/json",
                        },
                      }).then((data) =>{
                         // console.log(data);
                      });   
              Swal.fire(
                'Eliminado!',
                'Se borro correctamente.',
                'success'
              );
            } catch (error) {
                console.log(error)
            }
            
        }
      })
}
       


    return( 
        <>
    
                

        <div className="w-full px-3 mb-4">
            <div className="p-5 shadow-md bg-white">
                <div className="lg:flex">
                    <div className="lg:w-5/12 xl:w-3/12">
                   
                      <img src={photography} alt=" imagen platillo " />
                            <div className="sm:flex sm:-mx-2 pl-2">
                                
                            </div>
                            </div>
                            <div className="lg:w-7/12 xl:w-9/12 pl-5">
                            <p className="font-bold text-2xl text-yellow-600 mb-4">{reference} </p>
                            <p className="text-gray-600 mb-4">{category} </p>
                            
                            <p className="text-gray-600 mb-4">Precio: {''}
                            <span className="text-gray-700 font-bold">$ {price}</span> 
                            
                            <p className="text-gray-600 mb-4">Cantidad: {''}
                            <span className="text-gray-700 font-bold">{quantity}</span> 
                        </p>
                        </p>
                        <button
                            onClick={ () => borrarProducto(producto.reference)}
                            type="submit"
                            className="bg-red-400 hover:bg-red-700, inline-block mb-5 p-2 text-white uppercase font-bold"
                           > 
                           Borrar
                           
                           </button>
                           <br/>
                          
                            <Link to={`/actualizar-producto/${producto.reference}`} className="  bg-green-400 hover:bg-green-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                                Actualizar Producto
                            </Link>
                           
                          
                    </div>
                </div>
            </div>
        </div>
        
        </>
        
        
     );
}
 
export default FormularioProductos;