import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { hashHistory } from 'react-router'
import './index.scss'

const propTypes = {
    title: PropTypes.string.isRequired,
    backTo: PropTypes.string.isRequired,
    color: PropTypes.string,
}

const defaultProps = {
    title: '医院',
    backTo: '',
    color: '#FDB3B6',
}

class Title extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { title, backTo, color } = this.props
        return (
            <div className="page-title" style={{ backgroundColor: color }}>
                {backTo ? <div className="back-btn" onClick={() => hashHistory.push(backTo)} />
                : <div className="back-btn" onClick={() => hashHistory.goBack()} />
                }
                <h1>{title}</h1>
                <div />
            </div>
        )
    }
}

Title.propTypes = propTypes

Title.defaultProps = defaultProps

export default Title
