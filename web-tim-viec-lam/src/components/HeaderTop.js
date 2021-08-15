import React, { Component } from 'react'
import './../scss/herdertop.css';

export default class HeaderTop extends Component {
    render() {
        return (
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 left">
                            <div className="top-dangtintuyendung">
                                <button className="btn btn-dangtin">
                                    nhà tuyển dụng <br/>
                                    <span>
                                        Đăng tuyển và Tìm hồ sơ
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="col-sm-6 right text-sm-right text-center">
                            <div className="user"><a href className="btn btn-info"><i className="fa fa-user-circle" /></a></div>
                            <div className="list-link">
                                <ul>
                                    <li><a href><i className="fa fa-facebook" /></a></li>
                                    <li><a href><i className="fa fa-twitter" /></a></li>
                                    <li><a href><i className="fa fa-google" /></a></li>
                                    <li><a href><i className="fa fa-pinterest" /></a></li>
                                    <li><a href><i className="fa fa-google-plus" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
