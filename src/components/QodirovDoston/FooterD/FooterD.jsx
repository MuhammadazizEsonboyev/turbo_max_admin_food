import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../FooterD/FooterD.css'

const FooterD = () => {
  return (
    <>
      <div className='icons'>
        <div className="gap">
          <GitHubIcon id='git' style={{ marginRight: '90px' }} />
          <InstagramIcon id='git' style={{ marginRight: '90px' }} />
          <TelegramIcon id='git' style={{ marginRight: '90px' }} />
          <LinkedInIcon id='git' style={{ marginRight: '90px' }} />
        </div>
        <p className='copy'>Copyright ©2020 All rights reserved </p>
      </div>
    </>
  )
}
export default FooterD
