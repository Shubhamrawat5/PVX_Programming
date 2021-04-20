import Card from "./Card";

function Cards() {
  const db = [
    {
      skillName: "C++",
      logo: "https://img.icons8.com/color/240/000000/c-plus-plus-logo.png",
    },
    {
      skillName: "Java",
      logo: "https://img.icons8.com/color/240/000000/java.png",
    },
    {
      skillName: "Python",
      logo: "https://img.icons8.com/color/240/000000/python.png",
    },
    {
      skillName: "JavaScript",
      logo: "https://img.icons8.com/color/240/000000/javascript.png",
    },
    {
      skillName: "C++",
      logo: "https://img.icons8.com/color/240/000000/c-plus-plus-logo.png",
    },
    {
      skillName: "Java",
      logo: "https://img.icons8.com/color/240/000000/java.png",
    },
    {
      skillName: "Python",
      logo: "https://img.icons8.com/color/240/000000/python.png",
    },
    {
      skillName: "JavaScript",
      logo: "https://img.icons8.com/color/240/000000/javascript.png",
    },
    {
      skillName: "C++",
      logo: "https://img.icons8.com/color/240/000000/c-plus-plus-logo.png",
    },
    {
      skillName: "Java",
      logo: "https://img.icons8.com/color/240/000000/java.png",
    },
    {
      skillName: "Python",
      logo: "https://img.icons8.com/color/240/000000/python.png",
    },
    {
      skillName: "JavaScript",
      logo: "https://img.icons8.com/color/240/000000/javascript.png",
    },
  ];
  return (
    <>
      {db.map((data) => {
        return <Card data={data} />;
      })}
    </>
  );
}

export default Cards;
