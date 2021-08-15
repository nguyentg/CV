import React, { Component } from 'react'

const style = {
    position:'absolute',
    left:'50%',
    transform:'translate(-50%,-50%)'
}

export default class Pagination extends Component {
    render() {
        return (
            <div className="container mt-2" style={{position:'relative'}}>
                <nav aria-label="Page navigation example" style={style}>
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="/" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        <li className="page-item active"><a className="page-link" href="/">1</a></li>
                        <li className="page-item"><a className="page-link" href="/">2</a></li>
                        <li className="page-item"><a className="page-link" href="/">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="/" aria-label="Next">
                                <span aria-hidden="true">»</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            
        )
    }
}
