import majorApi from "./../api/majorApi";

const getListMajor = () => {
    let arr = [];
    try {
        majorApi.getAll().then(res => {
            res.data.map((value) => {
                arr.push(value);
            });
        });
        
    } catch (error) {
        console.log(error) ;
    }
    console.log(arr)
    return arr;
}

const majorInitialState = {
    listMajor: getListMajor()
}
const categoriesReducer = (state = majorInitialState, action) => {
    switch (action.type) {
         
        default:
            return state;
    }
}

export default categoriesReducer;