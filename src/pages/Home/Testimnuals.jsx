import Person from "../../components/Person";
import img1 from "./../../assets/profile-1.jpg";
import img2 from "./../../assets/profile-2.jpg";
import img3 from "./../../assets/profile-3.jpg";

const Testimnuals = () => {
  const persons = [
    {
      img: img1,
      title: "Access your AnyWay",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicinelit. Sunt=animi debitis, quae molestiae iste quos dolorem magni quia, ducimus optio eligendi repellendus mollitia",
      descs: "Lorem ipsum ipsum",
    },
    {
      img: img2,
      title: "Collaboration",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicinelit. Sunt=animi debitis, quae molestiae iste quos dolorem magni quia, ducimus optio eligendi repellendus mollitia",
      descs: "Lorem ipsum ipsum",
    },
    {
      img: img3,
      title: "Any File",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicinelit. Sunt=animi debitis, quae molestiae iste quos dolorem magni quia, ducimus optio eligendi repellendus mollitia",
      descs: "Lorem ipsum ipsum",
    },
  ];
  return (
    <section>
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-3 px-[10px]  sm:px-[50px]  py-[50px] gap-[30px] mb-[150px]">
          {persons.map((person, index) => (
            <Person
              key={index}
              img={person.img}
              title={person.title}
              desc={person.desc}
              descs={person.descs}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimnuals;
