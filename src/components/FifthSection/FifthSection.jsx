import React from "react";
import trade from "../../assets/Images/icon/promo_logo_iphone_tradein__7y3gtai5az66_medium - Copy.png";
import cardlogo from "../../assets/Images/icon/cardLogo.png";
function FifthSection() {
  return (
    <section className="five container-fluid">
      <div className="sec-5 row">
        <div className="trade text-center pt-5 col-12 col-md">
          <div className="trade-img">
            <img src={trade} width="150px" alt="logo" />
          </div>
          <div>
            <p>
              Get $150-$650 in Credit When you <br />
              trade in iphone 12 or higher.
              <sup>5</sup>
            </p>
          </div>

          <div className="button-6">
            <a href="#" className="link-button">
              Get your estimate
            </a>
          </div>
        </div>

        <div className="card text-center pt-5 col-12 col-md">
          <div>
            <img src={cardlogo} alt="logo" />
          </div>
          <div>
            <p>
              Get up To 3% daily Cash back <br />
              with every Purchase
            </p>
          </div>
          <div className="button">
            <ul>
              <li>
                <a href="#" className="link-button">
                  learn more
                </a>
              </li>
              <li>
                <a href="#" className="link-buttonApply">
                  Apply now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FifthSection;
