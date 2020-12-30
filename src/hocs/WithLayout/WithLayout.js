import React, { Component } from "react";
import { Main, Header, Footer } from './../../components';

function WithLayout(HocComponent){
    return class extends Component{
        render(){
            return (
                <Main>
                    <Header />
                    <HocComponent />
                    <Footer />
                </Main>
            );
        }
    }
}

export default WithLayout;
