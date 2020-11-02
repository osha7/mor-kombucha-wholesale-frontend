
import logo from '../mor-logo.png';
import hazy from '../hazykeg.png';
import mojito from '../mojitokeg.png';
import pineapple from '../pineapplekeg.png';
import ginger from '../gingerkeg.png';
import '../Order.css';
import kegSizes from './keg-options';


function Order() {
  return (
    <div id="order" className="order">
        <section>
            <div className="order-container">
              <img src={logo} className="logo-order" />
              <div className="orderpage-headers">
                <h1>WHOLESALE ORDERS</h1>
                <h2>FOR DELIVERIES TO YOUR BUSINESS ON TUESDAY or WEDNESDAY</h2>
                <span>Place order day before by 4pm to receive your order in this week's delivery.</span>
              </div>
                
              <div className="product-list">

                <div className="product-card">
                  <div id="card" class="hazy">
                    <div className="imgBx" >
                      <img id="kegs" src={hazy} />
                    </div>
                  </div>
                  <div className="keg-options">
                    <label for="keg-options">Keg Options:</label><br />
                    <select id="keg-options" name="keg-options">
                      <option value="value" selected>Choose Size</option>
                      {kegSizes.map(kegSize => <option key={kegSize} value={kegSize}>{kegSize}</option>)}
                    </select>
                  </div>
                  <div className="keg-price">
                  <span>Price/Each: $</span>
                  </div>
                  <button className="product-button">Add To Order</button>
                </div>
                
                <div className="product-card">
                  <div id="card" class="mojito">
                    <div className="imgBx" >
                      <img id="kegs" src={mojito} />
                    </div>
                  </div>
                  <div className="keg-options">
                    <label for="keg-options">Keg Options:</label><br />
                    <select id="keg-options" name="keg-options">
                      <option value="value" selected>Choose Size</option>
                      {kegSizes.map(kegSize => <option key={kegSize} value={kegSize}>{kegSize}</option>)}
                    </select>
                  </div>
                  <div className="keg-price">
                  <span>Price/Each: $</span>
                  </div>
                  <button className="product-button">Add To Order</button>
                </div>
                
                <div className="product-card">
                  <div id="card" class="pineapple">
                    <div className="imgBx" >
                      <img id="kegs" src={pineapple} />
                    </div>
                  </div>
                  <div className="keg-options">
                    <label for="keg-options">Keg Options:</label><br />
                    <select id="keg-options" name="keg-options">
                      <option value="value" selected>Choose Size</option>
                      {kegSizes.map(kegSize => <option key={kegSize} value={kegSize}>{kegSize}</option>)}
                    </select>
                  </div>
                  <div className="keg-price">
                  <span>Price/Each: $</span>
                  </div>
                  <button className="product-button">Add To Order</button>
                </div>

                <div className="product-card">
                  <div id="card" class="ginger">
                    <div className="imgBx" >
                      <img id="kegs" src={ginger} />
                    </div>
                  </div>
                  <div className="keg-options">
                    <label for="keg-options">Keg Options:</label><br />
                    <select id="keg-options" name="keg-options">
                      <option value="value" selected>Choose Size</option>
                      {kegSizes.map(kegSize => <option key={kegSize} value={kegSize}>{kegSize}</option>)}
                    </select>
                  </div>
                  <div className="keg-price">
                    <span>Price/Each: $</span>
                  </div>
                  <button className="product-button">Add To Order</button>
                </div>

              </div>
            </div>
        </section>
    </div>
  );
}

export default Order;
