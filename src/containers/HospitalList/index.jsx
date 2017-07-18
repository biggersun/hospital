import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import * as actions from 'actions/hospitalList'
import PropTypes from 'prop-types'
import SearchBar from 'components/SearchBar'
import Title from 'components/Title'
import './index.scss'

const propTypes = {
    fetchHospitalList: PropTypes.func.isRequired,
    searchHospital: PropTypes.func.isRequired,
    content: PropTypes.array.isRequired,
}

const defaultProps = {
    content: [],
}

class HospitalList extends Component {
    constructor(props) {
        super(props)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidMount() {
        const { fetchHospitalList } = this.props
        fetchHospitalList()
    }

    handleSearch(text) {
        const { searchHospital } = this.props
        searchHospital({ name: text })
    }

    handleCancel() {
        const { fetchHospitalList } = this.props
        fetchHospitalList()
    }

    render() {
        const { content } = this.props
        return (
            <div className="hospital-list-container">
                <Title
                    title="附近医院"
                    backBtn={false}
                />
                <SearchBar
                    searchText="搜索医院"
                    handleSubmit={this.handleSearch}
                    handleCancel={this.handleCancel}
                />
                <ul>
                    {content.map(item => <li
                        key={item.hospitalId}
                    >
                        <div
                            className="title"
                            onClick={() => {
                                hashHistory.push(`hospital-detail?id=${item.hospitalId}`)
                            }}
                        >
                            <h3>{item.name}</h3>
                            <p>{item.level}</p>
                        </div>
                        <a href={item.mapurl}>
                            <div className="address"><i />{item.address}</div>
                        </a>
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
