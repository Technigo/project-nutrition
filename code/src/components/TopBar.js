import React, { useState } from "react";
import styled from 'styled-components/macro'
import { IoMdMenu, IoIosSearch, IoMdBarcode, IoMdSend } from 'react-icons/io'
import { useDispatch } from "react-redux";
import { fetchProduct } from "reducers/products"
import { ui } from "reducers/ui"

const Bar = styled.header`
    background: blue;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
    height: 56px;
`

const GroupMenu = styled.div`
    display: flex;
    justify-content: ${props => (props.right ? "flex-end" : "flex-start")};;
    align-items: center;
    width: 50%;
`

const Title = styled.p`
    font-weight: bold;
    padding-left: 32px;
`

const SearchButton = styled.span`
    margin-right: 24px;
`

const Search = styled.input`
    border-style: none;
    outline: none;
    color: #fff;
    background: blue;
    line-height: 24px;

    &::placeholder {
        color: #fff;
        opacity: 1;
        font-size: 16px;
    }
`

export const TopBar = () => {
    const [showSearch, setShowSearch] = useState(false)
    const [code, setCode] = useState("")
    const dispatch = useDispatch();

    return (
        <Bar>
            <GroupMenu>
                <IoMdMenu size="24px" />
                <Title>Food facts</Title>
            </GroupMenu>
            {!showSearch && (
                <GroupMenu right>
                    <SearchButton>
                        <IoIosSearch size="24px" onClick={() => {
                            dispatch(ui.actions.setShowScanner(false))
                            setShowSearch(true)
                        }} />
                    </SearchButton>
                    <IoMdBarcode size="24px" onClick={() => {
                        dispatch(ui.actions.setShowScanner(true))
                    }} />
                </GroupMenu>
            )}
            {showSearch && (
                <GroupMenu right>
                    <Search
                        type="text"
                        value={code}
                        onChange={e => setCode(e.target.value)}
                        placeholder="Barcode"
                    />
                    <IoMdSend size="24px" onClick={() => {
                        dispatch(fetchProduct(code))
                        setCode("")
                        setShowSearch(false)
                    }} />
                </GroupMenu>
            )}
        </Bar>
    )
}