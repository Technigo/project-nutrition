import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    shelves: [
      {
        name: "Fruit & Veg",
        reveal: false,
        products: []
      },
      {
        name: "Dairy",
        reveal: false,
        products: []
      },
      {
        name: "Meat & Fish",
        reveal: false,
        products: []
      },
      {
        name: "Freezer",
        reveal: false,
        products: []
      }
    ]
  }
}

export const nutrition = createSlice({
  name: 'nutrition',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const { newProduct, shelf } = action.payload
      const foundShelf = state.list.shelves.find((x) => x.name === shelf)
      const foundItem = foundShelf.products.find((x) => x.code === newProduct.code)
      if (!foundItem) {
        foundShelf.products.push(newProduct)
      }
      else { console.log("Product already stored") }
    },
    clearAll: (state) => {
      state.list = []
    },
    removeShelf: (state, action) => {
      const { shelfName } = action.payload
      state.list.shelves = state.list.shelves.filter((x) => x.name !== shelfName)
    },

    revealProducts: (state, action) => {
      const { shelfName, reveal } = action.payload
      const foundShelf = state.list.shelves.find((x) => x.name === shelfName)
      foundShelf.reveal = reveal
    }
  }
})