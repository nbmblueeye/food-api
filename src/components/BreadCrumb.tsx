import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

type Props = {
    cate: string|undefined, 
    product: string|undefined, 
}
const BreadCrumb = ({cate, product}:Props) => {

    return (
        <ul className="breadcrumb-box">
            <li className="breadcrumb-item">
                <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item"><GoArrowRight size={18}/></li>
            <li className="breadcrumb-item category">
               { product ? <Link to={`/category/${cate}`}>{cate}</Link> : cate}
            </li>
            {product && 
            <>
                <li className="breadcrumb-item"><GoArrowRight /></li><li className="breadcrumb-item product">{product}</li>
            </>
            }
        </ul>
    )
}

export default BreadCrumb