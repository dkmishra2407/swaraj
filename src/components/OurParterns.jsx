import React from "react";

const OurPartners = () => {
  return (
    <section className="bg-gray-100" style={{
      backgroundImage: 'url("https://auth.maharashtracet.org/resources/xpuxb/login/mh-cet/img/keycloak-bg.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}>
      <div className="container px-6 py-10 mx-auto">
        <div className="xl:flex xl:items-center xl:-mx-4">
          <div className="xl:w-1/2 xl:mx-4">
            <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl">
              Partner's Details
            </h1>

            <p className="max-w-2xl mt-4 text-white">
              Experienced professionals: Vinod Bhandari, 9 years in Production & QA . 
            </p>
            <p className="max-w-2xl mt-4 text-white">
            Tejswini Chaudhari, 7 years in Production Planning & QA. Certified experts in NDE and welding.
            </p>
      
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
            <div>
              <h1 className="mt-4 text-2xl font-semibold text-white capitalize">
                Vinod Bajrang Bhandari
              </h1>

              <p className="mt-2 text-white capitalize text-sm">
                Mechanical Engineer With
                <br />
                9 Years of work experience in Production & Quality Assurance
              </p>
            </div>

            <div>
              <h1 className="mt-4 text-2xl font-semibold text-white capitalize">
                Tejswini Pradip Chaudhari
              </h1>

              <p className="mt-2 text-white capitalize text-sm">
                BE Mechanical
                <br />
                7 Years of work experience in Production Planning & Quality Assurance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default OurPartners;
