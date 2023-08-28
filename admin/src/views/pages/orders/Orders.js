import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { useSelector, useDispatch } from 'react-redux';
import { ROWS_PER_PAGE, PAGE } from 'store/orderPagination';
import { Button } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useTheme } from '@mui/material/styles';

// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import { Link } from 'react-router-dom';


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function StickyHeadTable() {
  const orderPagination = useSelector((state) => state.orderPagination);
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(orderPagination.page);
  const [rowsPerPage, setRowsPerPage] = React.useState(orderPagination.rows_per_page);
  const theme = useTheme();

  const handleChangePage = (event, newPage) => {
    dispatch({ type: PAGE, page: newPage });
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    dispatch({ type: ROWS_PER_PAGE, rowsPerPage: event.target.value })
    dispatch({ type: PAGE, page: 0 })
    setPage(0);
  };

  const deleteRow = (id) =>{
    console.log(id);
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <b>
                    {column.label}
                  </b>
                </TableCell>
              ))}
              <TableCell style={{ textAlign: 'right' }}><b>Düwmeler</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(orderPagination.page * rowsPerPage, orderPagination.page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell
                      style={{ minWidth: 190, display: 'flex', justifyContent: 'right' }}
                    >
                      
                        <AnimateButton>
                          <Button onClick={()=>deleteRow(1)} style={{ marginRight: '10px' }} variant='outlined' startIcon={<DeleteIcon />} sx={{
                            background: theme.palette.error.main,
                            color: 'white',
                            '&:hover': {
                              background: theme.palette.error.dark,
                            }
                          }}>Pozmak</Button>
                        </AnimateButton>
                      <Link to={'/orders/1'}>
                        <AnimateButton>
                          <Button variant='contained' startIcon={<OpenInBrowserIcon />} sx={{
                            background: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            '&:hover': {
                              background: theme.palette.secondary.dark,
                              color: theme.palette.secondary.light
                            }
                          }}>Açmak</Button>
                        </AnimateButton>
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}