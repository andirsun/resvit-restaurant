import React, {Component} from 'react';
import logo from '../images/RevitBlanco.png';
import {MenuProfile} from '../components/MenuProfile'
import {Title} from '../components/Title'
import TableExampleApprove from '../components/UserTable';
import CardExampleCard from '../components/CardProfile'
import '../styles/menu.css';
import '../styles/AdminProfileStyle.css';

export class AdminProfile extends Component{
    render(){
        return(
            <div>
                <header className="App-header">
                    <div className="Menu">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <MenuProfile></MenuProfile>
                        <br></br>
                    </div>
                </header>
                <div className="decorBar"></div>
                    <div className="ui bottom attached button">
                        <Title>Bienvenido</Title>
                    </div>
                <div className='main_contentP'>
                    <div className='containerP1'>
                        <TableExampleApprove></TableExampleApprove>
                    </div>
                    <div className='containerP'>
                        <CardExampleCard></CardExampleCard>
                    </div>
                </div>
            </div>
        )
    }
}