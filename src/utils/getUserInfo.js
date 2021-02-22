const getUserInfo = (dispatch) => {
    if (localStorage.getItem('userInfo')) {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        dispatch({ type: 'LOGGEDIN', payload: userInfo })
    }
}
export default getUserInfo;