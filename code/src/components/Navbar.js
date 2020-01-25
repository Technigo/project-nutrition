import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { ui } from '../reducers/ui'

export const Navbar = () => {
  const dispatch = useDispatch()
  // const [showScanner, setShowScanner] = useState(false)
  const disableScanBtn = useSelector((state) => state.ui.disableScanBtn)
  const disableCancelBtn = useSelector((state) => state.ui.disableCancelBtn)
  const disableSaveBtn = useSelector((state) => state.ui.disableSaveBtn)

  return (

    <nav>
      <button className="showscanner-btn" type="button" disabled={disableScanBtn} onClick={() => dispatch(ui.actions.setShowScanner(true))}>
        Scan barcode
      </button>
      <button className="showscanner-btn" type="button" disabled={disableCancelBtn} onClick={() => dispatch(ui.actions.setShowScanner(false))}>
        Cancel
      </button>

      <button className="showscanner-btn" type="button" disabled={disableSaveBtn} >
        Save
      </button>

    </nav >
  )
}