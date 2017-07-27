import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const propTypes = {
    hospital: PropTypes.object.isRequired,
    hospitalsImg: PropTypes.object.isRequired,
}

const defaultProps = {}

class Content1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { hospital, hospitalsImg } = this.props
        return (
            <div className="hospital-detail-content">
                <div className="content-1">
                    <div className="title-box">
                        <img src={hospitalsImg[hospital.imagePath]} alt="" />
                        <div className="title-content">
                            <h3>{hospital.name}</h3>
                            <p>{hospital.level}</p>
                        </div>
                    </div>
                    <div className="profile">
                        <Link
                            to={`hospital-detail2?id=${hospital.hospitalId}`}
                        >
                            {hospital.profile}<em>查看完整介绍》</em>
                        </Link>
                    </div>
                </div>
                <div className="content-2">
                    <div className="left"><a href={hospital.mapurl}>{hospital.address}</a></div>
                    <a className="tel" href={`tel:${hospital.phone}`} />
                </div>
                <div className="content-3">
                    <div className="title">挂号指南</div>
                    <div className="title2">电话预约</div>
                    <p>{hospital.tel || '暂无信息'}</p>
                </div>
                <div className="content-3">
                    <div className="title">交通·停车</div>
                    <p>{hospital.traffic || '暂无信息'}</p>
                </div>
                <div className="content-3">
                    <div className="title">建档说明</div>
                    <p>{hospital.buildFile || '暂无信息'}</p>
                </div>
                <div className="content-3">
                    <Link to={`accreditation?id=${hospital.cityId}`}>
                        <div className="title canClick">办证指南</div>
                        <p>孕期到育儿相关的所有证件信息，点击查看</p>
                    </Link>
                </div>
            </div>
        )
    }
}

Content1.propTypes = propTypes

Content1.defaultProps = defaultProps

export default Content1
