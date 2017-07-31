import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const propTypes = {
    content: PropTypes.string.isRequired,
}

const defaultProps = {}

class Airtcle extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const {
            content,
        } = this.props
        return (
            <div>
                <div
                    className="airtcle-container"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        )
    }
}

Airtcle.propTypes = propTypes

Airtcle.defaultProps = defaultProps

export default Airtcle
