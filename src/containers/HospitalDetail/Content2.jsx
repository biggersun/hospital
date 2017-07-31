import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, hashHistory } from 'react-router'
import URI from 'urijs'
import { DEPARTMENT_DETIAL } from 'constants/router'

const propTypes = {
    department: PropTypes.object.isRequired,
    doctorsImg: PropTypes.object.isRequired,
}

const defaultProps = {}

class Content2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const {
            department,
            doctorsImg,
        } = this.props
        const departmentUri = new URI(DEPARTMENT_DETIAL)
        departmentUri.setQuery({
            id: department.departmentId,
            name: department.name,
        })
        return (
            <div className="department-detail">
                <div
                    className="content content1"
                >
                    <Link
                        to={departmentUri.toString()}
                    >
                        <p
                            dangerouslySetInnerHTML={{ __html: department.profile }}
                        />
                        <em>查看完整介绍》</em>
                    </Link>
                </div>
                <div className="content content2">
                    <div className="left">
                        <a href={department.mapurl}>{department.address}</a>
                    </div>
                    <a className="tel" href={`tel:${department.phone}`} />
                </div>
                <div className="content3">
                    <p>{department.proposal}</p>
                </div>
                <div className="content content4">
                    <div className="title">医生</div>
                    <ul>
                        {department.doctors.map(item => <li
                            key={item.doctorId}
                            onClick={() => { hashHistory.push(`doctor-detail?id=${item.doctorId}`) }}
                        >
                            <img src={doctorsImg[item.imagePath]} alt="" />
                            <p>{item.name}</p>
                        </li>)}
                    </ul>
                </div>
                <div className="content">
                    <div className="title">信息公示</div>
                    <p>{department.bed}</p>
                </div>
            </div>
        )
    }
}

Content2.propTypes = propTypes

Content2.defaultProps = defaultProps

export default Content2
