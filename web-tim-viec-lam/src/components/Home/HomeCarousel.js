import React, { Component } from 'react'
import './../../scss/homecarousel.css';

export default class HomeCarousel extends Component {
    render() {
        return (          
            <div className="container home-carousel mb-4">
                <div id="carousel-image" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-image" data-slide-to={0} className="active" />
                        <li data-target="#carousel-image" data-slide-to={1} />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-sm-4 one-carousel">
                                    <img className="img-fluid" src="https://static.topcv.vn/img/Fecredit-tuyen-dung.jpeg" alt="First slide" />
                                </div>
                                <div className="col-sm-4 one-carousel">
                                    <img className="img-fluid" src="https://static.topcv.vn/img/Dự án mới.jpg" alt="First slide" />
                                </div>
                                <div className="col-sm-4 one-carousel">
                                    <img className="img-fluid" src="https://static.topcv.vn/img/banner%20DH%20NGUYEN%20TRAI.png" alt="First slide" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-sm-4 one-carousel">
                                    <img className="img-fluid" src="https://static.topcv.vn/img/900x500%20(1).png" alt="First slide" />
                                </div>
                                <div className="col-sm-4 one-carousel">
                                    <img className="img-fluid" src="https://static.topcv.vn/img/Fecredit-tuyen-dung.jpeg" alt="First slide" />
                                </div>
                                <div className="col-sm-4 one-carousel">
                                    <img className="img-fluid" src="https://static.topcv.vn/img/Dự án mới.jpg" alt="First slide" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-image" role="button" data-slide="prev">
                        <span className="carousel-prev-icon" aria-hidden="true"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-image" role="button" data-slide="next">
                        <span className="carousel-next-icon" aria-hidden="true"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}
