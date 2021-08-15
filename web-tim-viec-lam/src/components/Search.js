import React, { Component } from 'react'
import './../scss/search.css';

export default class Search extends Component {
    render() {
        return (
            <div className="search">
                <div className="container"> 
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text form-control"><i className="fa fa-search" /></span>
                                </div>
                                <input list="danhsach" type="text" className="form-control keyword" placeholder="Tên công việc, vị trí bạn muốn ứng tuyển." />
                                <datalist id="danhsach">
                                    <option value="Công nghệ thông tin"></option>
                                    <option value="Kĩ thuật dữ liệu"></option>
                                    <option value="Kế toán"></option>
                                    <option value="Tài chính ngân hàng"></option>
                                    <option value="Kinh doanh bất động sản"></option>
                                    <option value="Kĩ sư phần mềm"></option>
                                </datalist>
                            </div>
                        </div>	
                        <div className="col-sm-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text form-control"><i class="fa fa-map-marker"></i></span>
                                </div>
                                <select className="custom-select">
                                    <option>Địa điểm.</option>
                                    <option>option 2</option>
                                    <option>option 3</option>
                                    <option>option 4</option>
                                    <option>option 5</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text form-control"><i class="fa fa-briefcase"></i></span>
                                </div>
                                <select className="custom-select">
                                    <option>Ngành nghề.</option>
                                    <option>option 2</option>
                                    <option>option 3</option>
                                    <option>option 4</option>
                                    <option>option 5</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-1">
                            <button className="btn btn-success"><i className="fa fa-search"></i> Tìm</button>
                        </div>
                    </div>
                </div>	
            </div>

        )
    }
}
