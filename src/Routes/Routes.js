import Home from '../Pages/Home/Home'
import ContactUs from '../Pages/ContactUs/ContactUs'
import Login from '../Pages/Login/Login'
import UserPanel from '../Pages/UserPanel/UserPanel'
import Responsiveness from '../Components/Responses/Responsiveness'
import NobatDehi from '../Components/NobatDehi/NobatDehi'
import Error404 from '../Components/Error404/Error404'
import Doctors from '../Pages/Doctors/Doctors'
import Servieces from '../Pages/Servieces/Servieces'



const Route = [
    {path:"React-Clinic-Project/",element:<Home/>},
    {path:"React-Clinic-Project/login",element:<Login/>},
    {path:"React-Clinic-Project/contact-us",element:<ContactUs/>},
    {path:"React-Clinic-Project/doctors",element:<Doctors/>},
    {path:"React-Clinic-Project/clinic-services",element:<Servieces/>},
    {path:"React-Clinic-Project/userpanel/*",element:<UserPanel/>,children:[
        {path:"responsiveness",element: <Responsiveness/>},
        {path:"NobatDehi",element: <NobatDehi/>}
    
       
        
    ]},
    {path:"React-Clinic-Project/*",element:<Error404/>},
]

export default Route