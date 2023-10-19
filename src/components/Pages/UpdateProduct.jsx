// import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  // const coffee = useLoaderData();
  // const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const type = form.type.value;
    const image = form.image.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const brand = form.brand.value;

    const updatedProduct = {
      name,
      type,
      image,
      price,
      description,
      rating,
      brand,
    };

    console.log(updatedProduct);

    // send data to the server
  };

  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-7">
        Update Product:{" "}
      </h2>
      <form onSubmit={handleUpdate}>
        {/* form name and type */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue="name"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                defaultValue="Type"
                placeholder="Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form imageURL and Price */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">ImageURL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                defaultValue="imageURL"
                placeholder="imageURL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue="Price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form description and Rating row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                defaultValue="description"
                placeholder="description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                defaultValue="Rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form brand select row */}
        <div className="md:flex mb-8">
          <div className="form-control  max-w-xs mx-auto">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <select
                required
                className="select select-success w-full"
                name="brand"
              >
                <option>toyota</option>
                <option>ford</option>
                <option>bmw</option>
                <option>Mercedes-benz</option>
                <option>tesla</option>
                <option>Honda</option>
              </select>
            </label>
          </div>
        </div>
        <div className="max-w-fit mx-auto">
          <input
            type="submit"
            value="Update Coffee"
            className="btn bg-green-400"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
