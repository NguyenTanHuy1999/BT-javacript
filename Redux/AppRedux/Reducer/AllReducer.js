let appState = { point: 1, point1: 1, point2: 1 };


const AllReducer = (state = appState, action) => {
    let { point,point1,point2 } = state;
    switch (action.type) {
        case 'AddAll':
            {
                return {point:point+1,point1:point1+1,point2:point2+1};
            }
        case 'AddWarrior1':
            {
                return {...state,point1:point1+1};
            }

        case 'AddWarrior2':
            {
                return {...state,point2:point2+1};
            }
    }
    return state;
}

export default AllReducer;