import React from "react";
import Work from "@/app/components/Works";
import Studies from "@/app/components/Studies";
import { personalDetails, workDetails, educationDetails } from "@/app/data/details";

export default function AboutPage() {
    return (
      <main className="container mx-auto max-w-7xl pt-10 pb-20 overflow-x-hidden px-4">
        <section>
          <br /><br />
          <h1 className="text-xl text-black md:text-2xl xl:text-3xl xl:leading-snug font-bold">
            About Me
          </h1>
          <p className="text-content py-8 lg:max-w-4xl">{personalDetails.bio}</p>
        </section>
    
        <br />
    
        <section>
          <h1 className="text-xl text-black md:text-2xl xl:text-3xl xl:leading-snug font-bold">
            Work Experience
          </h1>
          {/* <p className="text-content py-8 lg:max-w-3xl">{personalDetails.bio}</p> */}
          
          {React.Children.toArray(
            workDetails.map(({ position, company, location, type, duration }) => (
              <Work
                position={position}
                company={company}
                location={location}
                type={type}
                duration={duration}
              />
            ))
          )}
        </section>
    
        <br /> <br />
    
        <section>
          <h1 className="text-xl text-black md:text-2xl xl:text-3xl xl:leading-snug font-bold">
            Education
          </h1>
          {React.Children.toArray(
            educationDetails.map(({ course, school, location, duration }) => (
              <Studies
                course={course}
                school={school}
                location={location}
                duration={duration}
              />
            ))
          )}
        </section>
      </main>
    );
  
  
  }