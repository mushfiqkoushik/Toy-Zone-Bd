import { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Title from "../components/Title";
import { AuthContext } from "../provider/AuthProvider";
// Image 1: https://i.ibb.co/YRgsNSD/car-4.jpg
// Image 2: https://i.ibb.co/YRgsNSD/car-4.jpg
// Image 3: https://i.ibb.co/WWDhKtz/car18.jpg
// Image 4: https://i.ibb.co/YRgsNSD/car-4.jpg
// Image 5: https://i.ibb.co/xSMqzKj/car14.jpg
// Image 6: https://i.ibb.co/QnF7TPx/car13.jpg
// Image 7: https://i.ibb.co/DRLX08N/car12.jpg
// Image 8: https://i.ibb.co/YRgsNSD/car-4.jpg
export default function AddAToy() {
  const { user } = useContext(AuthContext);
  const [toy, setToy] = useState({});
  const handleOnchage = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    toy[field] = value;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(toy);
    toy.addedBy = user?.email;
    const response = await axios.post(
      "https://toy-hcjs.onrender.com/toys",
      toy
    );
    if (response?.data?.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "New toy has been added",
        showConfirmButton: false,
        timer: 1500,
      });
      // setToy({});
      navigate("/toy");
    }
    console.log(response);
  };

  return (
    <div className="text-base ]">
      <Title match={"Add Toy"} />
      <section className="p-6 text-gray-100 ">
        <form
          onSubmit={handleSubmit}
          className="container w-full max-w-5xl p-8 mx-auto space-y-6 rounded-md shadow bg-violet-950 ng-untouched ng-pristine ng-valid"
        >
          <h2 className="w-full text-3xl font-bold leading-tight">ADD A TOY</h2>
          <div className="flex justify-around gap-4">
            <div className="w-full">
              <div>
                <label htmlFor="picture url" className="block mb-1 ml-1">
                  Picture URL
                </label>
                <input
                  onChange={handleOnchage}
                  id="picture"
                  name="pictureUrl"
                  type="url"
                  required
                  placeholder=" photo url please"
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="name" className="block mb-1 ml-1">
                  Name
                </label>
                <input
                  onChange={handleOnchage}
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Toy name"
                  required=""
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="name" className="block mb-1 ml-1">
                  {" "}
                  Seller Name
                </label>
                <input
                  onChange={handleOnchage}
                  name="sellerName"
                  id="selerName"
                  type="text"
                  placeholder="Seller name"
                  required=""
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="name" className="block mb-1 ml-1">
                  {" "}
                  Seller Email
                </label>
                <input
                  onChange={handleOnchage}
                  name="sellerEmail"
                  id="selerEmail"
                  type="email"
                  placeholder="Seller Email"
                  required=""
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                />
              </div>
              <div>
                {" "}
                <div>
                  <label htmlFor="email" className="block mb-1 ml-1">
                    Price
                  </label>
                  <input
                    name="price"
                    onChange={handleOnchage}
                    id="number"
                    type="number"
                    placeholder="Price"
                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div>
                <label htmlFor="number" className="block mb-1 ml-1">
                  Rating
                </label>
                <input
                  onChange={handleOnchage}
                  id="number"
                  type="number"
                  placeholder="Rating please"
                  required=""
                  name="rating"
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="number" className="block mb-1 ml-1">
                  Available quantity
                </label>
                <input
                  id="number"
                  name="quantity"
                  onChange={handleOnchage}
                  type="number"
                  placeholder="Quantity"
                  required=""
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="text" className="block mb-1 ml-1">
                  Detail description
                </label>
                <input
                  onChange={handleOnchage}
                  id="text"
                  type="text"
                  name="description"
                  placeholder="details"
                  required=""
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 ml-1">
                  Sub-category
                </label>
                <input
                  onChange={handleOnchage}
                  id="message"
                  type="text"
                  name="subCategory"
                  placeholder="please select a category"
                  className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                ></input>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900"
            >
              ADD A TOY
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
