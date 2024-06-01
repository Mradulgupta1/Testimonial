import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data";

function App() {
  return (
	<div className="flex flex-col w-screen h-screen justify-center items-center overflow-auto bg-gray-200">
		<div className="text-center">
			<h1 className="text-4xl font-bold ">Our Testimonials</h1>
			<div className="h-[4px] w-1/5 bg-violet-400 mt-1 mx-auto"></div>
			<Testimonials reviews={reviews}/>	 
		</div>
	</div>
  );
}

export default App;
 