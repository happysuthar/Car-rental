import React from 'react';
import logo from '/logo.svg';
import { BrowserRouter } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoInstagram, logoTwitter, logoLinkedin, logoSkype, mailOutline,carOutline, personOutline,arrowForwardOutline, peopleOutline, flashOutline, speedometerOutline, hardwareChipOutline, heartOutline,personAddOutline,cardOutline,timeOutline, chatbubbleEllipsesOutline} from 'ionicons/icons'; // Import required Ionicons


const Car = () => {
  return (
    <div>
      {/* Header */}
      <header className="header" data-header>
      <div>
      <div className="container">
        <div className="overlay" data-overlay></div>
        <a href="#" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <nav className="navbar" data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="/car" className="navbar-link" data-nav-link>Home</a>
            </li>
            <li>
              <a href="#featured-car" className="navbar-link" data-nav-link>Explore cars</a>
            </li>
            <li>
              <a href="#" className="navbar-link" data-nav-link>About us</a>
            </li>
            <li>
              <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <div className="header-contact">
            <a href="tel:88002345678" className="contact-link">+91 9638901774</a>
            <span className="contact-time">Mon - Sat: 8:00 am - 10:00 pm</span>
          </div>
          <a href="#featured-car" className="btn" aria-labelledby="aria-label-txt">
            <IonIcon icon={carOutline} />
            <span id="aria-label-txt">Explore cars</span>
          </a>
          <a href="/loginn" className="btn user-btn" aria-label="Profile">
            <IonIcon icon={personOutline} />
          </a>
        </div>
      </div>
    </div>
      </header>

      {/* Main content */}
      <main>
        <article>
          {/* Featured car section */}
          <section className="section featured-car" id="featured-car">
      <div className="container">
        <div className="title-wrapper"></div>
        <ul className="featured-car-list">
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/car11.jpg"
                  width="440"
                  height="300"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Range Rover Sport</a>
                  </h3>
                  <data className="year chumma" value="2021">2024</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Electric Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">11.3km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$600</strong> / month</p>
                  
                  <button className="btn">Rent now</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/car12.jpg"
                  width="440"
                  height="300"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">BMW 3 Series</a>
                  </h3>
                  <data className="year chumma" value="2021">2021</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Electric Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">9km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$500</strong> / month</p>
                  
                  <button className="btn">Rent now</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/car13.jpg"
                  width="440"
                  height="300"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Mercedes benz</a>
                  </h3>
                  <data className="year chumma" value="2021">2024</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">8.5km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$550</strong> / month</p>
                  
                  <button className="btn">Rent now</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/car14.jpg"
                  width="440"
                  height="300"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Volkswagen Virtus</a>
                  </h3>
                  <data className="year chumma" value="2021">2024</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text"> Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">15.3km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$300</strong> / month</p>
                
                  <button className="btn">Rent now</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/car15.png"
                  width="440"
                  height="300"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">BMW 3 Series</a>
                  </h3>
                  <data className="year chumma" value="2021">2021</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Electric Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">9km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$500</strong> / month</p>
                 
                  <button className="btn">Rent now</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/car13.jpg"
                  alt="Toyota RAV4 2021"
                  loading="lazy"
                  width="440"
                  height="300"
                  className="w-100"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Mercedes benz</a>
                  </h3>
                  <data className="year chumma" value="2021">2024</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">8.5km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$550</strong> / month</p>
                  
                  <button className="btn">Rent now</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/car11.jpg"
                  alt="Toyota RAV4 2021"
                  loading="lazy"
                  width="440"
                  height="300"
                  className="w-100"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Range Rover Sport</a>
                  </h3>
                  <data className="year chumma" value="2021">2024</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Electric Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">11.3km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$600</strong> / month</p>
                  
                  <button className="btn">Rent now</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/car12.jpg"
                  alt="Toyota RAV4 2021"
                  loading="lazy"
                  width="440"
                  height="300"
                  className="w-100"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">BMW 3 Series</a>
                  </h3>
                  <data className="year chumma" value="2021">2021</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Electric Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">9km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$500</strong> / month</p>
                  
                  <button className="btn">Rent now</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/car13.jpg"
                  alt="Toyota RAV4 2021"
                  loading="lazy"
                  width="440"
                  height="300"
                  className="w-100"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Mercedes benz</a>
                  </h3>
                  <data className="year chumma" value="2021">2024</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">8.5km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$550</strong> / month</p>
                 
                  <button className="btn">Rent now</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/car11.jpg"
                  alt="Toyota RAV4 2021"
                  loading="lazy"
                  width="440"
                  height="300"
                  className="w-100"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Range Rover Sport</a>
                  </h3>
                  <data className="year chumma" value="2021">2024</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Electric Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">11.3km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$600</strong> / month</p>
                  
                  <button className="btn">Rent now</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/car12.jpg"
                  alt="Toyota RAV4 2021"
                  loading="lazy"
                  width="440"
                  height="300"
                  className="w-100"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">BMW 3 Series</a>
                  </h3>
                  <data className="year chumma" value="2021">2021</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Electric Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">9km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$500</strong> / month</p>
                  
                  <button className="btn">Rent now</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/car13.jpg"
                  alt="Toyota RAV4 2021"
                  loading="lazy"
                  width="440"
                  height="300"
                  className="w-100"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Mercedes benz</a>
                  </h3>
                  <data className="year chumma" value="2021">2024</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">8.5km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$550</strong> / month</p>
                  
                  <button className="btn">Rent now</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/car11.jpg"
                  alt="Toyota RAV4 2021"
                  loading="lazy"
                  width="440"
                  height="300"
                  className="w-100"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Range Rover Sport</a>
                  </h3>
                  <data className="year chumma" value="2021">2024</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Electric Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">11.3km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$600</strong> / month</p>
                 
                  <button className="btn">Rent now</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/car12.jpg"
                  alt="Toyota RAV4 2021"
                  loading="lazy"
                  width="440"
                  height="300"
                  className="w-100"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">BMW 3 Series</a>
                  </h3>
                  <data className="year chumma" value="2021">2021</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Electric Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">9km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$500</strong> / month</p>
                 
                  <button className="btn">Rent now</button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img
                  src="/car13.jpg"
                  alt="Toyota RAV4 2021"
                  loading="lazy"
                  width="440"
                  height="300"
                  className="w-100"
                />
              </figure>

              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="#">Mercedes benz</a>
                  </h3>
                  <data className="year chumma" value="2021">2024</data>
                </div>

                <ul className="card-list">
                  <li className="card-list-item">
                    <IonIcon icon={peopleOutline} />
                    <span className="card-item-text">4 People</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={flashOutline} />
                    <span className="card-item-text">Hybrid</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={speedometerOutline} />
                    <span className="card-item-text">8.5km / 1-litre</span>
                  </li>
                  <li className="card-list-item">
                    <IonIcon icon={hardwareChipOutline} />
                    <span className="card-item-text">Automatic</span>
                  </li>
                </ul>

                <div className="card-price-wrapper">
                  <p className="card-price"><strong>$550</strong> / month</p>
                 
                  <button className="btn">Rent now</button>
                </div>
              </div>
            </div>
          </li>
              </ul>
            </div>
          </section>

          
          
        </article>
      </main>

      

      {/* Custom JavaScript and Ionicon link */}
      
    </div>
  );
}

export default Car;
