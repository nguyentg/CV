import React, { Component } from 'react'
import './../scss/menu.css'
export default class Menu extends Component {
    render() {
        return (
            <div className="menu-logo">
                {/* <div className="container"> */}
                    <nav class="navbar navbar-expand-sm navbar-light bg-light nav-menu-top">
                        <a class="navbar-brand" href="/"><img src="/logo.png" alt="logo"></img></a>
                        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="collapsibleNavId">
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 float-sm-right menu-top-right text-sm-left text-xs-center">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">Trang chủ</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Việc làm</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">Quản lý CV</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Công ty</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Khám phá</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                {/* </div> */}
                
            </div>

        )
    }
}
