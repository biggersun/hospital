import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SearchBar } from 'react-weui'

import 'weui'
import './index.scss'


const propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    searchText: PropTypes.string,
}

export default class SearchBar1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
        }
    }

    render() {
        const {
            handleSubmit,
            handleCancel,
            searchText = '搜索食物',
        } = this.props
        return (
            <SearchBar
                className="searchBar"
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                placeholder={searchText}
                lang={{
                    cancel: '取消',
                }}
            />
        )
    }
}

SearchBar1.propTypes = propTypes
