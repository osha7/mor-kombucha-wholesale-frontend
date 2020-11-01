
import logo from '../mor-logo.png'
import hazy from '../hazykeg.png'
import '../Order.css';


function Order() {
  return (
    <div id="order" className="order">
        <section>
            <div className="order-container">
              <img src={logo} className="logo-order" />
              <div>
                <h1>WHOLESALE ORDERS</h1>
                <h2>FOR DELIVERIES TO YOUR BUSINESS ON TUESDAY or WEDNESDAY</h2>
                <span>Place order day before by 4pm to receive your order in this week's delivery.</span>
              </div>
                {/* <img src={hazy} className="hazy-keg" /> */}
              <div className="product-list">
                <div className="card">
                  <div className="imgBx" >
                    <img src={hazy} />
                  </div>
                </div>
                <div className="card">
                  <div className="imgBx" >
                    <img src={hazy} />
                  </div>
                </div>
              </div>
            </div>
        </section>
    </div>
  );
}

export default Order;
