import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { relativeToRoot } from 'assets/js/util'

import App from 'containers/App'
import HospitalList from 'containers/HospitalList'
import HospitalDetail from 'containers/HospitalDetail'

export default function RouteTree({ store, indexPath }) {
    const history = syncHistoryWithStore(browserHistory, store)
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRedirect to={relativeToRoot(indexPath)} />
                    <Route path="hospital-list" component={HospitalList} />
                    <Route path="hospital-detail" component={HospitalDetail} />
                </Route>
            </Router>
        </Provider>
    )
}

RouteTree.propTypes = {
    store: PropTypes.object.isRequired,
    indexPath: PropTypes.string.isRequired,
}
