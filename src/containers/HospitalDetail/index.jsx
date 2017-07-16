import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions/hospitalDetail'
import PropTypes from 'prop-types'
import Title from 'components/Title'
import Content1 from './Content1'
import Content2 from './Content2'
import './index.scss'

const propTypes = {
    id: PropTypes.number.isRequired,
    fetchHospitalDetail: PropTypes.func.isRequired,
    hospital: PropTypes.object.isRequired,
    departments: PropTypes.array.isRequired,
    doctorsImg: PropTypes.object.isRequired,
    hospitalsImg: PropTypes.object.isRequired,
}

const defaultProps = {
    hospital: {},
    departments: [],
    doctorsImg: {},
    hospitalsImg: {},
}

class HospitalDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'first',
        }
        this.handleCheck = this.handleCheck.bind(this)
    }

    componentDidMount() {
        const { id, fetchHospitalDetail } = this.props
        fetchHospitalDetail({ id })
    }

    handleCheck(type) {
        const { departments } = this.props
        const department = departments.find(item => item[0].departmentId === type)
        if (type !== 'first') {
            this.setState({
                type,
                department: department[0],
            })
        } else {
            this.setState({
                type,
            })
        }
    }

    render() {
        const {
            hospital,
            departments,
            doctorsImg,
            hospitalsImg,
        } = this.props
        const { type, department } = this.state

        const firstClass = type === 'first' ? 'active' : ''

        return (
            <div className="hospitalDetail-container">
                <Title
                    title={hospital.name}
                />
                <ul className="tabBar">
                    <li
                        className={firstClass}
                        onClick={() => this.handleCheck('first')}
                    >详情</li>
                    {departments.map((item) => {
                        const itemClassName = type === item[0].departmentId ? 'active' : ''
                        return (<li
                            key={item[0].departmentId}
                            className={itemClassName}
                            onClick={() => this.handleCheck(item[0].departmentId)}
                        >
                            {item[0].name}
                        </li>)
                    })}
                </ul>
                { type === 'first' ?
                    <Content1
                        hospital={hospital}
                        hospitalsImg={hospitalsImg}
                    />
                    : <Content2
                        doctorsImg={doctorsImg}
                        department={department}
                    />
                }
            </div>
        )
    }
}

HospitalDetail.propTypes = propTypes

HospitalDetail.defaultProps = defaultProps

const mapStateToProps = ({ hospitalDetail }, { location }) => {
    const { id } = location.query
    const {
        departments,
        doctorsImg,
        hospital = [],
        hospitalsImg,
    } = hospitalDetail
    return {
        id: Number(id),
        departments,
        doctorsImg,
        hospital: hospital[0],
        hospitalsImg,
    }
}

const mapDispatchToProps = { ...actions }

export default connect(mapStateToProps, mapDispatchToProps)(HospitalDetail)
