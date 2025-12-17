export default function CulturalEvents() {
  return (
    <div className="p-4 md:p-6 leading-relaxed text-justify">

      {/* Main Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-6 text-center md:text-left">
        Cultural Events
      </h1>

      <div className="space-y-5 text-base md:text-lg">

        {/* Alva’s Nudisiri */}
        <div>
          <span className="font-bold text-lg md:text-xl">Alva's Nudisiri</span>
          <p className="mt-1">
            Kannada, the classical prime language among Dravidian languages has been under 
            pressure of proving its identity. Alva's Education Foundation organizes a literary 
            summit for three days every year in November. On an average, 20-25 thousand people 
            participate every year to witness scholarly deliberations.
          </p>
        </div>

        {/* Alva’s Vidyarthisiri */}
        <div>
          <span className="font-bold text-lg md:text-xl">Alva's Vidhyarthisiri</span>
          <p className="mt-1">
            This event helps shape the worldview of students through involvement in literary 
            activities. It provides a platform for students of all classes to present their 
            literary and cultural abilities and is organized as a pre-event to Alva's Nudisiri.
          </p>
        </div>

        {/* Alva’s Tulusiri */}
        <div>
          <span className="font-bold text-lg md:text-xl">Alva's Tulusiri</span>
          <p className="mt-1">
            Tulu, one of the oldest Dravidian languages, faces neglect. Alva's Tulusiri builds 
            a bridge between cultures and promotes Tulu literature and heritage as part of 
            Alva's Nudisiri.
          </p>
        </div>

        {/* Alva’s Konkanisiri */}
        <div>
          <span className="font-bold text-lg md:text-xl">Alva's Konkanisiri</span>
          <p className="mt-1">
            This event preserves and promotes the language and culture of the Konkani-speaking 
            community, extending Alva's efforts toward multicultural celebration.
          </p>
        </div>

        {/* Alva’s Byarisiri */}
        <div>
          <span className="font-bold text-lg md:text-xl">Alva's Byarisiri</span>
          <p className="mt-1">
            The Byari-speaking Muslim community has a rich cultural identity. This event 
            supports the preservation and promotion of the Byari language and culture.
          </p>
        </div>

        {/* Alva’s Beladingala Chinthana */}
        <div>
          <span className="font-bold text-lg md:text-xl">Alva's Beladingala Chinthana</span>
          <p className="mt-1">
            A monthly program where students interact with renowned personalities from various 
            fields. It is conducted on every full moon day to enrich student perspectives.
          </p>
        </div>
      </div>
    </div>
  );
}
