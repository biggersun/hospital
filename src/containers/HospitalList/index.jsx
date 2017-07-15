import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as actions from 'actions/hospitalList'
import PropTypes from 'prop-types'
import SearchBar from 'components/SearchBar'
import Title from 'components/Title'
import './index.scss'

const propTypes = {
    fetchHospitalList: PropTypes.func.isRequired,
    content: PropTypes.array.isRequired,
}

const defaultProps = {
    content: [],
}

class HospitalList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        const { fetchHospitalList } = this.props
        fetchHospitalList()
    }

    render() {
        const { content } = this.props
        return (
            <div className="hospital-list-container">
                <Title
                    title="附近医院"
                />
                <SearchBar
                    searchText="搜索医院"
                />
                <ul>
                    {content.map(item => <li
                        key={item.hospitalId}
                        onClick={() => {
                            browserHistory.push(`hospital-detail?id=${item.hospitalId}`)
                        }}
                    >
                        <div className="title">
                            <h3>{item.name}</h3>
                            <p>{item.level}</p>
                        </div>
                        <div className="address"><i />{item.address}</div>
                    </li>)}
                </ul>
            </div>
        )
    }
}

HospitalList.propTypes = propTypes

HospitalList.defaultProps = defaultProps

const mapStateToProps = ({ hospitalList }) => {
    const { content } = hospitalList
    return { content }
}

const mapDispatchToProps = { ...actions }

export default connect(mapStateToProps, mapDispatchToProps)(HospitalList)
