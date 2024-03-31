export default function Cover() {
  return (
    <>
      <div
        className="sm:w-screen bg-white h-[400px] sm:h-[500px] md:h-[700px] flex flex-col sm:flex-row pl-10 pt-20 pr-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(./cover.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="home"
      >
        <div className="w-full sm:w-2/3 mr-12">
          <h1 className="font-semibold text-2xl sm:text-4xl text-white">
            Pramuka {""}
            <span className="text-white">SMA Negeri 1 Toapaya</span>
          </h1>
          <h3 className="font-nunito font-medium my-6 text-xs sm:text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            cupiditate repellendus sapiente molestiae debitis repellat inventore
            impedit repudiandae neque optio.
          </h3>
          <h3 className="font-nunito font-semibold text-xs sm:text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint
            voluptas qui necessitatibus molestiae, distinctio deserunt iste
            temporibus illo enim dolorum voluptatum aut, cumque facere! Dolor
            quasi aut ipsa nobis odio facere numquam quod pariatur nesciunt qui
          </h3>
        </div>
        <div className="bg-gray-100 w-full sm:w-[400px] h-[200px] sm:h-[400px] rounded-full hidden sm:flex items-center justify-center mt-4 sm:mt-0">
          <img
            src="./logo.png"
            className="h-[200px] sm:h-[400px] w-[200px] sm:w-[400px] object-cover rounded-full"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
