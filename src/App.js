import React from "react";
import ImageCardLeft from "./components/ImageCardLeft";
import ImageCardRight from "./components/ImageCardRight";

function App() {
  return (
    <div>
      <div className="container bg-[#2A2E43] max-w-sm h-full p-5 relative">
        <h1 className="text-white text-5xl pb-10 ">City News</h1>
        {/* MAIN IMAGE */}
        <div className="relative">
          <img
            src="/images/photo1.jpg"
            alt="mainphoto"
            className="rounded-2xl mb-20 "
          />
          <div className="absolute border rounded-2xl bg-white top-[200px] w-[90%] left-4 p-4 ">
            <span>Andree-Ann Labranche</span>
            <h6 className="text-xs text-slate-400">18 nov</h6>
            <p className="text-sm text-slate-500">
              We must believe that we are gifted <br /> for something, and that
              this thing, at
            </p>
          </div>
        </div>
        {/* Image Components */}
        <ImageCardRight
          date="17 Nov"
          name="Adrien Stone"
          desc="If you're offered a seat on a rocket ship, don't ask what seat! Just get on."
        />
        <ImageCardLeft
          date="16 Nov"
          name="Bernard Nolan"
          desc="You can't fall if you don't climb. But there's no joy in living your whole life "
        />
        <ImageCardRight
          date="16 Nov"
          name="Bernard Nolan"
          desc="You can't fall if you don't climb. But there's no joy in living your whole life "
        />

        <button className="sticky left-full mt-3 bottom-0 py-2 px-5 bg-blue-600 text-white rounded-xl text-sm ">
          {" "}
          POST NEWS
        </button>
      </div>
    </div>
  );
}

export default App;
