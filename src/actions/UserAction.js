import axios from "axios";

const URL = 'http://localhost:5000'


export const getUser = userId => async (dispatch) => {
    try {

        const { data } = await axios.get(`${URL}/getUser/${userId}`)
        return data

    } catch (error) {
        console.log(error);
    }

}

export const getAllUser = () => async (dispatch) => {
    try {

        const { data } = await axios.get(`${URL}/getAllUsers`)
        return data

    } catch (error) {
        console.log(error);
    }

}

export const updateUser = (id, userData) => async (dispatch) => {

    dispatch({ type: 'UPDATING_START' })

    try {

        const { data } = await axios.put(`${URL}/updateuser/${id}`, userData)
        dispatch({ type: 'UPDATING_SUCCESS', data: data })

    } catch (error) {
        dispatch({ type: 'UPDATING_FAIL' })
        console.log(error);
    }

}

export const followUser = (id, user) => async (dispatch) => {
    try {
        dispatch({ type: 'FOLLOW_USER', data: id })
        await axios.put(`${URL}/${id}/follow`, user)
    } catch (error) {
        console.log(error);
    }
}

export const unfollowUser = (id, user) => async (dispatch) => {
    try {
        dispatch({ type: 'UNFOLLOW_USER', data: id })
        await axios.put(`${URL}/${id}/unfollow`, user)
    } catch (error) {
        console.log(error);
    }
}