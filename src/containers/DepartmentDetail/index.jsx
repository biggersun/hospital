import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Title from 'components/Title'
import Airtcle from 'components/Airtcle'
import * as actions from 'actions/hospitalDetail'

import './index.scss'

const propTypes = {
    fetchDep: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

const defaultProps = {
    content: '',
    id: null,
}

class DepDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
        const { fetchDep, id } = this.props
        const params = {
            id,
        }
        fetchDep(params)
    }

    render() {
        const { content, name } = this.props
        return (
            <div>
                <Title
                    title={name}
                />
                <Airtcle
                    content={content}
                />
            </div>
        )
    }
}

DepDetail.propTypes = propTypes

DepDetail.defaultProps = defaultProps

const mapStateToprops = ({ hospitalDetail }, { location }) => {
    const {
        depDetail,
    } = hospitalDetail

    const content = depDetail ? depDetail.content : ''
    const { id, name } = location.query
    return {
        id: Number(id),
        name,
        content,
    }
}

const mapDispatchToprops = { ...actions }
export default connect(mapStateToprops, mapDispatchToprops)(DepDetail)
