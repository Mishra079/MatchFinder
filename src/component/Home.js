import React from 'react';
import '../App.css';

import cl1 from '../image/cl1.jpg'
const Home = () => {
  return (
    <>
   <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={cl1} alt='' style={{height:'400px',width:'100%'}}/>
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    <section id="home" className="home">
      <h2>Welcome to MatchFinder</h2><br/>
      <p>Your journey to finding the perfect match begins here.</p>
      <p>Welcome to the most affordable matrimonial site in India - Matchfinder. We have brides and grooms from 2000 different communities in India seeking matches from profiles like yours. Sign-up for free to get access to unlimited Indian brides and grooms. Be assured that your data is 100% secure on Matchfinder. Some other benefits of our matchmaking site include daily & weekly match alerts, enhanced search and single-page registration. </p>
      <a href="/registration" className="btn">Register Now</a>
    </section>
    </>
  );
};

export default Home;
