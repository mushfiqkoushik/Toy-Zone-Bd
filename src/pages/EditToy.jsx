import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Title from "../components/Title";

import { useLocation, useNavigate } from "react-router-dom";
// Image 1: https://i.ibb.co/YRgsNSD/car-4.jpg
// Image 2: https://i.ibb.co/YRgsNSD/car-4.jpg
// Image 3: https://i.ibb.co/WWDhKtz/car18.jpg
// Image 4: https://i.ibb.co/YRgsNSD/car-4.jpg
// Image 5: https://i.ibb.co/xSMqzKj/car14.jpg
// Image 6: https://i.ibb.co/QnF7TPx/car13.jpg
// Image 7: https://i.ibb.co/DRLX08N/car12.jpg
// Image 8: https://i.ibb.co/YRgsNSD/car-4.jpg
export default function EditToy() {

  const [toy, setToy] = useState({});
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const navigate = useNavigate();
  const { _id: id, price, description, quantity } = data || {};

  useEffect(() => {
    toy.price = price;
    toy.description = description;
    toy.quantity = quantity;
  }, [price, description, quantity]);
  const handleOnchage = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    toy[field] = value;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(toy);
   
    const response = await axios.patch(
      `https://toy-hcjs.onrender.com/toys/${id}`,
      toy
    );
    if (response?.data) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Edited",
        showConfirmButton: false,
        timer: 1500,
      });
      //   setToy({});
      navigate("/mytoy");
    }
    console.log(response);
  };

  return (
    <div className="text-base ]">
      <Title match={"Edit Toy"} />
      <section className="p-6 text-gray-100 ">
        <form
          onSubmit={handleSubmit}
          className="container w-full max-w-3xl p-8 mx-auto space-y-6 rounded-md shadow bg-violet-950 ng-untouched ng-pristine ng-valid"
        >
          <h2 className="w-full text-3xl font-bold leading-tight"> Edit TOY</h2>
          <div className="flex justify-around gap-4">
            <div className="w-full">
              <div>
                {" "}
                <div>
                  <label htmlFor="email" className="block mb-1 ml-1">
                    Price
                  </label>
                  <input
                    defaultValue={price}
                    id="price"
                    name="price"
                    onChange={handleOnchage}
                    type="number"
                    placeholder="Price"
                    required=""
                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="number" className="block mb-1 ml-1">
                  Available quantity
                </label>
                <input
                  defaultValue={quantity}
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
                  defaultValue={description}
                  onChange={handleOnchage}
                  id="text"
                  type="text"
                  name="description"
                  placeholder="details"
                  required=""
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
