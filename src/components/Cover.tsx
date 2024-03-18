export default function Cover() {
  return (
    <>
      <div
        className="bg-white h-[500px] flex pl-10 pt-20 pr-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(./cover.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-2/3 mr-12">
          <h1 className="font-semibold text-4xl text-white">
            Pramuka {""}
            <span className="text-white">SMA Negeri 1 Toapaya</span>
          </h1>
          <h3 className="font-nunito font-medium my-6 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            cupiditate repellendus sapiente molestiae debitis repellat inventore
            impedit repudiandae neque optio.
          </h3>
          <h3 className="font-nunito font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint
            voluptas qui necessitatibus molestiae, distinctio deserunt iste
            temporibus illo enim dolorum voluptatum aut, cumque facere! Dolor
            quasi aut ipsa nobis odio facere numquam quod pariatur nesciunt qui
            facilis commodi, libero fugit architecto perspiciatis placeat
            accusantium sunt quos, animi voluptas reiciendis porro distinctio
            modi hic. Quos expedita in soluta facere hic recusandae quasi veniam
            ex quam temporibus dolorum sint, praesentium eius voluptatum
            accusantium mollitia fuga nisi. Nemo eius porro esse voluptates amet
            laboriosam nesciunt quia recusandae, ipsam atque suscipit
            consequuntur nostrum modi possimus. Maxime facere non, voluptatem
            ipsam facilis obcaecati sapiente.
          </h3>
        </div>
        <div className="bg-yellow-200 w-[400px] h-[400px] rounded-full flex items-center justify-center">
          {/* <img
            src="./person.jpg"
            className="h-[400px] w-[400px] object-fill rounded-full"
            alt=""
          /> */}
        </div>
      </div>
    </>
  );
}
