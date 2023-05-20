import React from "react"
import Home from "../components/mainpage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"

const Pages = ({ productItems }) => {
    return (
      <>
        <Home />
        <FlashDeals productItems={productItems} />
        </>
    )
}

export default Pages