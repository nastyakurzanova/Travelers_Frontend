import "./OrderConstructor.sass"
import {useOrder} from "../../hooks/orders/useOrder";
import {Link} from "react-router-dom";

const OrderConstructor = () => {

    const {order} = useOrder()

    if (order == undefined || order.services.length == 0) {
        return (
            <div className="constructor-container disabled">
                <span className="title">Пустой заказ</span>
            </div>
        )
    }

    return (
        <Link to={`/orders/${order.id}`} className="constructor-container">
            <span className="title">Заказ</span>
            {order.services.length > 0 && <span className="badge"></span>}
        </Link>
    )
}

// const {booking} = useBooking()
//     if (booking == undefined || booking.audiences.length == 0) {
//         return (
//             <div className="constructor-container disabled">
//                 <span className="title">Корзина пустая</span>
//             </div>
//         )
//     }

//     return (
//         <Link to={`/bookings/${booking.id}`} className="constructor-container">
//             <span className="title"><p> Корзина &nbsp; </p> </span>
//             {booking.audiences.length > 0 && <span className="badge"></span>}
//         </Link>
//     )
export default OrderConstructor