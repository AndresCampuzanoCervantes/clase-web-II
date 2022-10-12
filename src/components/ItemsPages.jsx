import { useEffect } from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Button } from '@mui/material';
import  "../index.css"
const ItemsPages = ({ countPages=1, page, newPage }) => {

    return (
        <div style={{marginLeft:"20px"}}>
            <Card.Footer className="scrollbar mt-2">
                <Nav style={{marginBottom: "-15px"}}>
                    <ul className="pagination">
                        {
                            Array.from(Array(countPages===0?1:countPages)).map((item, index) => (
                                <li className={page === index ? 'active page-item' : 'page-item'} key={index}>
                                    <span className="page-link" role="button" onClick={() => { newPage(index) }}>{index + 1}</span>
                                </li>
                            ))
                        }
                    </ul>
                </Nav>
            </Card.Footer>
            <div className='d-flex justify-content-between mx-2'>
                <Button variant="contained" className="mt-2 mb-3" onClick={()=>{newPage(page-1)}} disabled={page===0}>
                    Atras
                </Button>
                <Button variant="contained" className="mt-2 mb-3" onClick={()=>{newPage(page+1)}} >
                    siguiente
                </Button>
            </div>

        </div>

    )
}

export default ItemsPages