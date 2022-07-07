/* eslint-disable jsx-a11y/img-redundant-alt */
import "./App.css";
import { BiArrowBack } from "react-icons/bi";

function App() {
  return (
    <div
      className="
    container
    mx-auto 
    h-screen 
    text-white
    p-5"
      style={{ height: "100vh", maxWidth: "390px" }}
    >
      <div>
        <a href="./login">
          <BiArrowBack />{" "}
        </a>
        <br />
        <span className="text-3xl ">City News</span>
        {/* main image */}
        <div className="relative  my-6 grid justify-items-center z-2 ">
          <div>
            <img
              src="images/photo1.jpg"
              alt="car photo"
              className="relative w-64 z-1 rounded-2xl mt-[18px] left-[10px]"
            />
          </div>
          <div
            className="p-[25px]
      pb-3
      bg-white
      rounded-2xl
      text-black
      text-sm
      w-[90%]"
          >
            <div>
              <div>17 Nov</div>
              <div>Kelly Quintesa</div>
              <div>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum
              </div>
            </div>
          </div>
        </div>
        {/* image1 */}
        <div className="relative  my-6 grid justify-items-end ">
          <div>
            <img
              src="images/photo2.jpg"
              alt="car photo"
              className="absolute w-32 rounded-2xl mt-[18px] left-[10px]"
            />
          </div>
          <div
            className="p-[25px]
      pb-3
      bg-white
      rounded-2xl
      text-black
      text-sm
      w-[90%]"
          >
            <div className="ml-[85px]">
              <div>17 Nov</div>
              <div>Kelly Quintesa</div>
              <div>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* image 2  */}
      <div className="relative  my-6 grid justify-items-end ">
        <div>
          <img
            src="images/photo2.jpg"
            alt="car photo"
            className="absolute  w-32 rounded-2xl mt-[18px] right-[10px]"
          />
        </div>
        <div
          className="p-[25px]
      pb-3
      bg-white
      rounded-2xl
      text-black
      text-sm
      w-[90%]"
        >
          <div className="mr-[120px]">
            <div>17 Nov</div>
            <div>Kelly Quintesa</div>
            <div>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum
            </div>
          </div>
        </div>
      </div>

      {/* image3 */}
      <div className="relative  my-6 grid justify-items-end ">
        <div>
          <img
            src="images/photo2.jpg"
            alt="car photo"
            className="absolute w-32 rounded-2xl mt-[18px] left-[10px]"
          />
        </div>
        <div
          className="p-[25px]
      pb-3
      bg-white
      rounded-2xl
      text-black
      text-sm
      w-[90%]"
        >
          <div className="ml-[85px]">
            <div>17 Nov</div>
            <div>Kelly Quintesa</div>
            <div>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum
            </div>
          </div>
        </div>
      </div>

      {/* image4  */}
      <div
        className="
      relative  
      my-6 
      grid 
      justify-items-end "
      >
        <div>
          <img
            src="images/photo2.jpg"
            alt="car photo"
            className="absolute  w-32 rounded-2xl mt-[18px] right-[10px]"
          />
        </div>
        <div
          className="p-[25px]
      pb-3
      bg-white
      rounded-2xl
      text-black
      text-sm
      w-[90%]"
        >
          <div className="mr-[120px]">
            <div>17 Nov</div>
            <div>Kelly Quintesa</div>
            <div>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum
            </div>
          </div>
        </div>
      </div>

      {/* post news button */}
      <div
        className="
        py-[5px] 
        px-[15] 
        text-white 
        bg-blue-600 w-[150px]
        sticky bottom-[15px] 
        left-[50%] 
        rounded-xl 
        text-center "
      >
        POST NEWS
      </div>
    </div>
  );
}

export default App;
