const initState = {
    popular : [],
    newGames : [],
    upcoming : [],
    searched: [],
};


const gamesReducer = (state = initState,action) => {
    switch (action.type){
        case "FETCH_GAMES":
            return {...state};
        default:
            return {...state};
    }

};
//ACTION CREATORS
const fetchGames = () =>{
    return{
        type: "fetchGames",
    };
};



export default gamesReducer;