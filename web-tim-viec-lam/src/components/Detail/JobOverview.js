import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import '../scss/joboverview.css';

export default class JobOverview extends Component {
    render() {
        return (
            <div className="overview">

                {/*Thẻ điều hướng*/}
                <div className="thedieuhuong">
                    <Breadcrumb>
                        <BreadcrumbItem><a href="#">Trang Chủ</a></BreadcrumbItem>
                        <BreadcrumbItem><a href="#">Tìm Việc Làm Purchasing Staff</a></BreadcrumbItem>
                        <BreadcrumbItem className="active">Chi Tiết Công Việc</BreadcrumbItem>
                    </Breadcrumb>
                </div>                
                
                {/*Tổng quan công việc*/}
                <div className="card">
                    <div className="img-card">
                        <img src="https://static.topcv.vn/company_logos/cong-ty-tnhh-mtv-vien-thong-quoc-te-fpt-5d898f99a34de.jpg" alt="Company"/>    
                    </div>
                    <div className="company-inf-card">
                        <h4 className="job">Purchasing Staff - Nhân Viên Mua Hàng (Công Nghệ Thông Tin)</h4>
                        <h6>Công Ty TNHH MTV Viễn Thông Quốc Tế FPT</h6>
                        <p className="inf"><i class="fa fa-usd"></i> 18-25 triệu</p>
                        <p className="inf"><i class="fa fa-map-marker"></i> Hồ Chí Minh, Quận 7</p>
                    </div>
                    <div className="button-card">
                        <button className="btn green">Ứng tuyển ngay</button>
                        <p></p>
                        <button className="btn white">Lưu tin</button>
                    </div>
                </div>


                {/*Thanh công việc*/}
                <div className="thanh">
                    <nav class="navbar navbar-expand-sm navbar-light bg-light nav-menu-top">
                        <div>
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 float-sm-right menu-top-right text-sm-left text-xs-center">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">TIN TUYỂN DỤNG</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">CÔNG TY</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">VIỆC LÀM CÙNG CÔNG TY</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                {/*Chi tiết công việc*/}
                <div className="detail content">
                    <p className="h4">MÔ TẢ CÔNG VIỆC</p>
                    <ul className="a">
                        <li>Giám sát thi công các công trình theo sự phân công.</li>
                        <li>Trực tiếp kiểm tra, theo dõi, đánh giá quá trình thi công công trình tại hiện trường, cập nhập thông tin vào sổ nhật ký công tác hàng ngày.</li>
                        <li>Nhắc nhở và đình chỉ thi công khi phát hiện vi phạm quy trình, quy phạm kỹ thuật, chất lượng, an toàn công trình theo thiết kế và biện pháp đã duyệt.</li>
                        <li>Làm đầu mối giải quyết các vấn đề phát sinh trong thực tế thi công trên công trường.</li>
                        <li>Lập biên bản nghiệm thu công việc, hạng mục công trình.</li>
                        <li>Mở sổ nhật ký công trình để theo dõi công trình</li>
                    </ul>
                    <p className="h4">YÊU CẦU ỨNG VIÊN</p>
                    <ul className="a">
                        <li>Chưa có hoặc Đã có kinh nghiệm công trình xây dựng nhà xưởng, nhà công nghiệp</li>
                        <li>Tốt nghiệp cao đẳng, đại học đúng chuyên ngành xây dựng dân dụng và công nghiệp</li>
                        <li>Nhanh nhẹn chịu khó, chịu được áp lực công việc</li>
                        <li>Thành thạo một số phần mềm cơ bản</li>
                        <li>Gắn bó với công việc, có đủ sức khoẻ để làm việc và khả năng chịu áp lực cao</li>
                    </ul>
                    <p className="h4">CÁCH THỨC ỨNG TUYỂN</p>
                    <p className="content">Ứng viên nộp hồ sơ trực tuyến bằng cách bấm <span className="greenword">Ứng tuyển ngay</span> dưới đây.</p>
                    <div className="button-card">
                        <button className="btn green">Ứng tuyển ngay</button>
                        <p className="content"><i class="fa fa-clock-o"></i> Hạn nộp hồ sơ</p>       
                        <a className="content"><i class='fa fa-warning'></i> Phản ánh tin tuyển dụng không chính xác</a> 
                    </div>  
         
                </div>
                <div></div>

            </div>
        )
    }
}
