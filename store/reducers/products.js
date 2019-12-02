import PRODUCTS from '../../data/seed'

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod.ownerId === 'u1')
};

export default (state = initialState, action) => {
    return state;
}