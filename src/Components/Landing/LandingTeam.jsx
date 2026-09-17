import React from 'react';
import { mediaUrl } from '../../config/media';

const teamImg1 = mediaUrl('assets/images/Team-1.jpeg');
const teamImg2 = mediaUrl('assets/images/Team-2.jpeg');
const teamImg3 = mediaUrl('assets/images/Team-3.jpeg');
const teamImg4 = mediaUrl('assets/images/Team-4.jpeg');
const teamImg5 = mediaUrl('assets/images/wlp-avatar-1.jpg');
const teamImg6 = mediaUrl('assets/images/wlp-avatar-2.jpg');
const teamImg7 = mediaUrl('assets/images/wlp-avatar-3.jpg');
const teamImg8 = mediaUrl('assets/images/career-team.jpeg');

const teamMembers = [
  {
    name: 'Tanmay',
    role: 'Brand Manager',
    img: teamImg1
  },
  {
    name: 'Abhinaba',
    role: 'Delivery Manager',
    img: teamImg2
  },
  {
    name: 'Kaustav',
    role: 'Lead Graphic Designer',
    img: teamImg3
  },
  {
    name: 'Anjana',
    role: 'Senior Copywriter',
    img: teamImg4
  },
  {
    name: 'Rahul',
    role: 'Motion & 3D Artist',
    img: teamImg5
  },
  {
    name: 'Rishab',
    role: 'Visual Designer',
    img: teamImg6
  },
  {
    name: 'Soma',
    role: 'SEO & Performance Lead',
    img: teamImg7
  },
  {
    name: 'Sohom',
    role: 'Media & Production',
    img: teamImg8
  }
];

const LandingTeam = () => {
  return (
    <section className="wa-team-section wa-section-py" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="wa-section-title">
            The Faces Behind <span className="wa-highlight">We Alll</span>
          </h2>
          <p className="wa-section-subtitle">
            Meet the thinkers, designers, copywriters, and performance strategists who turn complex digital challenges into high-converting campaigns.
          </p>
        </div>

        <div className="wa-team-grid">
          {teamMembers.map((member, idx) => (
            <div className="wa-team-card" key={idx}>
              <div className="wa-team-photo-wrap">
                <img src={member.img} alt={member.name} loading="lazy" />
              </div>
              <div className="wa-team-info">
                <h3 className="wa-team-name">{member.name}</h3>
                <div className="wa-team-role">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingTeam;
