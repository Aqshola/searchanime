import React from "react"
import { InputGroup, FormControl, Button } from "react-bootstrap"
const SearchBox = ({ info, change, click }) => {
  return (
    <InputGroup size="lg" className="mb-3 searchBox">
      <FormControl
        placeholder={"Search " + info}
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={change}
      />
      <InputGroup.Append>
        <Button onClick={click} className="src-btn">
          Search
        </Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default SearchBox
