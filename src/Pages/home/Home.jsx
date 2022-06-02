import React from 'react';
import Featured from '../../components/featured/Featured';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import styles from  './Home.module.scss';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />

        <div className={styles.homeContainer}>
          <Featured />
          <h1 className={styles.homeTitle}>
            Browse by Property Types
          </h1>
          <PropertyList />
          <h1 className={styles.homeTitle}>
               Homes Guests Love
          </h1>
          <FeaturedProperties />
          <MailList />
          <Footer />
          

        </div>
    </div>
  )
}

export default Home;