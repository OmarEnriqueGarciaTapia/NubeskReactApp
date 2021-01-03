import React, { Component } from "react";
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import { Main, Header, Footer } from './../../components';

function WithLayout(HocComponent){
    return class extends Component{
        render(){
            return (
                <Router>
                    <Main>
                        <Header />
                        <HocComponent />
                        <Footer />
                    </Main>
                </Router>
            );
        }
    }
}

export default WithLayout;
