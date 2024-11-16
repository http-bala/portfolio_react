import React from "react";

const SkillsSection = () => {
  return (
    <section className="skills  bg-white py-20">
      <div className="container max-w-screen-xl mx-auto flex flex-wrap">
        {/* Left Section */}
        <div className="left w-full lg:w-1/2 px-6 lg:px-12 mb-10 lg:mb-0">
          <div className="heading">
            <div className="heading_top flex items-center">
              <div className="line w-8 h-1 bg-gray-500"></div>
              <div className="line line2 w-4 h-1 bg-gray-500 ml-2"></div>
              <i className="fas fa-circle text-gray-400 ml-2"></i>
              <h3 className="ml-3 text-gray-700 text-lg uppercase">Expertise</h3>
            </div>
            <div className="heading_bottom mt-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                My Skills & Tools
              </h2>
            </div>
          </div>
          <div className="text mt-6">
            <h3 className="text-gray-800 text-xl font-semibold">
              Every Day is a New Challenge
            </h3>
            <p className="text-gray-600 mt-4 leading-relaxed">
              I am passionate about learning and growing my skills to meet the
              demands of modern design and development. From creative tools to
              robust programming, I am constantly evolving to provide the best
              solutions.
            </p>
            <button className=" mt-4 px-6 py-3 font-semibold text-white bg-accent rounded-lg flex items-center gap-2 hover:bg-gray-100 hover:text-black hover:shadow-2xl hover:shadow-yellow-500/70 transition-all">
              Hire Me
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="right w-full lg:w-1/2 px-6 lg:px-12">
          {/* Skill Bars */}
          <div className="line_content space-y-6">
            {[
              { name: "Adobe Photoshop", width: "85%", color: "#30D3FF" },
              { name: "Adobe Illustrator", width: "75%", color: "#FF761B" },
              { name: "Adobe XD", width: "65%", color: "#FF26BE" },
            ].map((skill, index) => (
              <div key={index} className="line flex items-center mb-4">
                <p className="w-1/3 text-gray-700 uppercase text-sm font-medium">
                  {skill.name}
                </p>
                <div className="bar w-2/3 bg-gray-200 h-2 rounded overflow-hidden">
                  <div
                    className="line_bar h-2"
                    style={{
                      width: skill.width,
                      background: skill.color,
                    }}
                  ></div>
                </div>
                <h5
                  className="ml-4 bg-gray-700 w-12 h-8 flex items-center justify-center text-white rounded font-bold"
                  style={{ background: skill.color }}
                >
                  {skill.width.replace("%", "")}%
                </h5>
              </div>
            ))}
          </div>

          {/* Circular Skill Progress */}
          <div className="skill-container grid grid-cols-4 gap-6 mt-10">
            {[
              { name: "After Effects", percent: 80, color: "#D593FF" },
              { name: "Dreamweaver", percent: 56, color: "#35FC00" },
              { name: "HTML/JavaScript", percent: 60, color: "#FFA726" },
              { name: "WordPress", percent: 70, color: "#00A0D2" },
            ].map((skill, index) => (
              <div key={index} className="circle_box text-center">
                <svg
                  className="skill-circle w-24 h-24 mx-auto"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={skill.color}
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="251.2"
                    strokeDashoffset={`${251.2 - (251.2 * skill.percent) / 100}`}
                    className="transition-all duration-500 ease-in-out"
                  />
                  <text
                    x="50%"
                    y="50%"
                    fill={skill.color}
                    fontSize="18"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontWeight="bold"
                  >
                    {skill.percent}%
                  </text>
                </svg>
                <h4 className="text-gray-700 text-sm font-medium mt-3">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
