import React from 'react';
import Services from '../../Services/Services';
import Navigation from '../../Shared/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <ExceptionalDental></ExceptionalDental>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;