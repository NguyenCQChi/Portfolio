import React, { useContext, useRef, useEffect } from 'react';
import { ProjectCard } from '@src/components';
import { NavigationContext } from "@src/contexts/NavigationContext";

const Project = () => {
  const containerRef = useRef(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const  { changeSection } = useContext(NavigationContext);

  const callback = (entries: any) => {
    const [ entry ] = entries;

    if(entry.isIntersecting) {
      changeSection('#project')
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    }

    observerRef.current = new IntersectionObserver(callback, options);
    if(containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      if(containerRef.current) {
        observerRef.current?.unobserve(containerRef.current);
      }
    }
  }, [containerRef])
  return (
    <div className="w-screen h-fit pt-32 px-32 pb-20 bg-white flex flex-col gap-10" ref={containerRef}>
      <div className="flex justify-center text-8xl" >Project</div>
      <div className="grid grid-cols-3 gap-10">
        <ProjectCard 
          title="MyChat" 
          description="This project used WebSocket for real-time message delivery, ensuring instant 
          communication. Redux managed application state, user profiles, and chat histories, enhancing 
          user experience and reducing loading times. Secure login with Google Authentication and Firebase 
          data storage ensured persistence and cross-device accessibility. Next.js provided a responsive, 
          visually appealing, and interactive user interface adaptable to various devices." 
          image="message.png" />
        <ProjectCard 
          title="Insurance Prediction" 
          description="Insurance Prediction used two-stage modeling approach involving classification and regression
          to determine claim eligibility and predict claim amounts. This project conducted extensive data 
          preprocessing and feature engineering to enhance model performance, overcoming challenges related to 
          missing values and categorical variables. We also utilitzed ensemble techniques such as Random Forests
          and Gradient Boosting for model selection, optimizing hyperparameters through grid search and random search."
          image="classification.png" />
        <ProjectCard 
          title="YVR Monitor" 
          description="YVR, located on a sea island, faces numerous environmental challenges, including rising
          sea levels, potential flooding from the Fraser River, and the risk of storm surges. To effectively
          monitor the water quality in the airport's drainage channels, the YVR Environmental Monitoring 
          Agency has recognized the need for a comprehensive solution implementing IoT framework that revolutionizes
          the data collection process. We collect the data from sensors, push it to the cloud to securely transmit
          and store the collected data, and display complex data in a user-friendly format on the desktop website."
          image="yvr.jpeg" />
        <ProjectCard 
          title="Sudoku Solver" 
          description="Sudoku Solver is implemeted to help Sudoku lover to solve not only 9x9 but up to 16x16
          board using two algorithms - Brute Force for standard puzzles and Constraint Satisfation Problem for
          more complex puzzels, allowing users to choose the solving strategy." 
          image="sudoku.png" />
        <ProjectCard 
          title="Vart" 
          description="Vart is for all the art lovers living in Vancouver area to find their favorite art places,
          including museums and sculptures using API and Google Map to populate the locations. The app is designed
          and implemented for Android using Kotlin language." 
          image="vart.png"/>
        <ProjectCard 
          title="Image tagging" 
          description="Image tagging is a microservices applications, proving the understanding of the Internet
          Architecture. The first microservice is authentication using .NET for user login and signup. The next
          microservice is the front-end, where the user can interact and use the application. The last microservice
          is the trained AI model, which accepts a picture and gives back the title for the provided picture.
          All these services were combined to create a complete and simple project." 
          image="image_tagging.png"/>
      </div>
    </div>
  )
}

export default Project