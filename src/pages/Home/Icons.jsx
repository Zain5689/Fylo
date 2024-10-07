import Icondetails from "../../components/Icondetails";

const Icons = () => {
  const icons = [
    {
      img: "/src/assets/icon-any-file.svg",
      title: "Access your AnyWay",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicinelit. Sunt=animi debitis, quae molestiae iste quos dolorem magni quia, ducimus optio eligendi repellendus mollitia",
    },
    {
      img: "/src/assets/icon-collaboration.svg",
      title: "Collaboration",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicinelit. Sunt=animi debitis, quae molestiae iste quos dolorem magni quia, ducimus optio eligendi repellendus mollitia",
    },
    {
      img: "/src/assets/icon-any-file.svg",
      title: "Any File",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicinelit. Sunt=animi debitis, quae molestiae iste quos dolorem magni quia, ducimus optio eligendi repellendus mollitia",
    },
    {
      img: "/src/assets/icon-security.svg",
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
