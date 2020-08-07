import React from "react"
import { Pagination } from "react-bootstrap"

const PaginationBasic = ({ postPerPage, totalPost, paginate, page }) => {
  let pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div className="mx-auto page">
      <Pagination size="md">
        {pageNumbers.map((number) => {
          return (
            <Pagination.Item
              key={number}
              onClick={(e) => {
                paginate(e)
                console.log(number, page)
              }}
              active={
                // eslint-disable-next-line
                page == number
              }
            >
              {number}
            </Pagination.Item>
          )
        })}
      </Pagination>
    </div>
  )
}

export default PaginationBasic
