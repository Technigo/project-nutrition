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
      newProduct.quantity = 1;
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
    },

    addShelf: (state, action) => {
      const { newShelf } = action.payload;
      const duplicateShelf = state.list.shelves.find((x) => x.name.toLowerCase() === newShelf.name.toLowerCase())
      if (duplicateShelf) {
        alert('Shelf already exists')
      } else {
        state.list.shelves.push(newShelf)
      }
    },

    increaseQuantity: (state, action) => {
      const { shelf, productId } = action.payload
      const foundShelf = state.list.shelves.find((x) => x.name === shelf)
      const foundItem = foundShelf.products.find((x) => x.code === productId)
      foundItem.quantity = foundItem.quantity + 1
    },

    decreaseQuantity: (state, action) => {
      const { shelf, productId } = action.payload
      const foundShelf = state.list.shelves.find((x) => x.name === shelf)
      const foundItem = foundShelf.products.find((x) => x.code === productId)
      if (foundItem.quantity === 1) {
        foundShelf.products = foundShelf.products.filter((x) => x.code !== productId)
      } else {
        foundItem.quantity = foundItem.quantity - 1
      }
    },

    removeProduct: (state, action) => {
      const { shelf, productId } = action.payload
      const foundShelf = state.list.shelves.find((x) => x.name === shelf)
      foundShelf.products = foundShelf.products.filter((x) => x.code !== productId)
    }
  }
})