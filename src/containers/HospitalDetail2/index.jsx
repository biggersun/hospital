import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Title from 'components/Title'
import * as actions from 'actions/hospitalDetail'

import './index.scss'

const propTypes = {
    content: PropTypes.string.isRequired,
    fetchHospitalDetail2: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}

const defaultProps = {
    content: '',
    id: null,
}

class HospitalDetail2 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const { fetchHospitalDetail2, id } = this.props
        const params = {
            id,
        }
        fetchHospitalDetail2(params)
    }

    render() {
        const { content, name } = this.props
        return (
            <div>
                <Title
                    title={name}
                />
                <div
                    className="HospitalDetail2-container"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        )
    }
}

HospitalDetail2.propTypes = propTypes

HospitalDetail2.defaultProps = defaultProps

const mapStateToprops = ({ ...state }, { location }) => {
    const { hospitalDetail: { hostpital2 } } = state
    let content = ''
    let name = ''
    if (hostpital2) {
        content = hostpital2.content
        name = hostpital2.name
    }
    const { id } = location.query
    return {
        id: Number(id),
        content,
        name,
    }
}

const mapDispatchToprops = { ...actions }
export default connect(mapStateToprops, mapDispatchToprops)(HospitalDetail2)
