import React from 'react';

const ProjectCard = (props: any) => {
  const {
    title,
    description,
    image
  } = props

  return (
    <div className="bg-orange shadow-lg shadow-dark_orange p-8 rounded-2xl hover:translate-x-1 hover:-translate-y-1 transition-transform hover:cursor-pointer flex flex-col gap-4">
      <div className='text-2xl italic flex justify-center'> {title} </div>
      <div> {description} </div>
      <div className="w-full flex justify-center flex-1 items-end"><img src={image} alt="Project" className='w-3/4 h-fit rounded-2xl'/></div>
    </div>
  )
}

export default ProjectCard