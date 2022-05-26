import ChefCard from "./ChefCard";

export default function ChefsSection() {
  const chefs = [
    {
      name: "Juan Carlos",
      img: "img/top-chefs/img_1.jpeg",
      recipesCount: "10",
      cuisine: "Mexican",
    },
    {
      name: "John Doe",
      img: "img/top-chefs/img_2.jpeg",
      recipesCount: "05",
      cuisine: "Japanese",
    },
    {
      name: "Erich Maria",
      img: "img/top-chefs/img_3.jpeg",
      recipesCount: "13",
      cuisine: "Italian",
    },
    {
      name: "Chris Brown",
      img: "img/top-chefs/img_4.jpeg",
      recipesCount: "08",
      cuisine: "American",
    },
    {
      name: "David Matulka",
      img: "img/top-chefs/img_5.jpeg",
      recipesCount: "11",
      cuisine: "Polish",
    },
    {
      name: "Blake Lively",
      img: "img/top-chefs/img_6.jpeg",
      recipesCount: "09",
      cuisine: "French",
    },
  ];
  return (
    <div className="section chefs">
      <h1 className="title">Our Top Chefs</h1>
      <div className="top-chefs-container">
        {/* <ChefCard />
        <ChefCard />
        <ChefCard />
        <ChefCard />
        <ChefCard />
        <ChefCard /> */}
        {chefs.map(chef => <ChefCard key={chef.name} chef={chef} />)}
      </div>
    </div>
  );
}
