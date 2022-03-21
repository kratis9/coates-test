import FormControl from '../components/FormControl'
import { useFormik } from 'formik'
import axios from 'axios'
import { toArray, validate } from '../helpers/form-validation'
import { MailerOptions } from '../types'

import { useDispatch } from 'react-redux'
import { update } from '../store/reducer'

export default function Mailer() {
  const formDefaults: MailerOptions = {
    to: '',
    cc: '',
    bcc: '',
    subject: '',
    body: '',
    provider: '',
  }

  const dispatch = useDispatch()

  function createPayload(formData: any) {
    const payload = {
      to: toArray(formData.to),
      cc: toArray(formData.cc || ''),
      bcc: toArray(formData.bcc || ''),
      provider: formData.provider,
      subject: formData.subject,
      body: formData.body,
    }

    return payload
  }

  const formik = useFormik({
    initialValues: formDefaults,
    validate,
    onSubmit: (values) => {
      const payload = createPayload(values as any)
      axios
        .post('http://localhost:4000/send_mail', payload)
        .then((res) => dispatch(update(values)))
    },
  })
  return (
    <div className='col-span-8 py-10 px-6 sm:px-10 xl:p-12'>
      <h3 className='text-lg font-medium text-warm-gray-900'>Send Emails</h3>
      <form
        onSubmit={formik.handleSubmit}
        className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
      >
        <FormControl
          type='select'
          label='Provider'
          controlName='provider'
          placeholder=''
          onChange={formik.handleChange}
          value={formik.values.provider}
          error={formik.errors.provider}
          onBlur={formik.handleBlur}
        />
        <FormControl
          type='text'
          label='To'
          placeholder='Recipients(Comma Separated)'
          controlName='to'
          onChange={formik.handleChange}
          value={formik.values.to}
          error={formik.errors?.to}
          onBlur={formik.handleBlur}
        />
        <FormControl
          type='text'
          label='CC'
          placeholder='Recipients(Comma Separated)'
          controlName='cc'
          onChange={formik.handleChange}
          value={formik.values?.cc || ''}
          error={formik.errors?.cc}
          onBlur={formik.handleBlur}
        />
        <FormControl
          type='text'
          label='BCC'
          placeholder='Recipients(Comma Separated)'
          controlName='bcc'
          onChange={formik.handleChange}
          value={formik.values.bcc || ''}
          error={formik.errors?.bcc}
          onBlur={formik.handleBlur}
        />
        <FormControl
          type='text'
          label='Subject'
          controlName='subject'
          onChange={formik.handleChange}
          value={formik.values.subject}
          error={formik.errors.subject}
          onBlur={formik.handleBlur}
        />
        <FormControl
          type='textarea'
          label='Body'
          controlName='body'
          onChange={formik.handleChange}
          value={formik.values.body}
          error={formik.errors.body}
          onBlur={formik.handleBlur}
        />

        <div className='sm:col-span-2 sm:flex sm:justify-end'>
          <button
            type='submit'
            className='mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
