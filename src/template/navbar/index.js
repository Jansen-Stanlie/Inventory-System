import React, {Component} from "react";
import {Menu} from "../../component";
import logo from "../../image/avatar11066402_1.png";
import "./navbar.css";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    checkActivePage = (checkPage) => {
        const page = this.props.page;
        if (checkPage === page) return "active";
        return "";
    };
    checkLogin = () => {
        const {loginStatus} = this.props;

    };
    checkLogout = () => {
        const {loginStatus, changeStatus} = this.props;
        if (loginStatus)
            return (
                <>
                    <Link to="/labarugi" activePage={this.checkActivePage("labarugi")}>
                        <Menu className="menu">Laba Rugi</Menu>
                    </Link>
                    <Link to="/home">
                        <Menu redirect={() => changeStatus(false, "Home")}>Logout</Menu>
                    </Link>
                </>
            );
        return (
            <>

                <Menu className="menu" isActivePage={this.checkActivePage("login")}>
                    <Link to="/login">Login</Link>
                </Menu>

            </>
        );
    };
    redirectPage = () => {
        this.props.goToPage("Home");
    };

    render() {
        const {goToPage,loginStatus} = this.props;
        // return (
        //     <Menu
        //         activePage={this.checkActivePage("productList")}
        //         redirect={() =>
        //             loginStatus ? (
        //                 <Link to="/productlist">
        //                     <Menu className="menu">
        //
        //                         ProductList
        //
        //                     </Menu>
        //                 </Link>
        //             ) : (
        //                 Swal.fire(
        //                     "Kijang Satu ganti",
        //                     "Penyusup, bukan Admin Banteng",
        //                     "error"
        //                 )
        //             )
        //         }
        //     >
        //         ProductList
        //     </Menu>
        // );
        return (
            <>
                <div className="topnav">
                    <div
                        className="logo"
                        activePage={this.checkActivePage("home")}
                        onClick={() => goToPage("home")}
                    >
						<span>
							<img src={logo} alt="logo"/>
						</span>
                        Tokopedei
                    </div>
                    <div className="topnav-right">
                        <Link to="/home">
                            <div className="menu">Home</div>
                        </Link>
                        <Link to="/about">
                            <div>About</div>
                        </Link>
                        {/*<Menu*/}
                        {/*    activePage={this.checkActivePage("home")}*/}
                        {/*    redirect={() => goToPage("home")}*/}
                        {/*>*/}
                        {/*    Home*/}
                        {/*</Menu>*/}
                        {/*<Menu*/}
                        {/*    activePage={this.checkActivePage("about")}*/}
                        {/*    redirect={() => goToPage("about")}*/}
                        {/*>*/}
                        {/*    About*/}
                        {/*</Menu>*/}


                        {/* <Menu
              activePage={this.checkActivePage("AddForm")}
              redirect={() => goToPage("AddForm")}
            >
              Add Form
            </Menu> */}

                        {this.checkLogout()}
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;
