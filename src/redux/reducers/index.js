const initialState = {
    favoriteCompanies: [],
    favoriteJobs: []
}
const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_FAVORITE_COMPANY":
            return {
                ...state,
                favoriteCompanies: [...state.favoriteCompanies, action.payload],
            }

        case "REMOVE_FAVORITE_COMPANY":
            return {
                ...state,
                favoriteCompanies: state.favoriteCompanies.filter(
                    (company) => company !== action.payload
                )
            }

        case "ADD_FAVORITE_JOB":
            return {
                ...state,
                favoriteJobs: [...state.favoriteJobs, action.payload]
            }

        case "REMOVE_FAVORITE_JOB":
            return {
                ...state,
                favoriteJobs: state.favoriteJobs.filter(
                    (job) => job._id !== job.payload
                )
            }
        

        default: return state
    }
}


export default mainReducer