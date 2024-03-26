import React from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
  email: string
}

const Register: React.FC = () => {
  const { handleSubmit } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <div className='flex flex-col h-screen'>
      <div className='h-1/3 bg-cover'>
        {/* <img src={img} alt='anh' /> */}
      </div>
      <div className='h-2/3 flex justify-center items-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-80'>
          <input
            type='email'
            name='email'
            className='w-full border rounded-md px-3 py-2 mb-2'
            placeholder='Enter your email'
          />

          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300'
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
