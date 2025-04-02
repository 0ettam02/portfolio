export default function Card() {  
    return (
        <div className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center p-6">
            
            <div className="shadow-lg p-8 w-full max-w-[300px] min-h-[20em] rounded-lg flex flex-col hover:scale-105 hover:shadow-2xl duration-300"> 
                <h1 className="text-xl font-bold">Data Science &<br/>Analysis</h1>
                <p className="flex-grow">
                    I analyze and transform complex data into actionable insights using Python, SQL and libraries such as Pandas, NumPy and Scikit-Learn. Expert in machine learning and deep learning with TensorFlow and PyTorch, as well as data visualization and big data processing.
                </p>
            </div>

            <div className="shadow-lg p-8 w-full max-w-[300px] min-h-[20em] rounded-lg flex flex-col hover:scale-105 hover:shadow-2xl duration-300">
                <h1 className="text-xl font-bold">Frontend <br/> Developer</h1>
                <p className="flex-grow">
                    I create responsive and intuitive interfaces using React, Next.js, HTML5, CSS3 and JavaScript ES6+. Experience with CSS frameworks like Tailwind.
                </p>
            </div>

            <div className="shadow-lg p-8 w-full max-w-[300px] min-h-[20em] rounded-lg flex flex-col hover:scale-105 hover:shadow-2xl duration-300">
                <h1 className="text-xl font-bold">Backend <br/> Developer</h1>
                <p className="flex-grow">
                    Robust and scalable API development with Node.js, Express, Python/Flask and SQL/NoSQL databases. Experience with serverless architectures and microservices.
                </p>
            </div>

            <div className="shadow-lg p-8 w-full max-w-[300px] min-h-[20em] rounded-lg flex flex-col hover:scale-105 hover:shadow-2xl duration-300">
                <h1 className="text-xl font-bold">UX/UI<br/> Design</h1>
                <p className="flex-grow">
                    I design intuitive and engaging user experiences with Figma and Adobe XD. Skilled in wireframing, prototyping and design system.
                </p>
            </div>
        </div>
    );
};
