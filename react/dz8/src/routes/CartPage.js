import { useSelector } from "react-redux";
import CartList from "../components/cart/CartList";
import PageHeader from "../components/common/PageHeader";
import FormShippin from "../components/cart/FormShippin";
import FormCheckout from "../components/cart/FormCheckout";
import '../styles/cart-page.scss'

function CartPage() {
    const products = useSelector((state) => state.cart.items);
    const totalAmount = products.reduce((sum, item) => sum + item.quantity * item.price, 0)

    return (
        <>
            <PageHeader title={'SHOPPING CART'} breadcrumbs={[]} />
            <section className="cart">
                <div className="cart__wrap container">
                    <CartList products={products} />
                    <div className="forms-box">
                        <FormShippin />
                        <FormCheckout subTotalAmount={totalAmount} grandTotalAmaunt={totalAmount} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default CartPage;