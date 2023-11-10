import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import { t } from 'i18next';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataEmails, setOffset, setLimit, setFilter, setSearch, setType } from '../redux/features/Emails';
import { useNavigate } from 'react-router-dom';
import { AxiosCustom } from '../common/AxiosInstance';
import { api } from '../common/Config';

const columns = [
  {
    id: 'nameLocation',
    label: 'nameLocation',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'email',
    label: 'email',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'dateTime',
    label: 'dateTime',
    minWidth: 170,
    align: 'left',
  },
];

function Emails() {
  const data = useSelector((state) => state?.Emails?.data);
  const offset = useSelector((state) => state?.Emails?.offset);
  const limit = useSelector((state) => state?.Emails?.limit);
  const count = useSelector((state) => state?.Emails?.count);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChangePage = async (event, newPage) => {
    await dispatch(setOffset(newPage * limit));
    await dispatch(fetchDataEmails());
  };

  const handleChangeRowsPerPage = async (event) => {
    await dispatch(setLimit(event.target.value))
    await dispatch(fetchDataEmails());
  };

  useEffect(() => {
    if (!data.length) dispatch(fetchDataEmails());
  }, []);

  const setFilterData = async (filter) => {
    await dispatch(setFilter(filter));
    await dispatch(fetchDataEmails());
  }

  const setSearchData = async (search) => {
    await dispatch(setSearch(search));
    await dispatch(fetchDataEmails());
  }
  
  const setTypeData = async (type)=>{
    await dispatch(setType(type));
    await dispatch(fetchDataEmails());
  }

  return (
    <div className='dresses'>
      <Search title='email' className='mt-5' setDate={setFilterData} setSearch={setSearchData} setWelayat={setTypeData} filter={[{ text: 'newsletter' }, { text: 'deliveryAbroad' }, { text: 'outStock' }, { text: 'newDressmaker' }]} />
      <div className="dresses_table mt-5 shadow-lybas-1 rounded-lg overflow-hidden">
        <div className="relative overflow-x-auto">
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 500 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column, index) => (
                      <TableCell
                        key={index}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        <span className='font-bold'>{t(column.label)}</span>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    data?.length > 0 && data.map((mail, index) => (
                      <TableRow onClick={()=>navigate('/emails/'+mail.id)} key={index} hover role="checkbox" tabIndex={-1}>
                        <TableCell align={'left'}>
                          <div className={"table-with-grid_tr_data col-span-3 flex items-center"}>
                            {
                              mail.image ?
                                <img className='w-12 h-12 rounded-lg object-cover mr-3' src={api + mail.image} alt="" />
                                :
                                <svg className="w-12 h-12 mr-3" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="Person2Icon"><path d="M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM9.78 12h4.44c1.21 0 2.14-1.06 1.98-2.26l-.32-2.45C15.57 5.39 13.92 4 12 4S8.43 5.39 8.12 7.29L7.8 9.74c-.16 1.2.77 2.26 1.98 2.26z"></path></svg>
                            }
                            <div className="data">
                              <div className="name font-bold">{mail.name}</div>
                              <div className="province text-lybas-gray text-sm">{t(mail.welayat)}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align={'left'}>
                          {mail.email}
                        </TableCell>
                        <TableCell align={'left'}>
                          {mail.createdAt.split('T')[0]} / {mail.createdAt.split('T')[1].split('.')[0]}
                        </TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 100]}
              component="div"
              count={count}
              rowsPerPage={limit}
              page={offset / limit}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
    </div >
  );
}

export default Emails;
