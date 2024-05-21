import PupilCard from "./PupilCard";
import "./Pupil.css";

const pupils = [
  { name: "John Doe", title: "Web Developer" },
  { name: "Jane Smith", title: "Graphic Designer" },
  { name: "Sam Wilson", title: "Software Engineer" },
  { name: "Lisa Brown", title: "Product Manager" },
  { name: "Alice Johnson", title: "Data Scientist" },
  { name: "Bob White", title: "UX/UI Designer" },
  { name: "Clara Olsen", title: "Marketing Director" },
  { name: "Derek Black", title: "Operations Manager" },
];

const Pupil = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-4 space-y-4">
      <div className="title">Our Team</div>
      {pupils.map((pupil, index) => (
        <div key={index} className="fade-in">
          <PupilCard name={pupil.name} title={pupil.title} />
        </div>
      ))}
    </div>
  );
};

export default Pupil;
