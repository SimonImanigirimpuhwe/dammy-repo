import React from 'react';
import PropTypes from 'prop-types';
import 
    { Table, 
        TableBody, 
        TableCell, 
        TableRow, 
        TableContainer, 
        TableHead, 
        Paper,
        TableFooter,
        IconButton,
        TablePagination
    } 
from '@material-ui/core';
import {
    KeyboardArrowLeft,
    KeyboardArrowRight,
}
 from '@material-ui/icons';
 import FirstPageIcon from '@material-ui/icons/FirstPage';
 import LastPageIcon from '@material-ui/icons/LastPage';
import { makeStyles, useTheme } from '@material-ui/core/styles'


const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));
  
const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
})

//pagination actions
function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };


const createData = (name, module, component, hours, sessions, lecturer) => {
    return { name, module, component, hours, sessions, lecturer}
}
const rows = [
    createData('Math', 2, 5, 20, 120, 'Simon'),
    createData('Chemistry', 2, 5, 20, 120, 'Peter'),
    createData('Biology', 2, 5, 20, 120, 'Claude'),
    createData('Latin', 2, 5, 20, 120, 'Kamanzi'),
    createData('English', 2, 5, 20, 120, 'Lorem'),
    createData('Random1', 2, 5, 20, 120, 'Lorem'),
    createData('Random2', 2, 5, 20, 120, 'Lorem'),
    createData('Random3', 2, 5, 20, 120, 'Lorem'),
    createData('Random4', 2, 5, 20, 120, 'Lorem'),
    createData('Random5', 2, 5, 20, 120, 'Lorem'),
    createData('Random6', 2, 5, 20, 120, 'Lorem')
]
const DenseTable = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return ( 
        <TableContainer  component={Paper}>
            <Table className={classes.table} size="medium" arial-lable="dense table">
              <TableHead>
                  <TableRow>
                      <TableCell>Courses</TableCell>
                      <TableCell align="right">Modules</TableCell>
                      <TableCell align="right">Components</TableCell>
                      <TableCell align="right">Hours</TableCell>
                      <TableCell align="right">Sessions</TableCell>
                      <TableCell align="right">Lecturer</TableCell>
                  </TableRow>
              </TableHead>  
              <TableBody>
                {(rowsPerPage > 0
                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : rows
                    ).map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">{row.name}</TableCell>
                        <TableCell align="right">{row.module}</TableCell>
                        <TableCell align="right">{row.component}</TableCell>
                        <TableCell align="right">{row.hours}</TableCell>
                        <TableCell align="right">{row.sessions}</TableCell>
                        <TableCell align="right">{row.lecturer}</TableCell>
                    </TableRow>
                    )) 
                }
                {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                    </TableRow>
                )}
               </TableBody>
               <TableFooter>
                   <TableRow>
                    <TablePagination 
                        rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
                        colSpan={3}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                            inputProps: { 'aria-label': 'rows per page'},
                            native: true,
                        }}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                    />
                   </TableRow>
               </TableFooter>
            </Table>
        </TableContainer>
     );
}
 
export default DenseTable;