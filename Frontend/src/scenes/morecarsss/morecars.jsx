import React from 'react';

function FeaturedCars() {
  return (
    <section className="section featured-car" id="featured-car">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">All Cars</h2>
        </div>
        <ul className="featured-car-list">
          
        <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img src="/car13.jpg" alt="Toyta RAV4 2021" loading="lazy" width="440" height="300" className="w-100" />
              </figure>
              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="/suvcar">SUV</a>
                  </h3>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img src="/car13.jpg" alt="Toyta RAV4 2021" loading="lazy" width="440" height="300" className="w-100" />
              </figure>
              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="/suvcar">HATCHBACK</a>
                  </h3>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img src="/car13.jpg" alt="Toyta RAV4 2021" loading="lazy" width="440" height="300" className="w-100" />
              </figure>
              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="/suvcar">SEDAN</a>
                  </h3>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img src="/car13.jpg" alt="Toyta RAV4 2021" loading="lazy" width="440" height="300" className="w-100" />
              </figure>
              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="/suvcar">JEEP</a>
                  </h3>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img src="/car13.jpg" alt="Toyta RAV4 2021" loading="lazy" width="440" height="300" className="w-100" />
              </figure>
              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="/suvcar">VAN</a>
                  </h3>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="featured-car-card">
              <figure className="card-banner">
                <img src="/car13.jpg" alt="Toyta RAV4 2021" loading="lazy" width="440" height="300" className="w-100" />
              </figure>
              <div className="card-content">
                <div className="card-title-wrapper">
                  <h3 className="h3 card-title">
                    <a href="/suvcar">SPORT</a>
                  </h3>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FeaturedCars;
