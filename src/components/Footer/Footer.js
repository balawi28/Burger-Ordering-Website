import React from 'react';
import { ReactComponent as IconLocation } from '../../icons/location.svg';
import { ReactComponent as IconTelephone } from '../../icons/telephone.svg';
import { ReactComponent as IconUser } from '../../icons/user.svg';
import FooterElement from '../FooterElement/FooterElement';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Footer.css';

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer-OuterContainer'>
        <div className='Footer-InnerContainer'>
          <FooterElement
            title='Contact Us'
            data={['burger@mail.com', '00972595662147']}
            Icon={IconTelephone}
          />
          <FooterElement
            title='Our Location'
            data={['Al-Masyon, Ramallah', 'PO Box 23253 ']}
            Icon={IconLocation}
          />
          <FooterElement
            title='About Us'
            data={['Burger Restaurant', 'New Methods']}
            Icon={IconUser}
          />
        </div>
      </div>
    </div>
  );
}
