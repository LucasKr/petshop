import React, { Component } from 'react'
import { Link } from 'react-router'

export default class MenuApp extends Component {
  render() {
    return (
      <div id="menuApp">
        <Link to="/breeds" className="menuItem" style={{backgroundColor : '#88C4CC'}}>
          <i className="fa fa-qq fa-5x"/>
          <br/>
          <span className="menuDescription">Animais</span>
        </Link>

        <Link to="/breeds" className="menuItem"  style={{backgroundColor : '#388D99'}}>
          <i className="fa fa-cogs fa-5x"/>
          <br/>
          <span className="menuDescription">Ordens de serviço</span>
        </Link>

        <Link to="/breeds" className="menuItem"  style={{backgroundColor : '#C3FFE5'}}>
          <i className="fa fa-calendar fa-5x"/>
          <br/>
          <span className="menuDescription">Agendas</span>
        </Link>

        <Link to="/breeds" className="menuItem" style={{backgroundColor : '#FF8383'}}>
          <i className="fa fa-area-chart fa-5x"/>
          <br/>
          <span className="menuDescription">Dashboards</span>
        </Link>

        <Link to="/breeds" className="menuItem" style={{backgroundColor : '#CC88AA'}}>
          <i className="fa fa-barcode fa-5x"/>
          <br/>
          <span className="menuDescription">Produtos</span>
        </Link>

        <Link to="/breeds" className="menuItem" style={{backgroundColor : '#7FDEC0'}}>
          <i className="fa fa-users fa-5x"/>
          <br/>
          <span className="menuDescription">Clientes</span>
        </Link>

      </div>)
  }
}
