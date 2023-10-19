import { useParams } from "react-router-dom";

const UpdateProduct = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            This is update page
        </div>
    );
};

export default UpdateProduct;