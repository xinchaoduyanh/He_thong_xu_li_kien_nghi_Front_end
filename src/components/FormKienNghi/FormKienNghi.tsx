import { useForm } from 'react-hook-form'
import Input from '../Input/Input'

const FormKienNghi = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      ngayKiengNghi: '',
      tieuDe: '',
      noiDung: '',
      linhVuc: ''
    }
  })

  const onSubmit = (data: any) => {
    // Gửi dữ liệu form đến API hoặc xử lý dữ liệu theo yêu cầu

    console.log(data)
  }

  return (
    <div>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-md'>
          <h1 className='text-center text-2xl font-bold'>Kiến nghị</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
              <label htmlFor='tieuDe' className='block text-sm font-medium mb-2'>
                Tiêu đề
              </label>
              <Input
                type='text'
                id='tieuDe'
                name='tieuDe'
                register={register}
                // className='border border-gray-300 rounded-md p-2 w-full'
              />
              {errors.tieuDe && <span className='text-red-500 text-sm'>{errors.tieuDe.message}</span>}
            </div>

            <div className='mb-4'>
              <label htmlFor='noiDung' className='block text-sm font-medium mb-2'>
                Nội dung
              </label>
              <textarea
                id='noiDung'
                // name='noiDung'
                {...register('noiDung')}
                className='border border-gray-300 rounded-md p-2 w-full h-24'
              />
              {errors.noiDung && <span className='text-red-500 text-sm'>{errors.noiDung.message}</span>}
            </div>

            <div className='mb-4'>
              <label htmlFor='ngayKiengNghi' className='block text-sm font-medium mb-2'>
                Ngày kiến nghị
              </label>
              <Input
                type='date'
                name='ngayKiengNghi'
                register={register}
                // className='border border-gray-300 rounded-md p-2 w-full'
              />
              {errors.ngayKiengNghi && <span className='text-red-500 text-sm'>{errors.ngayKiengNghi.message}</span>}
            </div>

            <div className='mb-4'>
              <label htmlFor='linhVuc' className='block text-sm font-medium mb-2'>
                Lĩnh vực
              </label>
              <select
                id='linhVuc'
                // name='linhVuc'
                {...register('linhVuc')}
                className='border border-gray-300 rounded-md p-4 w-full'
              >
                <option value=''>Chọn lĩnh vực</option>
                <option value='1'>Hành chính</option>
                <option value='2'>Giáo dục</option>
                <option value='3'>Y tế</option>
                <option value='4'>Môi trường</option>
              </select>
              {errors.linhVuc && <span className='text-red-500 text-sm'>{errors.linhVuc.message}</span>}
            </div>

            <div className='flex flex-col justify-between items-center gap-4'>
              <button className='w-full bg-red-600 py-4 rounded-lg text-white text-xl '>Cancel</button>
              <button className='w-full bg-black py-4 rounded-lg text-white text-xl ' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormKienNghi
