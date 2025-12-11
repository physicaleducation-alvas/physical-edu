export default function PrincipalMessage() {
  return (
    <div className="p-6 leading-7 text-justify tracking-wide">
        <div className="p-5"></div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-red-600 mb-6 text-left">
        Principal Message
      </h1>

      {/* Image */}
      <div className="w-full flex justify-center mb-6">
        <img
          src="/principal.jpg"
          alt="Principal"
          className="w-56 h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Message Content */}
      <div className="space-y-5">
        <p>
          Alva's College of Physical Education has always been committed to fostering an 
          environment where holistic development is at the core of learning. Through a 
          balanced blend of academics, sports, values, and culture, we aim to create 
          individuals who are confident, disciplined, and capable of leading with purpose.
        </p>

        <p>
          As the field of physical education continues to evolve, we ensure that our students 
          receive rigorous training, exposure, and opportunities to excel both nationally and 
          internationally. Our focus remains on developing physical, mental, and emotional 
          strength in every student.
        </p>

        <p>
          With dedicated faculty, world-class facilities, and an environment that nurtures 
          talent, Alva's stands tall in shaping responsible and dynamic leaders for tomorrow.
        </p>
      </div>

      {/* Signature */}
      <div className="mt-8 font-bold leading-relaxed">
        Dr. [Principal Name] <br />
        Principal <br />
        Alva's College of Physical Education
      </div>

    </div>
  );
}