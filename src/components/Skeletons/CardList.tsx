import React from 'react'
import Card from './Card';

type CardListProps = {
    cards?: number
}

const CardList = ({cards = 6}: CardListProps) => {
    const dummyArray = Array(cards).fill(1);
   return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 ">
      {
        dummyArray.map((item, i) => {
          return (
            <div className="shadow-md hover:shadow-lg rounded p-3 border bg-white" key = {i}>
                <div className="space-y-2">
                  <Card></Card>
                </div>
            </div>
          )
        })
      }
             
    </section>

  )
}

export default CardList