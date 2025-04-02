export default function Hero() {
    return (
        <div className="relative hero flex flex-col space-y-6 mx-10 h-screen justify-center">
            <h1 className="font-bold text-xl text-[#9381ff]">Welcome in my portfolio</h1>
            <h1 className="font-bold text-7xl">
                Data Scientist & <br /> Software Engineer
            </h1>
            <h1 className="text-gray-400 text-lg max-w-160">
            I design and develop scalable, data-driven software solutions, combining advanced algorithms, software engineering, and data analytics to create efficient, intelligent applications.
            </h1>
            <div className="absolute bottom-0 right-0 w-200 h-100 bg-[#143b6b] rounded-t-full opacity-0 md:opacity-100"></div>
        </div>
    );
}
