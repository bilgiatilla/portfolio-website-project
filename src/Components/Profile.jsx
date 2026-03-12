import profileImg from "../Assets/profile.png";

function Profile() {
  return (
    <section className="w-full bg-[#4731D3] dark:bg-[#001f24] px-6 py-6 md:px-8 lg:px-10 lg:py-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-4xl font-bold text-[#CBF281] dark:text-[#ffbc42] md:mb-12 md:text-5xl">
          Profile
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_auto_1.2fr] lg:items-start">
          {/* Basic Info */}
          <div className="text-white">
            <h3 className="mb-6 text-2xl font-semibold text-[#CBF281] dark:text-[#ffbc42]">
              Basic Information
            </h3>

            <div className="space-y-10">
              <div className="grid grid-cols-[120px_1fr] gap-x-4">
                <span className="font-semibold">Birth Date</span>
                <span>27.07.1994</span>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-x-4">
                <span className="font-semibold">City</span>
                <span>Izmir</span>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-x-4">
                <span className="font-semibold">Education</span>
                <span>Ege University Public Relations and Advertising</span>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-x-4">
                <span className="font-semibold">Preferred Role</span>
                <span>Frontend, UI</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-center">
            <img
              src={profileImg}
              alt="Profile"
              className="h-70 w-55 rounded-2xl object-cover shadow-xl sm:h-80 sm:w-62.5 lg:h-85 lg:w-67.5"
            />
          </div>
          <div className="text-white">
            <h3 className="mb-6 text-2xl font-semibold text-[#CBF281] dark:text-[#ffbc42]">
              About Me
            </h3>

            <p className="mb-4 text-sm leading-7 text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              deleniti beatae laudantium error excepturi reprehenderit totam ad
              cupiditate voluptatibus laborum quasi accusamus consequuntur.
            </p>

            <p className="mb-4 text-sm leading-7 text-white/90">
              Ullam ipsum sunt. Iusto nihil ducimus perspiciatis! Cum, facilis
              animi id laborum dignissimos nam vitae sint quam ad, rerum ullam
              ducimus nihil laboriosam recusandae praesentium ut provident.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;