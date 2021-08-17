import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../scss/search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    printListMajor = () => {
        return this.props.listMajor.map(value => {
            return <option value={value._id}>{value.name}</option>;
        })
    }
    
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
                                    <option value="Back-End Developer"></option>
                                    <option value="Front-End Developer"></option>
                                    <option value="FullStack Developer"></option>
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
                                    <option>Hồ Chí Minh</option>
                                    <option>Hà Nội</option>
                                    <option>Đà Nẵng</option>
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
                                    {this.printListMajor()}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-1">
                            <button className="btn btn-success"><i className="fa fa-search"></i> Tìm</button>
                        </div>
                    </div>
                </div>	
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        listMajor: state.majorState.listMajor
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch({type:''})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
