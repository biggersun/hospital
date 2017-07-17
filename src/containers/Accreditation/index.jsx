import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import * as actions from 'actions/accreditation'
import Title from 'components/Title'
import './index.scss'

const propTypes = {
    fetchAccreditation: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    content1: PropTypes.array.isRequired,
    content2: PropTypes.array.isRequired,
}

const defaultProps = {}

class Accreditation extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        const { id, fetchAccreditation } = this.props
        fetchAccreditation({ id })
    }

    render() {
        const {
            content1,
            content2,
        } = this.props

        return (
            <div className="accreditation-container">
                <Title
                    title="办证指南"
                />
                <div className="content content1">
                    <div className="title">孕期办证</div>
                    <ul>
                        {content1.map(item => <li
                            key={item.certificateId}
                            onClick={() => hashHistory.push(`accreditation-detail?id=${item.certificateId}`)}
                        >
                            <h3>{item.name}</h3>
                            <p>{item.profile}</p>
                        </li>)}
                    </ul>
                </div>
                <div className="content">
                    <div className="title">新生儿办证</div>
                    <ul>
                        {content2.map(item => <li
                            key={item.certificateId}
                            onClick={() => hashHistory.push(`accreditation-detail?id=${item.certificateId}`)}
                        >
                            <h3>{item.name}</h3>
                            <p>{item.profile}</p>
                        </li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

Accreditation.propTypes = propTypes

Accreditation.defaultProps = defaultProps

const mapStateToProps = ({ accreditation }, { location }) => {
    const { id } = location.query
    const { content = [] } = accreditation
    const content1 = content.splice(0, 2)
    return {
        id: Number(id),
        content1,
        content2: content,
    }
}

const mapDispatchToProps = { ...actions }

export default connect(mapStateToProps, mapDispatchToProps)(Accreditation)
