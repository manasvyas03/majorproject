import React from 'react';
import './DoctorsList.css'; // Assuming this CSS file is properly set up for styling

const doctorsData = {
  cardiologists: [
    {
      name: 'Dr. Mayank Jain',
      phone: '+91 8224086087',
      email: 'mayank@indorehospital.com',
      location: 'Choithram Hospital',
      rating: '4.7'
    },
    {
      name: 'Dr. K. Roshan Rao',
      phone: '+91 8069049755',
      email: 'k.roshan@gmail.com',
      location: 'Sector D, Vijay Nagar, Apollo Hospitals Indore,',
      rating: '4.6'
    },
    {
      name: 'Dr. Rakesh Jain',
      phone: '+91 9645486129',
      email: 'JainTBC@gmail.com',
      location: 'TBC Tower, Gita Bhawan Rd, Indore',
      rating: '4.5'
    },
    {
      name: 'Dr. Sarita Rao',
      phone: '+91 98939 25000',
      email: 'sarita.gmail.com',
      location: 'Vijay Nagar, Scheme No 74C',
      rating: '4.4'
    }
  ],
  neurologists: [
    {
      name: 'Dr. NEHA RAI',
      phone: '+91 98384 29940',
      email: 'NEHARAI@gmail.com',
      location: 'Choithram hospital and research centre',
      rating: '4.8'
    },
    {
      name: 'Dr. Monika Porwal',
      phone: '+91 90087 65432',
      email: 'Monikaporwal@bgmail.com',
      location: 'AISHWARYA MEDICARE, Bhawarkua Main Rd',
      rating: '4.7'
    },
    {
      name: 'Dr. Ashwin Jain',
      phone: '+91 98989 34422',
      email: 'Dr. Ashwin@gmail.com',
      location: 'laxmi apartment, Sapna Sangeeta Rd',
      rating: '4.6'
    },
    {
      name: 'Dr. Indu Bhana',
      phone: '+91 98234 67328',
      email: 'indubhana@neuroclinicindore.com',
      location: 'Dhar Kothi Colony, Indore',
      rating: '4.7'
    }
  ],
  orthopedic: [
    {
      name: 'Dr. Akhil Arora',
      phone: '+91 97124 82300',
      email: 'akhilarora@gmail.com',
      location: 'Vishnupuri Bhanwarkua Square',
      rating: '4.5'
    },
    {
      name: 'Dr. Girish Gupta',
      phone: '+91 97733 46218',
      email: 'drgupta@gmail.com',
      location: 'Indore, Madhya Pradesh',
      rating: '4.6'
    },
    {
      name: 'Dr. Suyash Gupta',
      phone: '+91 99345 67012',
      email: 'suyash@orthoindore.com',
      location: 'Indore, Madhya Pradesh',
      rating: '4.5'
    },
    {
      name: 'Dr. Pooja Shah',
      phone: '+91 97562 40358',
      email: 'pooja.shah@orthospecialistsindore.com',
      location: 'Indore, Madhya Pradesh',
      rating: '4.4'
    }
  ],
  dermatologists: [
    {
      name: 'Dr. Seema Jain',
      phone: '+91 99888 66544',
      email: 'seema.jain@skincareindore.com',
      location: 'Indore, Madhya Pradesh',
      rating: '4.3'
    },
    {
      name: 'Dr. Karan Verma',
      phone: '+91 97222 67789',
      email: 'karan.verma@dermaclinicindore.com',
      location: 'Indore, Madhya Pradesh',
      rating: '4.5'
    },
    {
      name: 'Dr. Ayesha Khan',
      phone: '+91 95001 33455',
      email: 'ayesha.khan@skinwellnessindore.com',
      location: 'Indore, Madhya Pradesh',
      rating: '4.4'
    },
    {
      name: 'Dr. Rohit Choudhary',
      phone: '+91 93041 56243',
      email: 'rohit.choudhary@dermadoctorindore.com',
      location: 'Indore, Madhya Pradesh',
      rating: '4.6'
    }
  ]
};

const DoctorsList = () => {
    const handleCardClick = (doctor) => {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(doctor.name)}`;
      window.open(googleSearchUrl, '_blank');
    };
  
    const handleBookAppointmentClick = (doctor) => {
      alert(`Booking appointment with ${doctor.name}.`);
    };
  
    return (
      <div className="doctors-list-container">
        <h1 className="page-title">Doctors in Indore</h1>
        {Object.keys(doctorsData).map((category) => (
          <div className="category" key={category}>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div className="doctor-cards">
              {doctorsData[category].map((doctor, index) => (
                <div
                  className="doctor-card"
                  key={index}
                  onClick={() => handleCardClick(doctor)}
                  role="button"
                  tabIndex="0"
                >
                  <div className="doctor-info">
                    <h3>{doctor.name}</h3>
                    <p><strong>Phone:</strong> {doctor.phone}</p>
                    <p><strong>Email:</strong> {doctor.email}</p>
                    <p><strong>Location:</strong> {doctor.location}</p>
                    <p><strong>Rating:</strong> {doctor.rating || 'N/A'}</p>
                    <button
                      className="book-appointment-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookAppointmentClick(doctor);
                      }}
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default DoctorsList;