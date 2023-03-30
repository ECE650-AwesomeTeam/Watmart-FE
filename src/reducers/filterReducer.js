const filterReducer = (state, action) => {
  const { all_products, filter_products } = state;
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
          let priceAttrs = action.payload.map(item => item.price);
          let maxPrice = Math.max(...priceAttrs);
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: {...state.filters, maxPrice, price: maxPrice},
            };
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            };
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false
            };
        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload,
            };
        case "SORTING_PRODUCTS":
            let newSortData;
            const { sorting_value } = state;
            let tempSortedProducts = [...filter_products];
            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                  return a.price - b.price;
                }
        
                if (sorting_value === "highest") {
                  return b.price - a.price;
                }
        
                if (sorting_value === "a-z") {
                  return a.title.localeCompare(b.title);
                }
        
                if (sorting_value === "z-a") {
                  return b.title.localeCompare(a.title);
                }
              };
              newSortData = tempSortedProducts.sort(sortingProducts);
              return {
                ...state,
                filter_products: newSortData,
              };
        case "UPDATE_FILTERS_VALUE": 
              const { name, value } = action.payload;
              return {
                ...state,
                filters: {
                  ...state.filters,
                  [name]: value,
                }
              };
        case "FILTER_PRODUCTS":
          let temp_filtered_products = [...all_products];
          const { text, category, price, quality } = state.filters;
          
          if (text) {
            temp_filtered_products = temp_filtered_products.filter (item => {
              return item.title.toLowerCase().includes(text);
            });
          }
          
          if (category !== "all") {
            temp_filtered_products = temp_filtered_products.filter (item => {
              return item.category === category;
            });
          }
          if (price === 0) {
            temp_filtered_products = temp_filtered_products.filter(item => item.price === price);
          } else {
            temp_filtered_products = temp_filtered_products.filter(
              (item) => item.price <= price
            );
          }
          if (quality !== "all") {
            temp_filtered_products = temp_filtered_products.filter(item => item.quality.toLowerCase() === quality);
          }
          return {
            ...state,
            filter_products: temp_filtered_products,
          };
        case "CLEAR_FILTERS":
          return {
            ...state,
            filters: {
              ...state.filters,
              text: "",
              category: "all",
              quality: "all",
              maxPrice: state.filters.maxPrice,
              price: state.filters.maxPrice,
              minPrice: 0,
            }
          };
        default:
            return state; 
    };
};

export default filterReducer;