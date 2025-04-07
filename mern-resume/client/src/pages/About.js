import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3">
          <img 
            src="https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Profile" 
            className="w-64 h-64 rounded-full object-cover mx-auto border-4 border-blue-500 shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">John Doe</h1>
          <h2 className="text-2xl text-blue-600 mb-6">Full Stack Developer</h2>
          <p className="text-gray-600 mb-6">
            Passionate developer with 5+ years of experience building web applications using modern technologies like React, Node.js, and MongoDB. Specialized in creating responsive, user-friendly interfaces with clean, efficient code.
          </p>
          <div className="space-y-3">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-3" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="text-blue-500 mr-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-3" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;