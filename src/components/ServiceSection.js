import React from "react";

const ServiceSection = () => {
  return (
    <div className="container mx-auto px-5 md:px-0 my-20">
      <section class="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
   <div class="container">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
               <span class="font-semibold text-lg text-primary mb-2 block">
               Our Services
               </span>
               <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                  What We Offer
               </h2>
               <p class="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
               </p>
            </div>
         </div>
      </div>
      <div class="flex flex-wrap -mx-4">
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div
                  class="
                  w-full
                  
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                  <img src="https://www.ecompmarketing.com/images/ecomp-images/seo-iso.png"  alt="" />
               </div>
               <h4 class="font-semibold text-xl text-dark mb-3">
                  Refreshing Design
               </h4>
               <p class="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
               </p>
            </div>
         </div>

      </div>
   </div>
</section>
    </div>
  );
};

export default ServiceSection;
