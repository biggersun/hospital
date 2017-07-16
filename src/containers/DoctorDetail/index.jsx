import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as actions from 'actions/doctorDetail'
import { connect } from 'react-redux'
import Title from 'components/Title'
import './index.scss'

const propTypes = {
    fetchDoctorDetail: PropTypes.func.isRequired,
    content: PropTypes.object.isRequired,
    doctorsImg: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
}

const defaultProps = {
    content: {},
    doctorsImg: {},
}

class DoctorDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        const { id, fetchDoctorDetail } = this.props
        fetchDoctorDetail({ id })
    }

    render() {
        const {
            content,
            doctorsImg,
        } = this.props

        const imageP = content ? doctorsImg[content.imagePath] : ''
        return (
            <div className="doctor-container">
                <Title
                    title={content.name}
                />
                <div className="doctor-title">
                    <img src={imageP} alt="" />
                    <div className="title-content">
                        <div className="content-top">
                            <span>{content.name}</span>
                            <span>{content.level}</span>
                        </div>
                        <div className="content-bot">
                            {content.workingTime}
                        </div>
                    </div>
                </div>
                <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: content.content }}
                />
            </div>
        )
    }
}

DoctorDetail.propTypes = propTypes

DoctorDetail.defaultProps = defaultProps

const mapStateToProps = ({ doctorDetail }, { location }) => {
    const {
        content,
        doctorsImg,
    } = doctorDetail
    const { id } = location.query
    return {
        content,
        doctorsImg,
        id: Number(id),
    }
}

const mapDispatchToProps = { ...actions }

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetail)
