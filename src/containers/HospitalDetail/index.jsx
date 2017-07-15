import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const propTypes = {}

const defaultProps = {}

class HospitalDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>HospitalDetail</h1>
            </div>
        )
    }
}

HospitalDetail.propTypes = propTypes

HospitalDetail.defaultProps = defaultProps

export default HospitalDetail
