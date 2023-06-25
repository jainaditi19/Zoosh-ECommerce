import React from "react";
import { NavLink } from "react-router-dom";

const ShowProducts = (props) => {

    const { filter, setFilter, data } = props;

    const filterProduct = (strParam) => {
        const updatedList = data.filter((x) => x.category === strParam);
        setFilter(updatedList);
    }

    return (
        <>
            <div className="buttons d-flex justify-content-center mb-5 pb-5 text-center">
                <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>
                    All
                </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>
                    Men's
                </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
                    Women's
                </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>
                    Jewellery
                </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>
                    Electronics
                </button>
            </div>

            {filter &&
                filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title}</h5>
                                            <p className="card-text lead fw-bold">${product.price}</p>
                                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                                                Buy Now
                                            </NavLink>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )

};

export default ShowProducts;