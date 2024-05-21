import React from 'react'
import { AiOutlineMessage } from 'react-icons/ai'
import { CiFileOn } from 'react-icons/ci'
import { HiOutlineChartBar } from 'react-icons/hi'
import { IoSettingsOutline } from 'react-icons/io5'
import { LuCalendarDays } from 'react-icons/lu'
import { RxDashboard } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import Logo from './svg/Logo'

const Navigation = () => {
  return (
    <aside className='px-4 py-6 w-[250px] text-primary h-screen border-r border-line'>
      <div className='flex items-center gap-4'>
        <Logo/>
      <h2 className='mb-0'>School</h2>
      </div>
        

        <ul className='nav space-y-4 mt-20 '>
            <li className='nav-link'><Link to="/database/works"><RxDashboard/>Works</Link></li>
            <li className='nav-link'><Link to="/database/certificate"><AiOutlineMessage />Certificates</Link></li>
            <li className='nav-link'><Link to="/database/badges"><LuCalendarDays/>Badges</Link></li>
            <li className='nav-link'><Link to="/database/experience"><CiFileOn/>Skills</Link></li>
        </ul>
    </aside>
  )
}

export default Navigation