import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import MenuApp from './components/MenuApp'
import NotFound from './components/NotFound'

import Animals from './containers/animals'
import Customers from './containers/customers'
import Employeers from './containers/appointments/employeers'
import Appointments from './containers/appointments'
import Orders from './containers/orders'
import Breeds from './containers/animals/breed/'
import Products from './containers/products/'
import Especies from './containers/animals/especies/'
import Dashboard from './containers/dashboards/'

export default (
  <Route path='/' component={App} >
    <IndexRoute component={MenuApp} />
    <Route path='customers' component={Customers} />
    <Route path='appointments' component={Appointments} >
      <Route path='employeers' component={Employeers} />
    </Route>
    <Route path='orders' component={Orders} />
    <Route path='products' component={Products} />
    <Route path='animals' component={Animals} >
      <Route path='breeds' component={Breeds} />
      <Route path='especies' component={Especies} />
    </Route>
    <Route path='dashboards' component={Dashboard}/>
    <Route path="*" component={NotFound}/>
  </Route>
)
