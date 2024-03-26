import React from 'react'
import { useForm } from 'react-hook-form'
import img from '../../assets/1.png'
import Input from '../../components/Input/Input'
import { FcGoogle } from 'react-icons/fc'
import Button from '../../components/Button/Button'
interface FormData {
  email: string
}

const Register: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <div className='flex flex-col h-screen'>
      <div className='h-1/3 bg-cover'>
        <img src={img} alt='anh' className='' />
      </div>
      <div className='h-2/3 flex justify-center items-center bg-pink-300 '>
        <form onSubmit={handleSubmit(onSubmit)} className='w-1/3 rounded-lg shadow-lg bg-white p-8 '>
          <div className='text-2xl font-bold '>Đăng kí</div>
          <Input
            name='email'
            register={register}
            type='email'
            placeholder='Email'
            className='mt-8'
            errorMessage={errors.email?.message}
          />
          <Button label='Đăng ký với số điện thoại' onClick={() => {}} />
          <div className='border-t border-gray-300 my-4'>
            <span className='text-gray-500'>Hoặc</span>
          </div>
          <Button outline label='Tiếp tục với tài khoản Google' icon={FcGoogle} onClick={() => {}} />
        </form>
      </div>
    </div>
  )
}

export default Register
