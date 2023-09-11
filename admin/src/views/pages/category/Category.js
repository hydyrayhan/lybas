import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { AxiosInstance } from 'common/AxiosInstance';



// Dialog
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useTheme } from '@mui/material/styles';

// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { getCategories } from 'features/categories';

const columns = [
  { id: 'name_tm', label: 'Türkmen ady', minWidth: 170 },
  { id: 'name_ru', label: 'Rus ady', minWidth: 170 },
  { id: 'name_en', label: 'Iňlis ady', minWidth: 170 },
];

export default function Category() {
  const dataCategories = useSelector((state) => state?.fetchCategories?.data);
  const count = useSelector((state) => state?.fetchCategories?.count);
  const page = useSelector((state) => state?.fetchCategories?.page)
  const limit = useSelector((state) => state?.fetchCategories?.limit)
  const dispatch = useDispatch();
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [fillFree, setFillFree] = useState(false);
  const [loadingDialog, setLoadingDialog] = useState(false);
  const [successDialog, setSuccessDialog] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const timer = useRef();

  useEffect(() => {
    dispatch(getCategories({ page, limit }));
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const [data, setData] = useState({
    name_tm: '',
    name_ru: '',
    name_en: '',
  })

  const handleChange = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
    setData({name_tm:'',name_ru:'',name_en:''})
  };

  const handleClose = async (type,row) => {
    if (type === 'add' && !data.id) {
      if (data.name_tm && data.name_en && data.name_ru) {
        if (!loadingDialog) {
          setSuccessDialog(false);
          setLoadingDialog(true);
          try {
            const { status } = await AxiosInstance.post('/categories/add', data)
            if (status === 201) {
              dispatch(getCategories({ page: 0, limit }));
              setSuccessDialog(true);
              setLoadingDialog(false);
              setOpenDialog(false);
            }
          } catch (error) {
            console.log(error);
          }
        }
        setFillFree(false);
      } else {
        setFillFree(true);
      }
    } else if (type === 'edit') {
      setData({...row})
      setOpenDialog(true)
    } else if(data.id && type === 'add'){
      setLoadingDialog(true);
      try {
        const {status} = await AxiosInstance.patch('/categories/'+data.id,data);
        if(status === 200){
          dispatch(getCategories({ page, limit }));
          setOpenDialog(false);
          setLoadingDialog(false);
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setOpenDialog(false);
      setSuccessDialog(false);
      setLoadingDialog(false);
      setFillFree(false);
    }
  };
  const handleCloseDeleteDialog = () => {
    setDeleteDialog(false);
  };

  const handleChangePage = (event, page) => {
    dispatch(getCategories({ page, limit }));
  };

  const handleChangeRowsPerPage = (event, limit) => {
    dispatch(getCategories({ page: 0, limit: event.target.value }))
  };

  const deleteRow = async (id) => {
    setDeleteDialog(true);
    if (id === 'delete') {
      try {
        setLoadingDialog(true);
        const { status } = await AxiosInstance.post('/categories/delete/' + deleteId)
        if (status === 200) {
          dispatch(getCategories({ page, limit }));
          setLoadingDialog(false);
          setDeleteDialog(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setDeleteId(id);
    }
  }

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Button variant='contained' onClick={handleClickOpen} size={'large'} startIcon={<AddCircleOutlineOutlinedIcon />} sx={{
          background: theme.palette.success.dark,
          '&:hover': {
            background: theme.palette.success.main,
          }
        }}>Goşmak</Button>
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
              {dataCategories ? dataCategories
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column, index) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={index} align={column.align}>
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
                          <Button onClick={() => deleteRow(row.id)} style={{ marginRight: '10px' }} variant='outlined' startIcon={<DeleteIcon />} sx={{
                            background: theme.palette.error.main,
                            color: 'white',
                            '&:hover': {
                              background: theme.palette.error.dark,
                            }
                          }}>Pozmak</Button>
                        </AnimateButton>
                        <AnimateButton>
                          <Button variant='contained' onClick={()=>handleClose('edit',row)} startIcon={<OpenInBrowserIcon />} sx={{
                            background: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            '&:hover': {
                              background: theme.palette.secondary.dark,
                              color: theme.palette.secondary.light
                            }
                          }}>Üýtgetmek</Button>
                        </AnimateButton>
                      </TableCell>
                    </TableRow>
                  );
                }) : ''}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={count}
          rowsPerPage={limit}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle style={{ fontSize: 24, fontWeight: 'bold', marginBottom: -20 }}>Kategoty goşmak</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Türkmençe ady"
            type="text"
            fullWidth
            variant="standard"
            autoComplete='off'
            required
            value={data.name_tm}
            onChange={handleChange('name_tm')}
          />
          <TextField
            margin="dense"
            id="name"
            label="Rusça ady"
            type="text"
            fullWidth
            variant="standard"
            autoComplete='off'
            required
            value={data.name_ru}
            onChange={handleChange('name_ru')}
          />
          <TextField
            margin="dense"
            id="name"
            label="Iňlisçe ady"
            type="text"
            fullWidth
            variant="standard"
            autoComplete='off'
            required
            value={data.name_en}
            onChange={handleChange('name_en')}
          />
          {
            fillFree ?
              <div style={{ color: 'red', paddingTop: '20px', fontSize: 16 }}>Boşluklary dolduryň!</div>
              : ''
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()} sx={{ color: theme.palette.error.main }}>Ýatyrmak</Button>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ m: 1, position: 'relative' }}>
              <Button
                variant="default"
                sx={{ color: theme.palette.success.dark, border: theme.palette.error.main }}
                disabled={loadingDialog}
                onClick={() => handleClose('add')}
              >
                Goşmak
              </Button>
              {loadingDialog && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: theme.palette.success.dark,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
      <Dialog open={deleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle style={{ fontSize: 24, fontWeight: 'bold', marginBottom: -20 }}>Siz hakykatdanam pozmak isleýäňizmi?</DialogTitle>
        <DialogContent>
          {
            fillFree ?
              <div style={{ color: 'red', paddingTop: '20px', fontSize: 16 }}>Boşluklary dolduryň!</div>
              : ''
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()} sx={{ color: theme.palette.error.main }}>Ýatyrmak</Button>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ m: 1, position: 'relative' }}>
              <Button
                variant="default"
                sx={{ color: theme.palette.success.dark, border: theme.palette.error.main }}
                disabled={loadingDialog}
                onClick={() => deleteRow('delete')}
              >
                Howa
              </Button>
              {loadingDialog && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: theme.palette.success.dark,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
}