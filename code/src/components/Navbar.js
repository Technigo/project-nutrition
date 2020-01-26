import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


import { ui } from '../reducers/ui'
import './css/navbar.css'

export const Navbar = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  // Buttons disbled or enabled
  const disableScanBtn = useSelector((state) => state.ui.disableScanBtn)
  const disableCancelBtn = useSelector((state) => state.ui.disableCancelBtn)
  const disableSaveBtn = useSelector((state) => state.ui.disableSaveBtn)

  const showScanner = useSelector((state) => state.ui.showScanner)
  const showProduct = useSelector((state) => state.ui.showProduct)
  const showSaveBtn = useSelector((state) => state.ui.showSaveBtn)
  console.log("showScanner", showScanner)
  console.log("showProduct", showProduct)

  return (

    <nav>
      <button className="navbar-btn" type="button" disabled={disableScanBtn} onClick={() => { history.push("/scan"); dispatch(ui.actions.setShowProduct(false)); dispatch(ui.actions.setShowScanner(true)) }}>
        Scan barcode
      </button>
      {!showProduct && (
        <button className="navbar-btn" type="button" disabled={disableCancelBtn} onClick={() => dispatch(ui.actions.setShowScanner(false))}>
          Cancel
        </button>
      )}
      {showProduct && (<div></div>)}

      {showSaveBtn && (
        <button className="navbar-btn" type="button" disabled={disableSaveBtn} >
          Save
        </button>
      )}

    </nav >
  )
}