import React, { Component } from 'react'
import './../scss/footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 cotf1 mb-2" >
                                <a href="/"><img src="/logo.png" alt="" className="logof" /></a>
                                <p>Marsh mallow muffin soufflé jelly-o tart cake Marshmallow macaroon jelly jubes dont tiramisu croissant cake.</p>
                                <div className="motdong">
                                    <i className="fa fa-paper-plane-o" />
                                    <span className="textmd">Address : 44 New Design Street, Melbourne 005</span>
                                </div>
                                <div className="motdong">
                                    <i className="fa fa-phone" />
                                    <span className="textmd">Phone : (01) 800 433 633</span>
                                </div>
                                <div className="motdong">
                                    <i className="fa fa-envelope-o" />
                                    <span className="textmd">Email : info@Example.com</span>
                                </div>
                            </div>  {/* HET COTF1 */}         
                            <div className="col-sm-6">
                                <h2 className="tdft">Openning</h2>
                                <div className="openning">
                                    <div className="phai float-xs-right">08:00 am - 18:00 pm</div>
                                    <div className="trai">Mon — Fri</div>
                                </div>
                                <div className="openning">
                                    <div className="phai float-xs-right">10:00 am - 16:00 pm</div>
                                    <div className="trai">Saturday </div>
                                </div>
                                <div className="openning">
                                    <div className="phai float-xs-right">Không làm việc.</div>
                                    <div className="trai">Sunday </div>
                                </div>

                                </div>  {/* HET COTF4 */}
                            </div>
                        </div>
                    </div>  {/* HET FOOTERTOP */}
                <div className="footer-bottom text-center">
                    Copyrights © 2015  All Rights Reserved. 
                </div>
            </div>
        )
    }
}
