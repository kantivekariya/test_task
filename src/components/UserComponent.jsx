import React, { useEffect, useRef, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Header from '../common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserList } from '../redux/action/user.action';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import { TrafficRounded } from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

const UserComponent = () => {
    const userList = useSelector((state) => state.userReducer.user);
    const [open, setOpen] = useState(false);
    console.log(userList)
    const isFirstRender = useRef(true);
    const dispatch = useDispatch();
    useEffect(() => {
        if (isFirstRender.current) {
            dispatch(getAllUserList()).then((res) => {
                isFirstRender.current = false;
            });
        }
    });

    
    const handleCellClick = (e) => {
        handleClickOpen();
        console.log(e)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Header onSearchBar={userList && userList.data} />
            <div className="container mt-5">
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">City</TableCell>
                                <TableCell align="right">State</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userList.data && userList.data.results && userList.data.results.map((value, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row" onClick={() => handleCellClick(value)}>
                                        <img src={value.picture && value.picture.thumbnail} alt={'avtar'}/>
                                    </TableCell>
                                    <TableCell align="right">{value.name && value.name.first}</TableCell>
                                    <TableCell align="right">{value.email}</TableCell>
                                    <TableCell align="right">{value.location && value.location.city}</TableCell>
                                    <TableCell align="right">{value.location && value.location.state}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        {/* <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={3}
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: { 'aria-label': 'rows per page' },
                                        native: true,
                                    }}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter> */}
                    </Table>
                </TableContainer>
                <Dialog onClose={handleClose} open={open}>
                    
                </Dialog>
            </div>
        </>
    )
}

export default UserComponent;