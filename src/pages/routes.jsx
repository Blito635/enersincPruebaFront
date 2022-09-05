import CrearPersona from "./public/crear/CrearPersona";
import EliminarPersona from "./public/eliminar/EliminarPersona";
import Menu from "./public/Menu";
import ModificarPersona from "./public/modificar/ModificarPersona";


export const routes =[
    {
        path:"/",
        element: <Menu/>,
        children: [
            {
            }
        ],
    },
    {
        path:"/crear",
        element: <CrearPersona/>,
        children: [
            {
            }
        ],
    },
    {
        path:"/eliminar/:documento",
        element: <EliminarPersona/>,
        children: [
            {
            }
        ],
    },
    {
        path:"/modificar/:documento",
        element: <ModificarPersona/>,
        children: [
            {
            }
        ],
    },
]