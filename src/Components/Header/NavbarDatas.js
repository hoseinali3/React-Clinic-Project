

const NavbarDatas = [
    {
        id: 1,
        title: "صفحه اصلی",
        link: "/React-Clinic-Project/",

    },
    {
        id: 2,
        title: "نوبت دهی",
        link: localStorage.getItem("isLogin") ? "/React-Clinic-Project/userpanel/NobatDehi" : "/React-Clinic-Project/login",
                                                

    },
    {
        id: 3,
        title: "جوابدهی",
        link: localStorage.getItem("isLogin") ? "/React-Clinic-Project/userpanel/responsiveness" : "/React-Clinic-Project/login",


    },
    {
        id: 4,
        title: "پزشکان",
        link: "/React-Clinic-Project/doctors",

    },
    {
        id: 5,
        title: "خدمات مرکز",
        link: "/React-Clinic-Project/clinic-services",

    },
    {
        id: 6,
        title: "تماس با ما",
        link: "/React-Clinic-Project/contact-us",


    },

]


export default NavbarDatas;