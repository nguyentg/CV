import React, { Component } from 'react'
import './../scss/carousel.css';

export default class Carousel extends Component {
    render() {
        return (
            <div className="carousel">
                <div id="slide-image" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#slide-image" data-slide-to={0} className="active" />
                        <li data-target="#slide-image" data-slide-to={1} />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="https://static.topcv.vn/img/Banner cho TopCV-01.png" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://static.topcv.vn/img/Dự án mới.png" alt="Second slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#slide-image" role="button" data-slide="prev">
                        <span className="carousel-prev-icon" aria-hidden="true"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#slide-image" role="button" data-slide="next">
                        <span className="carousel-next-icon" aria-hidden="true"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="text-xs-center content">
                    <div className="container">
                        <strong>Tạo CV</strong> chuyên nghiệp, nhận ngay việc làm ưng ý
                        <button className="btn btn-info btn-lg">Tạo CV ngay</button>
                    </div>
                </div>
            </div>
            

        )
    }
}
