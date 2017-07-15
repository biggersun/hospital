import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    children: PropTypes.object.isRequired,
}

const defaultProps = {
    children: {},
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="app">
                {this.props.children}
            </div>
        )
    }
}

App.propTypes = propTypes

App.defaultProps = defaultProps

export default App
