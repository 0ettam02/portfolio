import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* header */}
      <div className="w-full h-15 flex justify-center mb-10">
        <img
        src="/Instagram-Logo.svg"
        width={100}
        height={100}
        alt="Instagram"
        />
        
        <Link href="https://www.linkedin.com/in/matteo-aruta-b25846231/">
        <img
        src="/Linkedin-Logo.svg"
        width={100}
        height={100}
        alt="Linkedin"
        />
        </Link>

        <Link href="https://github.com/0ettam02">
        <img
        src="/GitHub-Logo.svg"
        width={100}
        height={100}
        alt="GitHub"
        />
        </Link>

        <Link href="https://twitter.com/aruta_matteo">
        <img
        src="/Twitter-Logo.svg"
        width={100}
        height={100}
        alt="Twitter"
        />
        </Link>
      </div>

      {/* top sito -------------------------------------------------*/}
      <div className="w-1/2 bg-yellow-500 rounded-r-full flex flex-col">
        <div className="flex flex-col">
          <h1 className="font-bold text-8xl mb-20 mt-10 max-w-sm">
          &lt;matteo aruta /&gt;
          </h1>
        </div>
      </div>

      {/* griglia lavori --------------------------------------------*/}
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="font-bold grid grid-rows-1 grid-flow-col gap-4 text-center">
        <div className="p-20 ml-20 border-4 rounded-md max-w-xs hover:bg-blue-500 hover:text-white transition duration-500 ease-in-out">About me</div>
          <div className="p-20 ml-20 border-4 rounded-md max-w-xs hover:bg-red-500 hover:text-white transition duration-500 ease-in-out">Python</div>
          <div className="p-20 ml-20 border-4 rounded-md max-w-xs hover:bg-yellow-500 hover:text-white transition duration-500 ease-in-out">Web</div>
          <div className="p-20 ml-20 border-4 rounded-md max-w-xs hover:bg-green-500 hover:text-white transition duration-500 ease-in-out">Java</div>
        </div>
      </div>

      {/* something about me -------------------------------------------*/}
      <div className='w-1/2 h-1/2 bg-blue-500 rounded-r-full flex flex-col'>
        <div className='font-bold text-8xl max-w-sm'>
          &lt;Something about me /&gt; 
        </div>
      </div>
      {/* SVG con animazione bounce */}
      <svg className="animate-bounce w-6 h-6 mx-auto mt-20" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="10" x2="20" y2="10" stroke="black" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <div className='mt-10 text-2xl text-center font-bold'>
         My My name is Matteo Aruta, and I am 21 years old. I am currently studying Computer Science at the University of Naples Federico II. I have a strong passion for programming and am always eager to explore new technologies. Working collaboratively is something I greatly enjoy, and I have proficiency in HTML, CSS, JavaScript, Python, Java, and C.
         I am particularly enthusiastic about the field of machine learning and am actively involved in research within this domain. My ultimate goal is to become a researcher in the field of Artificial Intelligence, specifically focusing on its applications in the field of medicine. I am particularly interested in contributing to research related to Alzheimer's disease and exploring how AI can play a crucial role in advancing our understanding and treatment of this condition.
      </div>

      {/* Python ------------------------------------------------------*/}
      <div className='w-1/2 h-1/2 bg-red-500 rounded-r-full flex flex-col mt-40'>
        <div className='font-bold text-8xl mt-5 mb-5'>
          &lt;Python /&gt;
        </div>
      </div>
    </>
  );
}
