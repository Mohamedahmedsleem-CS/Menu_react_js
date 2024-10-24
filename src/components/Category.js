import React from 'react'
import { Col, Row } from 'react-bootstrap'


const Category = ({filterbyCategory,allCategory}) => {
  const onFilter = (cat) => {
    filterbyCategory(cat)
}
  return (
    <div>
      <Row className='my-2 mb-5'>
        <Col sm="12" className='d-flex justify-content-center' >
        {
          allCategory.length >= 1 ? (allCategory.map((cat)=> {
            return (
              <div>
              <button onClick={() => onFilter(cat) } style={{ border: "1px solid #b45b35" }} className='btn mx-2'>{cat}</button>
            </div>
            )
          }) ) : <h4> تصنيفات يوج لا  </h4>
        }

        </Col>
      </Row>
    </div>
  )
}

export default Category