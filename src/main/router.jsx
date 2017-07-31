import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { relativeToRoot } from 'assets/js/util'

import App from 'containers/App'
import HospitalList from 'containers/HospitalList'
import HospitalDetail from 'containers/HospitalDetail'
import HospitalDetail2 from 'containers/HospitalDetail2'
import DoctorDetail from 'containers/DoctorDetail'
import Accreditation from 'containers/Accreditation'
import DepDetail from 'containers/DepartmentDetail'

export default function RouteTree({ store, indexPath }) {
    const history = syncHistoryWithStore(hashHistory, store)
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRedirect to={relativeToRoot(indexPath)} />
                    <Route path="hospital-list" component={HospitalList} />
                    <Route path="hospital-detail" component={HospitalDetail} />
                    <Route path="hospital-detail2" component={HospitalDetail2} />
                    <Route path="doctor-detail" component={DoctorDetail} />
                    <Route path="accreditation" component={Accreditation} />
                    <Route path="department-detail" component={DepDetail} />
                </Route>
            </Router>
        </Provider>
    )
}

RouteTree.propTypes = {
    store: PropTypes.object.isRequired,
    indexPath: PropTypes.string.isRequired,
}
