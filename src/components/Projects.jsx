import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 p-8'>
        <h2 className='my-20 text-center text-3xl'>Projects</h2>
        <div>
            {PROJECTS.map((project, index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div
                    whileInView={{opacity: 1, x:0}}
                    initial= {{opacity: 0, x: -100}}
                    transition={{duration: 0.5}}
                     className='w-full lg:w-1/4'>
                        <img width={150} height={150} className='mb-6 rounded' src={project.image} alt={project.title} />
                    </motion.div>
                    <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial = {{opacity: 0, x:100}}
                    transition={{duration: 0.5}} className="w-full max-w-xl lg:w-3/4">
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <p className='text-neutral-400 mb-4'>{project.description}</p>
                    {project.technologies.map((tech, index)=>(
                        <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 text-purple-800 font-medium px-2 py-1 text-sm'>{tech}</span>
                    ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
