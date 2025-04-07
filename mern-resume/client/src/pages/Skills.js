import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, faNodeJs, faJs, faHtml5, faCss3Alt, faGitAlt 
} from '@fortawesome/free-brands-svg-icons';

const skills = [
  { icon: faReact, name: 'React', level: '90%' },
  { icon: faNodeJs, name: 'Node.js', level: '85%' },
  { icon: faJs, name: 'JavaScript', level: '95%' },
  { icon: faHtml5, name: 'HTML5', level: '90%' },
  { icon: faCss3Alt, name: 'CSS3', level: '85%' },
  { icon: faGitAlt, name: 'Git', level: '80%' }
];

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Technical Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map(skill => (
          <div key={skill.name} className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <FontAwesomeIcon icon={skill.icon} className="text-blue-500 text-3xl mr-4" />
            <div>
              <h2 className="text-xl font-semibold">{skill.name}</h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className={`bg-blue-500 h-2.5 rounded-full`} style={{ width: skill.level }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;