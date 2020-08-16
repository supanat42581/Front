import LoginPage from '../components/pages/Login';
import RegisterPage from '../components/pages/Register';

import BookingPage from '../components/pages/Booking'
import CartPage from '../components/pages/Cart'
import CoursePage from '../components/pages/Course'
import DoctorConfirmPage from '../components/pages/DoctorConfirm'
import DoctorProfilePage from '../components/pages/DoctorProfile'
import StatusAcceptPage from '../components/pages/StatusAccept'
import StatusPendingPage from '../components/pages/StatusPending'
import AddCoursePage from '../components/pages/AddCourse'


const components = {
    login: {
        url: "/login",
        component: LoginPage
    },
    register: {
        url: "/register",
        component: RegisterPage
    },
    booking: {
        url: "/booking",
        component: BookingPage
    },
    cart: {
        url: "/cart",
        component: CartPage
    },
    course: {
        url: "/course",
        component: CoursePage
    },
    doctorconfirm: {
        url: "/doctorconfirm",
        component: DoctorConfirmPage
    },

    doctorprofile: {
        url: "/doctorprofile",
        component: DoctorProfilePage
    },
    statusaccept: {
        url: "/statusaccept",
        component: StatusAcceptPage
    },
    statuspending: {
        url: "/statuspending",
        component: StatusPendingPage
    },
    addcourse: {
        url: "/addcourse",
        component: AddCoursePage
    }
};

// Role ไหนเข้าหน้าไหนได้บ้าง
export default {
    guest: {
        allowedRoutes: [
            components.login,
            components.register
        ],
        redirectRoutes: "/login"
    },
    user: {
        allowedRoutes: [
            components.booking,
            components.cart,
            components.course,
            components.doctorconfirm,
            components.doctorprofile,
            components.statusaccept,
            components.statuspending,
            components.addcourse,
        ],
        redirectRoutes: "/course"
    },
};