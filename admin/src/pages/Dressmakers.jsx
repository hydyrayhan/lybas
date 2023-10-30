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
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataDressmakers, setOffset } from '../redux/features/Dressmakers';

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
  {
    id: 'edit',
    label: 'edit',
    minWidth: 100,
    align: 'right',
  },
  {
    action: 'action',
    label: 'action',
    minWidth: 100,
    align: 'right'
  }
];



function Dressmakers() {
  const [toggle, setToggle] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const data = useSelector((state) => state?.Dressmakers?.data);
  const offset = useSelector((state) => state?.Dressmakers?.offset);

  const dispatch = useDispatch();

  console.log(data);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    if (!data.length) dispatch(fetchDataDressmakers());
  }, []);

  return (
    <div className='dresses'>
      <Search title='dressmaker' className='mt-5' action={{ link: '/dressmakers/add', text: 'addDressmaker' }} filter={[{ text: 'waiting' }, { text: 'accepted' }, { text: 'onTheWay' }, { text: 'cancelled' }]} />
      <div className="dresses_table mt-5 shadow-lybas-1 rounded-lg overflow-hidden">
        <div className="relative overflow-x-auto">
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
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
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell align={'left'}>
                      <div className={"table-with-grid_tr_data col-span-3 flex items-center"}>
                        <img className='w-12 h-12 rounded-lg object-cover mr-3' src={require('./../assets/images/dressImage.png')} alt="" />
                        <div className="data">
                          <div className="name font-bold">Jeren</div>
                          <div className="province text-lybas-gray text-sm">Mary</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align={'left'}>
                      hydyrowayhan7@gmail.com
                    </TableCell>
                    <TableCell align={'left'}>
                      15.10.2023/22.00
                    </TableCell>
                    <TableCell align={'right'}>
                      <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3042 2.75 17.8625 2.75C18.4208 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.57083 21.275 6.1125C21.2917 6.65417 21.1083 7.11667 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z" fill="#1A54EB" />
                        </svg>
                      </button>
                    </TableCell>
                    <TableCell align={'right'}>
                      <div className='flex justify-end items-end'>
                        <button className='mr-3'>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#FF3521" />
                          </svg>
                        </button>
                        <div
                          className={"md:w-10 md:h-5 w-10 h-4 flex items-center rounded-full p-1 cursor-pointer " + (toggle ? 'bg-green-600' : 'bg-gray-300')}
                          onClick={() => {
                            setToggle(!toggle);
                          }}
                        >
                          <div
                            className={
                              "bg-white md:w-4 md:h-4 h-3 w-3 rounded-full shadow-md transform duration-300 ease-in-out " +
                              (toggle ? ' transform translate-x-4' : '')
                            }
                          ></div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[]}
              component="div"
              count={1}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>

      </div>
    </div>
  );
}

export default Dressmakers;
