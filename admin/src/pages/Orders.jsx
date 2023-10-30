import { t } from 'i18next';
import Search from '../components/Search';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataOrders, setOffset } from '../redux/features/Orders';

const columns = [
  {
    id: 'clientPhoneNumber',
    label: 'clientPhoneNumber',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'product',
    label: 'product',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'number',
    label: 'number',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'dateTime',
    label: 'dateTime',
    minWidth: 100,
    align: 'right',
  },
  {
    action: 'status',
    label: 'status',
    minWidth: 100,
    align: 'right'
  }
];

function Orders() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const data = useSelector((state) => state?.Orders?.data);
  const offset = useSelector((state) => state?.Orders?.offset);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (!data.length) dispatch(fetchDataOrders());
  }, []);
  return (
    <div className='orders-page'>
      <Search title='orders' className='' filter={[{ text: 'waiting' }, { text: 'accepted' }, { text: 'onTheWay' }, { text: 'cancelled' }]} />

      <div className='orders_table mt-5 shadow-lybas-1 rounded-lg overflow-hidden'>
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
                      <div className={"table-with-grid_tr_data"}>
                        <div className="name font-semibold">Jeren</div>
                        <div className="phone-number text-gray-600">+99364813308</div>
                      </div>
                    </TableCell>
                    <TableCell align={'left'}>
                      <div className={"table-with-grid_tr_data text-gray-600"}>
                        <div className="name font-semibold">Jeren</div>
                        <div className="phone-number text-gray-600">+99364813308</div>
                      </div>
                    </TableCell>
                    <TableCell align={'left'}>
                      15.10.2023/22.00
                    </TableCell>
                    <TableCell align={'right'}>
                      12.23.2023
                    </TableCell>
                    <TableCell align={'right'}>
                      Status
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

export default Orders;
