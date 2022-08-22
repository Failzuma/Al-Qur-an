import React, { Component, Fragment } from "react";

class Alert extends Component {
    render() {
        return (
            <Fragment>
                {/* Alert */}
            <div className="jumbotron ms-4 me-4 text-white bg-dark text-center mt-5 mb-5 p-5 rounded-top">
                 <h1 className="display-4">Assalamualaikum, selamat datang di Qur'an Web</h1>
                 <p className="lead fs-4 mt-3">Website ini dibuat untuk mencari surah beserta ayat</p>
                 <hr className="my-4" />
                <div className="link p-4 fs-1 text-center">
                    <a className="btn btn-info mb-3 ms-2" href="https://github.com/Failzuma">
                     Contribute With Me
                    </a>
                </div>
                <p className="fs-5">Semoga website ini berguna untuk kita semua</p>
            </div>
            </Fragment>
        );
    }
}

export default Alert