import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './redux'
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, makeStyles } from '@material-ui/core';
import StarsIcon from '@material-ui/icons/Stars';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(() => ({
    root: {
        margin: 'auto',
        width: '100%',
        maxWidth: 400,
        border: '1px solid gray',
    },
    pagination: {
        justifyContent: "center",
        padding: 30
    }
}))

function UserContainer({ userData, fetchUsers, }) {
    const classes = useStyles()
    const users = userData.users
    const loading = userData.loading
    const error = userData.error
    const itemsPerPage = 10;
    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])


    const renderList = () => {
        return users
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((user, i) => {
                const { avatar_url, login, site_admin, id } = user
                return (
                    <List component="nav" className={classes.root} key={i}>
                        <ListItem style={{ height: 50 }}  >
                            <ListItemText primary={id} />
                            <ListItemAvatar >
                                <Avatar src={avatar_url} />
                            </ListItemAvatar>
                            <ListItemText> {login}</ListItemText>
                            <ListItemText> {site_admin ? <StarsIcon /> : ""} </ListItemText>
                            <ContactMailIcon color="primary" />
                        </ListItem>
                    </List>
                )
            }
            )
    }

    return loading ? (
        <h2>Loading</h2>)
        : error ? (
            <h2>{error}</h2>)
            : (<div>
                <h2>User List</h2>
                {renderList()}
                <Pagination
                    count={3}
                    page={page}
                    onChange={handleChange}
                    defaultPage={1}
                    color="primary"
                    size="large"
                    showFirstButton
                    showLastButton
                    classes={{ ul: classes.pagination }}
                />
            </div>

            )
}
const mapStateToProps = state => {
    return {
        userData: state.users,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
