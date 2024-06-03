export const Page1Left = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center mt-10">
        <div className="text-left">
          <h1 className="text-5xl font-bold text-black">
            Make The Best{" "}
          </h1>
            <h1 className="text-red-500 text-5xl font-bold">Financial Decisions</h1>
        </div>
        <p className="text-gray-500 mt-4">
          Cum Et Convallis Risus Placerat Aliquam. Nunc Scelerisque Aliquet
          Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
        </p>
        <div className="flex space-x-4 mt-8">
          <a
            href="#"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            Get Started
          </a>
          <a
            href="#"
            className="flex items-center text-gray-700 hover:text-red-500"
          >
            Watch Video
          </a>
        </div>
        <div className="flex mt-10">
          {/* <img src="/path/to/image1.png" alt="Phone" className="h-96" />
          <img src="/path/to/image2.png" alt="Phone" className="h-96 -ml-24" />
          <img src="/path/to/image3.png" alt="Phone" className="h-96 -ml-24" /> */}
        </div>
      </section>
    </div>
  );
};
