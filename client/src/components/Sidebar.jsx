import React, { useContext, useEffect, useState } from 'react';
import CheckButton from './CheckButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AppContext } from '../App';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';



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

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
}));




const Sidebar = ({ dressmakers = false, sizes, categories, materials, colors, sort, setSort }) => {
  const [sidebar, setSidebar] = useState(false);
  const [expanded, setExpanded] = useState(dressmakers ? 'panel5' : 'panel1');


  useEffect(() => {
    sidebar ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';
  }, [sidebar])

  const getSortedData = (name, value) => {
    if (name === 'price') {
      setSort({ ...sort, price: value.min_price === sort.price.min_price ? {} : value })
    } else {
      const updatedArray = sort[name].includes(value)
          ? sort[name].filter((item) => item !== value)
          : [...sort[name], value];
      const sendSort =  {
        ...sort,
        [name]: updatedArray,
      };
      setSort(sendSort);
    }
  }

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const { t, lang } = useContext(AppContext);
  return (
    <>
      {
        sidebar ?
          <div className='sidebar_mobile_back fixed top-0 left-0 h-screen w-screen bg-lybas-sidebar-back z-[8] md:hidden' onClick={() => setSidebar(false)}></div>
          : ''
      }
      <div className={"sidebar rounded-3xl md:rounded-lg py-5 fixed z-[9] bg-white left-0 right-0 bottom-0 md:relative container md:mx-0 min-w-full mx-auto px-6 md:px-0 md:max-h-full transition-max-height duration-300 " + (sidebar ? 'max-h-[90%]' : 'max-h-[50px]')}>
        <div className="sidebar_mobile-top w-full flex md:hidden justify-center py-5" onClick={() => setSidebar(!sidebar)}>
          <span className="h-2 w-10 bg-gray-500 rounded-full flex justify-center"></span>
        </div>
        <div className="p-5 max-h-[80vh] md:max-h-auto overflow-auto w-full md:w-auto">
          {
            !dressmakers && <>
              <div className="select all_categories">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: 'black' }} />} style={{ padding: '0', margin: '0' }}>
                    <button className="top">
                      <p className="top_title">{t('allCategories')}</p>
                    </button>
                  </AccordionSummary>
                  <hr style={{ marginBottom: '10px' }} />
                  <AccordionDetails>
                    {
                      categories?.length > 0 && categories.map((cate, index) => (
                        <CheckButton checked={sort.category.includes(cate.id)} key={index} data={sort} setData={getSortedData} name={'category'} value={cate.id} text={t(cate['name_' + lang])} />
                      ))
                    }
                  </AccordionDetails>
                </Accordion>
              </div>

              {/* <div className="select dressmakers mt-5">
                <div className="search">
                  <span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.7474 11.7474C11.8519 11.6428 11.976 11.5599 12.1125 11.5032C12.2491 11.4466 12.3955 11.4175 12.5433 11.4175C12.6912 11.4175 12.8376 11.4466 12.9741 11.5032C13.1107 11.5599 13.2348 11.6428 13.3393 11.7474L17.6705 16.0788C17.8816 16.2897 18.0003 16.5759 18.0004 16.8743C18.0005 17.1728 17.882 17.459 17.6711 17.6701C17.4601 17.8812 17.174 17.9999 16.8756 18C16.5771 18.0001 16.2909 17.8816 16.0798 17.6707L11.7485 13.3393C11.6439 13.2349 11.5609 13.1108 11.5043 12.9742C11.4477 12.8376 11.4186 12.6912 11.4186 12.5434C11.4186 12.3955 11.4477 12.2491 11.5043 12.1126C11.5609 11.976 11.6439 11.8519 11.7485 11.7474H11.7474Z"
                        fill="#0E1217"
                      />
                      <path
                        d="M7.3125 13.5003C8.12505 13.5003 8.92965 13.3402 9.68035 13.0292C10.4311 12.7183 11.1132 12.2625 11.6877 11.6879C12.2623 11.1134 12.7181 10.4313 13.029 9.68053C13.34 8.92982 13.5 8.12521 13.5 7.31264C13.5 6.50007 13.34 5.69545 13.029 4.94474C12.7181 4.19402 12.2623 3.5119 11.6877 2.93733C11.1132 2.36276 10.4311 1.90698 9.68035 1.59603C8.92965 1.28507 8.12505 1.12502 7.3125 1.12502C5.67147 1.12502 4.09766 1.77693 2.93728 2.93733C1.7769 4.09773 1.125 5.67158 1.125 7.31264C1.125 8.95369 1.7769 10.5275 2.93728 11.6879C4.09766 12.8483 5.67147 13.5003 7.3125 13.5003ZM14.625 7.31264C14.625 9.25207 13.8546 11.1121 12.4832 12.4835C11.1119 13.8548 9.25189 14.6253 7.3125 14.6253C5.3731 14.6253 3.51314 13.8548 2.14178 12.4835C0.770422 11.1121 0 9.25207 0 7.31264C0 5.3732 0.770422 3.51321 2.14178 2.14182C3.51314 0.770436 5.3731 0 7.3125 0C9.25189 0 11.1119 0.770436 12.4832 2.14182C13.8546 3.51321 14.625 5.3732 14.625 7.31264Z"
                        fill="#0E1217"
                      />
                      <path
                        d="M7.3125 13.5003C8.12505 13.5003 8.92965 13.3402 9.68035 13.0292C10.4311 12.7183 11.1132 12.2625 11.6877 11.6879C12.2623 11.1134 12.7181 10.4313 13.029 9.68053C13.34 8.92982 13.5 8.12521 13.5 7.31264C13.5 6.50007 13.34 5.69545 13.029 4.94474C12.7181 4.19402 12.2623 3.5119 11.6877 2.93733C11.1132 2.36276 10.4311 1.90698 9.68035 1.59603C8.92965 1.28507 8.12505 1.12502 7.3125 1.12502C5.67147 1.12502 4.09766 1.77693 2.93728 2.93733C1.7769 4.09773 1.125 5.67158 1.125 7.31264C1.125 8.95369 1.7769 10.5275 2.93728 11.6879C4.09766 12.8483 5.67147 13.5003 7.3125 13.5003ZM14.625 7.31264C14.625 9.25207 13.8546 11.1121 12.4832 12.4835C11.1119 13.8548 9.25189 14.6253 7.3125 14.6253C5.3731 14.6253 3.51314 13.8548 2.14178 12.4835C0.770422 11.1121 0 9.25207 0 7.31264C0 5.3732 0.770422 3.51321 2.14178 2.14182C3.51314 0.770436 5.3731 0 7.3125 0C9.25189 0 11.1119 0.770436 12.4832 2.14182C13.8546 3.51321 14.625 5.3732 14.625 7.31264Z"
                        stroke="#0E1217"
                      />
                    </svg>
                  </span>
                  <input type="text" placeholder="Search..." id="serch" />
                </div>
                <Accordion className="mt-5">
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
              </div> */}

              <div className="select all_categories">
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: 'black' }} />} style={{ padding: '0', margin: '0' }}>
                    <button className="top">
                      <p className="top_title">{t('price')}</p>
                    </button>
                  </AccordionSummary>
                  <hr style={{ marginBottom: '10px' }} />
                  <AccordionDetails>
                    <CheckButton checked={sort.price.min_price == 0} data={sort} setData={getSortedData} name={'price'} value={{ min_price: 0, max_price: 100 }} text={'0 TMT - 100 TMT'} />
                    <CheckButton checked={sort.price.min_price == 100} data={sort} setData={getSortedData} name={'price'} value={{ min_price: 100, max_price: 400 }} text={'100 TMT - 400 TMT'} />
                    <CheckButton checked={sort.price.min_price == 400} data={sort} setData={getSortedData} name={'price'} value={{ min_price: 400, max_price: 700 }} text={'400 TMT - 700 TMT'} />
                    <CheckButton checked={sort.price.min_price == 700} data={sort} setData={getSortedData} name={'price'} value={{ min_price: 700, max_price: 1000 }} text={'700 TMT - 1000 TMT'} />
                    <CheckButton checked={sort.price.min_price == 1000} data={sort} setData={getSortedData} name={'price'} value={{ min_price: 1000, max_price: 2000 }} text={'1000 TMT - 2000 TMT'} />
                    <CheckButton checked={sort.price.min_price == 2000} data={sort} setData={getSortedData} name={'price'} value={{ min_price: 2000, max_price: '' }} text={'2000 TMT +'} />
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="select all_categories">
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: 'black' }} />} style={{ padding: '0', margin: '0' }}>
                    <button className="top">
                      <p className="top_title">{t('size')}</p>
                    </button>
                  </AccordionSummary>
                  <hr style={{ marginBottom: '10px' }} />
                  <AccordionDetails>
                    {
                      sizes?.length > 0 && sizes.map((size, index) => (
                        <CheckButton checked={sort.size.includes(size.id)} key={index} data={sort} setData={getSortedData} name={'size'} value={size.id} text={size.size} />
                      ))
                    }
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="select all_categories">
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: 'black' }} />} style={{ padding: '0', margin: '0' }}>
                    <button className="top">
                      <p className="top_title">{t('fabric')}</p>
                    </button>
                  </AccordionSummary>
                  <hr style={{ marginBottom: '10px' }} />
                  <AccordionDetails>
                    {
                      materials?.length > 0 && materials.map((material, index) => (
                        <CheckButton checked={sort.material.includes(material.id)} key={index} data={sort} setData={getSortedData} name={'material'} value={material.id} text={t(material['name_' + lang])} />
                      ))
                    }
                  </AccordionDetails>
                </Accordion>
              </div>
            </>
          }

          <div className="select all_categories">
            <Accordion expanded={expanded === 'panel5'}  onChange={handleChange('panel5')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: 'black' }} />} style={{ padding: '0', margin: '0' }}>
                <button className="top">
                  <p className="top_title">{t('province')}</p>
                </button>
              </AccordionSummary>
              <hr style={{ marginBottom: '10px' }} />
              <AccordionDetails>
                <CheckButton checked={sort.welayat.includes('ashgabat')} data={sort} setData={getSortedData} name={'welayat'} value={'ashgabat'} text={t('ashgabat')} />
                <CheckButton checked={sort.welayat.includes('ahal')} data={sort} setData={getSortedData} name={'welayat'} value={'ahal'} text={t('ahal')} />
                <CheckButton checked={sort.welayat.includes('balkan')} data={sort} setData={getSortedData} name={'welayat'} value={'balkan'} text={t('balkan')} />
                <CheckButton checked={sort.welayat.includes('mary')} data={sort} setData={getSortedData} name={'welayat'} value={'mary'} text={t('mary')} />
                <CheckButton checked={sort.welayat.includes('dashoguz')} data={sort} setData={getSortedData} name={'welayat'} value={'dashoguz'} text={t('dashoguz')} />
                <CheckButton checked={sort.welayat.includes('lebap')} data={sort} setData={getSortedData} name={'welayat'} value={'lebap'} text={t('lebap')} />
              </AccordionDetails>
            </Accordion>
          </div>
          {
            !dressmakers &&
            <div className="select all_categories">
              <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: 'black' }} />} style={{ padding: '0', margin: '0' }}>
                  <button className="top">
                    <p className="top_title">{t('color')}</p>
                  </button>
                </AccordionSummary>
                <hr style={{ marginBottom: '10px' }} />
                <AccordionDetails>
                  <div className='flex flex-wrap items-center'>
                    {
                      colors?.length && colors.map((color, index) => (
                        <CheckButton key={index} checked={sort.color.includes(color.id)} data={sort} setData={getSortedData} name={'color'} value={color.id} color={color.hex} />
                      ))
                    }
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          }

          {/* <button className="select_search-button text-center w-full bg-lybas-blue text-white py-3 rounded-lg mb-5 mt-5" onClick={() => setSidebar(false)}>Search (1525)</button> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
