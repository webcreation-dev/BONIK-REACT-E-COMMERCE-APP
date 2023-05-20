import React from "react"
import Home from "../components/mainpage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import { TopCate } from "../components/top/TopCate"
import {NewArrivals} from "../components/newarrivals/NewArrivals"
import { Discount } from "../components/discount/Discount"
import { Shop } from "../components/shops/Shop"
import { Annuncement } from "../components/annuncements/Annuncement"
import { Wrapper } from "../components/wrapper/Wrapper"
import { Footer } from "../common/footer/Footer"


const Pages = ({ productItems, shopItems }) => {

  

  return (
    <>
      <Home />
      <FlashDeals productItems={productItems} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} />
      <Annuncement />
      <Wrapper />
      <Footer />
      </>
  )
}

export default Pages