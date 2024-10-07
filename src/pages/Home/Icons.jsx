import Icondetails from "../../components/Icondetails";
import img from "./../../assets/icon-any-file.svg";
import img1 from "./../../assets/icon-collaboration.svg";
import img2 from "./../../assets/icon-security.svg";
import img3 from "./../../assets/icon-any-file.svg";

const Icons = () => {
  const icons = [
    {
      img: img,
      title: "Access your AnyWay",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicinelit. Sunt=animi debitis, quae molestiae iste quos dolorem magni quia, ducimus optio eligendi repellendus mollitia",
    },
    {
      img: img1,
      title: "Collaboration",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicinelit. Sunt=animi debitis, quae molestiae iste quos dolorem magni quia, ducimus optio eligendi repellendus mollitia",
    },
    {
      img: img2,
      title: "Any File",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicinelit. Sunt=animi debitis, quae molestiae iste quos dolorem magni quia, ducimus optio eligendi repellendus mollitia",
    },
    {
      img: img3,
      title: "Security",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicinelit. Sunt=animi debitis, quae molestiae iste quos dolorem magni quia, ducimus optio eligendi repellendus mollitia",
    },
  ];

  return (
    <section>
      <div className="container element-center">
        <div className="grid grid-cols-1 md:grid-cols-2 px-[10px]  sm:px-[50px] text-center py-[100px] gap-[30px]">
          {icons.map((icon, index) => (
            <Icondetails
              key={index}
              img={icon.img}
              title={icon.title}
              desc={icon.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Icons;
