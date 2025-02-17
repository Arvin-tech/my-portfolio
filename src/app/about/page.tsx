import React from "react";
import Work from "@/app/components/Works";
import Studies from "@/app/components/Studies";
import { personalDetails, workDetails, educationDetails } from "@/app/data/details";

export default function AboutPage() {
    return (
      <main className="container mx-auto max-width pt-10 pb-20 ">
        
        <section>
        <h1 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl xl:text-3xl xl:leading-snug font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.role}</p>
        </section>

        <br />

        <section>
          <h1 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl xl:text-3xl xl:leading-tight font-bold">
            Work Experience
          </h1>
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

        <br />

        <section>
          <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
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