export const GET_APP_DATA = "GET_APP_DATA"

export const getappData = (appDetailData) => {
    return ({
        type: GET_APP_DATA,
        data: appDetailData
    })
}