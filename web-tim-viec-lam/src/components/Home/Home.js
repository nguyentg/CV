import React, { Component } from 'react'
import JobContent from './JobContent';
import HomeCarousel from './HomeCarousel';
import Employers from './Employers';

export default class Home extends Component {
    render() {
        return (
            <>
                <JobContent/>
                <HomeCarousel/>
                <Employers/>
            </>
        )
    }
}
