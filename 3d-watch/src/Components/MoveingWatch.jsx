import { motion } from 'framer-motion'
import React from 'react'

function MoveingWatch({start,end}) {
  return (
    <motion.div initial={{x:`${start}%`}} animate={{x:`${end}%`}} transition={{ease:'linear', repeat:Infinity,duration:40}} className="move">

    {/* <main> */}
        <div className="product">
          <img src="https://m.media-amazon.com/images/I/6152wS4BKxL._AC_UF1000,1000_QL80_.jpg" alt="Product Image"/>
        </div>
        <div className="product">
          <img src="https://m.media-amazon.com/images/I/61eaeqlbsUL._AC_UL480_QL65_.jpg" alt="Product Image"/>
        </div>
        <div className="product">
          <img src="https://m.media-amazon.com/images/I/51YOeZehIKL._AC_UL480_QL65_.jpg" alt="Product Image"/>
        </div>
        <div className="product">
          <img src="https://m.media-amazon.com/images/I/61AHiYyu3ZL._AC_UL480_QL65_.jpg" alt="Product Image"/>
        </div>
        <div className="product">
          <img src="https://m.media-amazon.com/images/I/6152wS4BKxL._AC_UF1000,1000_QL80_.jpg" alt="Product Image"/>
        </div>
        <div className="product">
          <img src="https://m.media-amazon.com/images/I/61eaeqlbsUL._AC_UL480_QL65_.jpg" alt="Product Image"/>
        </div>
        <div className="product">
          <img src="https://m.media-amazon.com/images/I/51YOeZehIKL._AC_UL480_QL65_.jpg" alt="Product Image"/>
        </div>
        <div className="product">
          <img src="https://m.media-amazon.com/images/I/61AHiYyu3ZL._AC_UL480_QL65_.jpg" alt="Product Image"/>
        </div>
        <div className="product">
          <img src="https://m.media-amazon.com/images/I/6152wS4BKxL._AC_UF1000,1000_QL80_.jpg" alt="Product Image"/>
        </div>
        <div className="product">
          <img src="https://m.media-amazon.com/images/I/61eaeqlbsUL._AC_UL480_QL65_.jpg" alt="Product Image"/>
        </div>
        <div className="product">
          <img src="https://m.media-amazon.com/images/I/51YOeZehIKL._AC_UL480_QL65_.jpg" alt="Product Image"/>
        </div>
        <div className="product">
          <img src="https://m.media-amazon.com/images/I/61AHiYyu3ZL._AC_UL480_QL65_.jpg" alt="Product Image"/>
        </div>
        <div className="product">
          <img src="https://m.media-amazon.com/images/I/6152wS4BKxL._AC_UF1000,1000_QL80_.jpg" alt="Product Image"/>
        </div>
        <div className="product">
          <img src="https://m.media-amazon.com/images/I/61eaeqlbsUL._AC_UL480_QL65_.jpg" alt="Product Image"/>
        </div>
        <div className="product">
          <img src="https://m.media-amazon.com/images/I/51YOeZehIKL._AC_UL480_QL65_.jpg" alt="Product Image"/>
        </div>
        <div className="product">
          <img src="https://m.media-amazon.com/images/I/61AHiYyu3ZL._AC_UL480_QL65_.jpg" alt="Product Image"/>
        </div>
    {/* </main> */}
    </motion.div>

  )
}

export default MoveingWatch