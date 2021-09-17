import { productConstants } from "../actions/constants";

const initialState = {
    products: [],
    loading: false,
    error: null,
    appliedFilters: [],
    filteredProducts: [],
    featuredProducts: [],
    productDetails: {}
}

function sortAsc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return 1;

        if (b[field] > a[field]) return -1;

        return 0;
    })
}

function sortDesc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return -1;

        if (b[field] > a[field]) return 1;

        return 0;
    })
}




export default (state = initialState, action) => {
    switch (action.type) {
        case productConstants.GET_ALL_PRODUCT_REQUEST:
            state = { ...state, loading: true }
            return state

        case productConstants.GET_ALL_PRODUCT_SUCCESS:
            let products = action.payload.product.product
            let featuredProducts = action.payload.product.productFilter.productSlice
            state = {
                ...state,
                loading: false,
                products,
                filteredProducts: products,
                featuredProducts
            }

            return state

        case productConstants.GET_ALL_PRODUCT_FAILURE:
            state = { ...state, loading: false, error: action.payload.error }
            return state

        case productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
            state = { ...state, loading: true }
            return state

        case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:

            state = {
                ...state,
                loading: false,
                productDetails: action.payload.productDetails
            }

            return state

        case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
            state = { ...state, loading: false, error: action.payload.error }
            return state

        case productConstants.FILTER_BY_CATEGORY:
            let newState = Object.assign({}, state);
            let appliedFilters = state.appliedFilters;

            let { id } = action.payload
            let filtered = state.products.filter(value => id === null ? value : value.category._id === id)

            if (id) {
                let index = appliedFilters.indexOf(productConstants.FILTER_BY_CATEGORY)
                if (index === -1) {
                    appliedFilters.push(productConstants.FILTER_BY_CATEGORY)

                }
                newState.filteredProducts = filtered;
            } else {
                let index = appliedFilters.indexOf(productConstants.FILTER_BY_CATEGORY);
                appliedFilters.splice(index, 1);
                if (appliedFilters.length === 0) {
                    console.log(newState);
                    newState.filteredProducts = newState.products;
                }
            }

            return newState;

        case productConstants.SORT_BY_ALPHABET:
            // const sortByAlphabetState = Object.assign({}, state);
            let sortedAlphabetArr = action.payload.direction === "asc" ?
                sortAsc(state.filteredProducts, 'name') :
                sortDesc(state.filteredProducts, 'name');

            return { ...state, filteredProducts: sortedAlphabetArr }

        case productConstants.SORT_BY_PRICE:
            // const sortByAlphabetState = Object.assign({}, state);
            let sortedPriceArr = action.payload.direction === "asc" ?
                sortAsc(state.filteredProducts, 'price') :
                sortDesc(state.filteredProducts, 'price');

            return { ...state, filteredProducts: sortedPriceArr }


        default:
            return state;
    }


}