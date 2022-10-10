import { EllipsisOutlined, LeftOutlined } from '@ant-design/icons'
import logo from '../assets/icon.png'
import React from 'react'

const Title = () => {
  return (
    <div className='title'>
        <LeftOutlined/>
        <div className="brand">
            <img src={logo} alt="" />
            <span className="text-bold">FCMB: Mobile</span>
        </div>
        <EllipsisOutlined/>
    </div>
  )
}

export default Title