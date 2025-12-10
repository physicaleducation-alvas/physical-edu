export default function ChairmanMessage() {
  return (
    <div className="p-6 leading-7 text-justify tracking-wide">
        <div className="p-5"></div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-red-600 mb-6 text-left">
        Chairman Message
      </h1>

      {/* Image */}
      <div className="w-full flex justify-center mb-6">
        <img 
          src="c:\Users\prajw\Downloads\Picture1.jpg" 
          alt="Chairman" 
          className="w-56 h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Paragraphs */}
      <div className="space-y-5 text-justify">
        <p>
          Alva’s College of Physical Education is a unit of Alva’s Education Foundation.
          Personally being an artist and sports lover, I cherish and realize that our dreams
          of building a young generation with enthusiasm and cultural intelligence have found
          their realization through this college. It also aims to build a strong physical
          education workforce that will ensure a strong physical education base in our society.
        </p>

        <p>
          Through an individual-centered pedagogy, we build abilities and skills to create 
          new avenues for the entire human community — be it knowledge, wealth, or social 
          progression.
        </p>

        <p>
          We ensure a safe and formative environment for all students, enabling them to grow 
          into valuable assets for their families and for our great nation.
        </p>
      </div>

      {/* Signature */}
      <div className="mt-8 font-bold leading-relaxed">
        Dr. M. Mohan Alva (B.A.M.S.) <br />
        Chairman <br />
        Alva’s Education Foundation
      </div>

    </div>
  );
}
