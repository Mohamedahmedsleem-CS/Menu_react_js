import React, { useRef } from "react";
import { Card, Col, Row } from "react-bootstrap";
// import Zoom from 'react-reveal/Zoom';

import { motion, useInView, useTransform, useViewportScroll } from "framer-motion";

const ItemsLis = ({ itemsData }) => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true }); // Animation happens once when in view
  

  return (
    <Row>
      {/* <Zoom>   */}

      {itemsData.length >= 1 ? (
        itemsData.map((item) => {
          return (
            <Col key={item.id} sm="12" className="mb-3">
              <motion.div
                initial={{ scale: 0 }} // Start zoomed out
                animate={{ scale: 1 }} // Zoom in to normal size
                transition={{ duration: 0.8 }} // Customize duration of the effect
                // style={{ width: 300, height: 300, backgroundColor: 'lightblue', margin: '0 auto' }}
              >

                  {/* <motion.div
                    animate={{
                      x: 81,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{ duration: 0.8 }} 
                  > */}

                
                {/* <motion.div
                      ref={ref}
                      initial={{ scale: 0 }}
                      animate={{ scale: isInView ? 1 : 0 }}  // Triggers zoom when in view
                      transition={{ duration: 0.5 }}
                      // style={{
                      //   width: 300,
                      //   height: 300,
                      //   backgroundColor: "lightgreen",
                      //   margin: "50px auto",
                      // }}
                    > */}

                <Card
                  className="d-flex flex-row"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <Card.Img
                    className="img-item"
                    variant="top"
                    src={item.imgUrl}
                    style={{ width: "252px", height: "180px" }}
                  />

                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between ">
                      <div className="item-title">{item.title}</div>
                      <div className="item-price">{item.price}</div>
                    </Card.Title>
                    <Card.Text>
                      <div className="item-description ">
                        {item.description}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          );
        })
      ) : (
        <h3 className="text-center">لا يوجد اصناف</h3>
      )}
      {/* </Zoom> */}
    </Row>
  );
};
export default ItemsLis;
