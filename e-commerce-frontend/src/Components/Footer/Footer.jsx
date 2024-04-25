import React from 'react';
import './Footer.css';

import footer_logo from '../Assets/logo.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintrest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const AboutPage = ({ onClose }) => {
  return (
    <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">About Sv Agro Centre</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              <strong>Sv Agro Centre in Kunnathur, Erode</strong><br />
              In the world of agriculture, the choice of seeds is a pivotal factor influencing the success of a harvest. For farmers and enthusiasts seeking reliable seed retailers, Sv Agro Centre stands as a beacon of trust and expertise. Located in Erode, this establishment has been serving the agricultural community for years, earning accolades and notable votes of confidence from its satisfied patrons. Its strategic location makes it a convenient hub for farmers in the surrounding regions. Operating during the standard working hours, the store is accessible to both early-risers preparing for the day's work and those wrapping up their farming chores in the evening.<br /><br />

              The store's physical presence in Erode not only underscores its commitment to the local agricultural community but also positions it as a central resource for farmers looking for high-quality seeds. With a well-organized layout and a team of knowledgeable staff, Sv Agro Centre has established itself as a reliable destination for all seed-related needs in the region.<br /><br />

              <strong>Service Provided</strong><br />
              At Sv Agro Centre, the emphasis is on providing a diverse range of top-quality seeds catering to various crops and farming practices. The establishment takes pride in its commitment to ensuring that farmers have access to a comprehensive selection of seeds, allowing them to make informed choices based on their specific requirements.<br /><br />

              The store's shelves are stocked with a variety of seeds, carefully curated to meet the demands of the local agricultural landscape. From traditional staples to innovative hybrid varieties, Sv Agro Centre ensures that farmers can find the seeds they need to optimize their yield. The establishment's knowledgeable staff is always ready to assist, providing valuable insights into seed selection, planting techniques, and crop management.<br /><br />

              Understanding the dynamic nature of agriculture, Sv Agro Centre also provides the possibility of sourcing specialty seeds upon request. Whether a farmer is experimenting with a new crop or seeking specific traits in their seeds, the establishment's flexible approach acknowledges the unique needs of each customer.<br /><br />

              While Sv Agro Centre could provide bulk quantities for larger agricultural operations, it also accommodates small-scale farmers who may require seeds for smaller plots. The inclusivity in its offerings reflects the establishment's commitment to supporting the diverse agricultural landscape of Erode and its surrounding areas.<br /><br />

              <strong>Why Choose Sv Agro Centre?</strong><br />
              What sets Sv Agro Centre apart is not just its extensive seed inventory, but also the dedication to providing a seamless and customer-friendly experience. The establishment's commitment to customer satisfaction extends beyond the quality of its products. Sv Agro Centre strives to create a welcoming environment where farmers can not only find the seeds they need but also access valuable information and advice. The store's focus on customer service ensures that every visitor leaves with the confidence that they have made the right choices for their agricultural endeavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [showMap, setShowMap] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState(false);

  const handleGetDirectionsClick = () => {
    setShowMap(!showMap);
    setShowAbout(false);
  };

  const handleAboutClick = () => {
    setShowAbout(prevState => !prevState);
  };

  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>S.V.AGRO CENTRE</p>
      </div>
      <ul className="footer-links">
        <li onClick={handleGetDirectionsClick}>Get Directions</li>
        <li onClick={handleAboutClick}>About</li>
        {/* <li><a href="tel:+919677966318">Contact</a></li> */}
        <li onClick={() => window.location.href = "tel:+919677966318"}>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintrest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      {showMap && (
        <div className="map-container">
          <iframe
            title="Store Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3912.8978115077907!2d77.41047999999999!3d11.268921699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDE2JzA4LjEiTiA3N8KwMjQnMzcuNyJF!5e0!3m2!1sen!2sin!4v1712727160461!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
      {showAbout && <AboutPage onClose={handleAboutClick} />}
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
