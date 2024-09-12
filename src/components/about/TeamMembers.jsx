const teamMembers = [
  { name: 'John Doe', role: 'CEO', image: 'https://via.placeholder.com/150' },
  { name: 'Jane Smith', role: 'CTO', image: 'https://via.placeholder.com/150' },
  { name: 'Sam Wilson', role: 'Lead Designer', image: 'https://via.placeholder.com/150' },
  { name: 'Alex Johnson', role: 'Lead Developer', image: 'https://via.placeholder.com/150' },
];

const TeamMembers = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 max-w-xs transform transition-transform hover:scale-105">
              <img className="w-32 h-32 rounded-full mx-auto mb-4" src={member.image} alt={member.name} />
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
