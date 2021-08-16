import React, { Component } from 'react';
import HeaderTop from '../HeaderTop';
import Menu from '../Menu';
import Search from '../Search';
import Carousel from '../Carousel';
import Footer from '../Footer';
import JobOverview from './JobOverview';

export default class JobDetail extends Component {
    render() {
        return (
            <>
            <HeaderTop/>
            <Menu/>
            <Search/>
            <Carousel/>
            <JobOverview/>
            <Footer/>
            </>
        );
    }
}

