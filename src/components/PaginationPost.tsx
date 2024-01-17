import { useEffect, useRef, useState } from "react";
import { UseFoodContext } from "../contexts/FoodContext";
import FoodItem from "./FoodItem";

const PaginationPost = () => {

    const { foods } = UseFoodContext();
    const [postPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const productListRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if(foods && foods.length > 10){
            let activeNumber = Math.ceil(foods.length/postPerPage);
            setTotalPages(activeNumber);
        }
    },[foods]);

    const lastPageIndex = postPerPage * currentPage;
    const firstPageIndex = lastPageIndex - postPerPage;
    const paginationProducts = foods.slice(firstPageIndex, lastPageIndex);

    let pages = [];
    if(totalPages > 1){
      for(let i = 0; i < totalPages; i++){
        pages[i] = i + 1;
      }
    }

    const setActivePage = (activeNumber:number) => {
      setCurrentPage(activeNumber);
      window.scrollTo({
        top:productListRef.current?.scrollTop,
        behavior:"smooth"
      })
    }

    const setNPActivePage = (dir:string) => {
      if(currentPage > 1 && dir == "prev"){
        setCurrentPage(() => currentPage - 1);
        window.scrollTo({
          top:productListRef.current?.scrollTop,
          behavior:"smooth"
        })
      }else if(currentPage < totalPages && dir == "next"){
        setCurrentPage(() => currentPage + 1);
        window.scrollTo({
          top:productListRef.current?.scrollTop,
          behavior:"smooth"
        })
      }
    }

    return (
      <>
        <div className="foods-list" ref={productListRef}>
          {
            paginationProducts.map((product,index) => {
              return (
                <FoodItem food={product} key={index}/>
              )})
          }
        </div>
       
          {
            totalPages > 1 && 
            <div className="pagination-wrapper">
              <div className="pagination-box">
                <button className="pagination-item" onClick={() => setNPActivePage('prev') }>Prev</button>
                {
                  pages.map((page, index) =>{
                    return(
                      <button className={`pagination-item ${currentPage == page ? "active-page":""}`} key={index} onClick={() => setActivePage(page) }>
                        {page}
                      </button>
                    )
                  })
                }
                <button className="pagination-item" onClick={() => setNPActivePage('next') }>Next</button>
              </div>
            </div>
          }
        
      </>
    )
}

export default PaginationPost