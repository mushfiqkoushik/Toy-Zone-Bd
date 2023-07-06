import React from "react";

export default function Banner() {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <img
              src="https://i.ibb.co/B4Q3Dxp/car7.jpg"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover group-focus">
                The Ultimate Destination for Miniature Speedsters
              </h3>
              <span className="text-sm dark:text-gray-400">May 19, 2023</span>
              <p className="text-2xl">
                Discover a World of Excitement and Adventure at Toy Car Zone -
                Where Imagination Meets the Fast Lane!"
              </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
