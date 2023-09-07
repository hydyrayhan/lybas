import React, { useContext } from 'react'
import CheckButton from './CheckButton';
import { styled } from '@mui/material/styles';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AppContext } from '../App';



const Sidebar = () => {
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

  const { t } = useContext(AppContext);


  return (
    <div className='sidebar'>
      <div className="select all_categories">
        <Accordion defaultExpanded={true} >
          <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: 'black' }} />} style={{ padding: '0', margin: '0' }}>
            <button className="top">
              <p className="top_title">{t('allCategories')}</p>
            </button>
          </AccordionSummary>
          <AccordionDetails>
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="select dressmakers">
        <div className="search">
          <span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.7474 11.7474C11.8519 11.6428 11.976 11.5599 12.1125 11.5032C12.2491 11.4466 12.3955 11.4175 12.5433 11.4175C12.6912 11.4175 12.8376 11.4466 12.9741 11.5032C13.1107 11.5599 13.2348 11.6428 13.3393 11.7474L17.6705 16.0788C17.8816 16.2897 18.0003 16.5759 18.0004 16.8743C18.0005 17.1728 17.882 17.459 17.6711 17.6701C17.4601 17.8812 17.174 17.9999 16.8756 18C16.5771 18.0001 16.2909 17.8816 16.0798 17.6707L11.7485 13.3393C11.6439 13.2349 11.5609 13.1108 11.5043 12.9742C11.4477 12.8376 11.4186 12.6912 11.4186 12.5434C11.4186 12.3955 11.4477 12.2491 11.5043 12.1126C11.5609 11.976 11.6439 11.8519 11.7485 11.7474H11.7474Z" fill="#0E1217" />
              <path d="M7.3125 13.5003C8.12505 13.5003 8.92965 13.3402 9.68035 13.0292C10.4311 12.7183 11.1132 12.2625 11.6877 11.6879C12.2623 11.1134 12.7181 10.4313 13.029 9.68053C13.34 8.92982 13.5 8.12521 13.5 7.31264C13.5 6.50007 13.34 5.69545 13.029 4.94474C12.7181 4.19402 12.2623 3.5119 11.6877 2.93733C11.1132 2.36276 10.4311 1.90698 9.68035 1.59603C8.92965 1.28507 8.12505 1.12502 7.3125 1.12502C5.67147 1.12502 4.09766 1.77693 2.93728 2.93733C1.7769 4.09773 1.125 5.67158 1.125 7.31264C1.125 8.95369 1.7769 10.5275 2.93728 11.6879C4.09766 12.8483 5.67147 13.5003 7.3125 13.5003ZM14.625 7.31264C14.625 9.25207 13.8546 11.1121 12.4832 12.4835C11.1119 13.8548 9.25189 14.6253 7.3125 14.6253C5.3731 14.6253 3.51314 13.8548 2.14178 12.4835C0.770422 11.1121 0 9.25207 0 7.31264C0 5.3732 0.770422 3.51321 2.14178 2.14182C3.51314 0.770436 5.3731 0 7.3125 0C9.25189 0 11.1119 0.770436 12.4832 2.14182C13.8546 3.51321 14.625 5.3732 14.625 7.31264Z" fill="#0E1217" />
              <path d="M7.3125 13.5003C8.12505 13.5003 8.92965 13.3402 9.68035 13.0292C10.4311 12.7183 11.1132 12.2625 11.6877 11.6879C12.2623 11.1134 12.7181 10.4313 13.029 9.68053C13.34 8.92982 13.5 8.12521 13.5 7.31264C13.5 6.50007 13.34 5.69545 13.029 4.94474C12.7181 4.19402 12.2623 3.5119 11.6877 2.93733C11.1132 2.36276 10.4311 1.90698 9.68035 1.59603C8.92965 1.28507 8.12505 1.12502 7.3125 1.12502C5.67147 1.12502 4.09766 1.77693 2.93728 2.93733C1.7769 4.09773 1.125 5.67158 1.125 7.31264C1.125 8.95369 1.7769 10.5275 2.93728 11.6879C4.09766 12.8483 5.67147 13.5003 7.3125 13.5003ZM14.625 7.31264C14.625 9.25207 13.8546 11.1121 12.4832 12.4835C11.1119 13.8548 9.25189 14.6253 7.3125 14.6253C5.3731 14.6253 3.51314 13.8548 2.14178 12.4835C0.770422 11.1121 0 9.25207 0 7.31264C0 5.3732 0.770422 3.51321 2.14178 2.14182C3.51314 0.770436 5.3731 0 7.3125 0C9.25189 0 11.1119 0.770436 12.4832 2.14182C13.8546 3.51321 14.625 5.3732 14.625 7.31264Z" stroke="#0E1217" />
            </svg>
          </span>
          <input type="text" placeholder='Search...' id='serch' />
        </div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: 'black' }} />} style={{ padding: '0', margin: '0' }}>
            <button className="top">
              <p className="top_title">{t('dressmakers')}</p>
            </button>
          </AccordionSummary>
          <AccordionDetails>
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="select all_categories">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: 'black' }} />} style={{ padding: '0', margin: '0' }}>
            <button className="top">
              <p className="top_title">{t('price')}</p>
            </button>
          </AccordionSummary>
          <AccordionDetails>
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
            <CheckButton />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default Sidebar