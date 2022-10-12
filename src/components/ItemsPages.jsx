import { useEffect } from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Button } from '@mui/material';
import  "../index.css"
const ItemsPages = ({ countPages, page, newPage }) => {

    return (
        <>
            <Card.Footer className="scrollbar animate__animated animate__fadeIn m-2">
                <Nav aria-label="Page navigation">
                    <ul className="pagination">
                        {
                            Array.from(Array(countPages)).map((item, index) => (
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

        </>

    )
}

export default ItemsPages