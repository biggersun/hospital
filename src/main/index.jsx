import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {
    AppContainer,
} from 'react-hot-loader'
import App from './app'

import './index.scss'

injectTapEventPlugin()

function render() {
    ReactDOM.render(
        module.hot ? <AppContainer><App /></AppContainer> : <App />,
        document.getElementById('app-container')
    )
}

render()

if (module.hot) {
    module.hot.accept('./app', render)
}
