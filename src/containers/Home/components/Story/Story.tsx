import React from 'react';

const Story = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-row">
        <div className="h-full w-2/5">
          <img src="office_desk.avif" className="w-full h-full"/>
        </div>
        <div className="h-full py-20 px-40 flex-1 gap90 flex flex-col">
          <div className="text-8xl mb-4">About Me</div>
          <div className="flex flex-col gap-4 text-xl">
            <div>
              Hello, my name is Chi and I love solving problems! I am passionate about coding and mysteries
              as both can provoke my curiosity and the urge to keep working and looking for them!
            </div>
            <div>
              I am currently seeking software development roles. I am interested in frontend development,
              cloud technologies and machine learning AI.
            </div>
            <div>
              When I have free time, I love listening to music and drawing or crocheting. I am also recently
              gotten into doing exercises to improve my health!
            </div>
          </div>
          <div className="h-full flex flex-col justify-around" >
            <div className="flex_story bg-orange shadow-lg shadow-dark_orange">
              <div className="heading">
                Communication
              </div>
              <div className='text-xl' >
                I believe communication is the most important skills to create exceptional products.
                By clearly conveying ideas and understanding project requirements, I foster collaboration and
                ensure everyone is on the same page. Effective communication not only enhances team synergy but
                also ensures that the end product exceeds expectaions, reflecting the project's goals.
              </div>  
            </div>
            <div className="flex_story bg-orange shadow-lg shadow-dark_orange">
              <div className="heading">
                Persistence
              </div>
              <div className='text-xl' >
                I believe in the power of persistence and hard work to achieve outstanding results. As a dedicated
                software developer, I immerse myself in challenges and continuously strive to find innovative solutions.
                My commitment to excellence means I don't shy away from difficult tasks; instead, I tackle them head-on,
                working diligently to overcome obstable. This persistence ensures that I consistently deliver high-quality 
                work that not only meets but exceeds expectations.
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story