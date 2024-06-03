import { advantages } from "@/data/Advantages";

export const AdvantagesLeft = () => {
  return (
    <div className="p-8 bg-white rounded-lg ">
      <h2 className="text-2xl font-bold text-red-500 mb-4">ADVANTAGES</h2>
      <h1 className="text-4xl font-extrabold mb-6">Why Choose Uifry?</h1>
      {advantages.map((advantage, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center mb-2">
            <span className="mr-4 text-4xl">{advantage.icon}</span>
            <h3 className="text-2xl font-semibold">{advantage.title}</h3>
          </div>
          <p className="text-gray-600">{advantage.description}</p>
        </div>
      ))}
    </div>
  );
};
