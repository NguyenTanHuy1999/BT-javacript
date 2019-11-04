let appstate = { parent: 1, child1: 1, child2: 1 };


const AddReducer = (state = appstate, action) => {
    let { parent, child1, child2 } = state;
    switch (action.type) {
        case 'AddAllItems':
            {
                console.log("AddAllItems");
                return {parent:parent+1,child1:child1+1,child2:child2+1};
            }
        case 'AddChild1':
            {
                console.log("AddChild1");
                return {...state,child1:child1+1};
            }

        case 'AddChild2':
            {
                console.log('AddChild2');
                return {...state,child2:child2+1};
            }
    }
    return state;
}

export default AddReducer;