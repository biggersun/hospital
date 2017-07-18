import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Title from 'components/Title'
import * as actions from 'actions/accreditation'

import './index.scss'

const propTypes = {
    fetchAccreditationDetail: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
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

    componentWillMount() {
        const { fetchAccreditationDetail, id } = this.props
        const params = {
            id,
        }
        fetchAccreditationDetail(params)
    }

    render() {
        const { content } = this.props
        location.href = content
        return (
            <div>
                <Title
                    title="办证指南"
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

const mapStateToprops = ({ accreditation }, { location }) => {
    const {
        content1,
    } = accreditation
    const { id } = location.query
    return {
        id: Number(id),
        content: content1,
    }
}

const mapDispatchToprops = { ...actions }
export default connect(mapStateToprops, mapDispatchToprops)(HospitalDetail2)
