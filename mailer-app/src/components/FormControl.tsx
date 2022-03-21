import React, { ChangeEvent } from 'react'

function ErrorComp({ errors }: { errors: string | Record<string, string> }) {
  return typeof errors === 'string' ? (
    <div className='text-left text-red-500'>{errors}</div>
  ) : null
}

export default function FormControl({
  label,
  controlName,
  placeholder = '',
  isOptional,
  type,
  value,
  onChange,
  onBlur,
  error,
}: {
  label: string
  type?: string
  placeholder?: string
  controlName: string
  isOptional?: boolean
  value: string
  error?: string | Record<string, string>
  onBlur: (eventOrString: any) => void | ((e: any) => void)
  onChange: (
    eventOrPath: string | ChangeEvent<any>
  ) => void | ((eventOrTextValue: string | ChangeEvent<any>) => void)
}) {
  return (
    <div className='sm:col-span-2'>
      <div className='flex justify-between'>
        <label
          htmlFor={controlName}
          className='block text-sm font-medium text-warm-gray-900'
        >
          {label}
        </label>
        {isOptional && (
          <span id='phone-optional' className='text-sm text-warm-gray-500'>
            Optional
          </span>
        )}
      </div>

      <div className='mt-1'>
        {type === 'text' && (
          <input
            className={`py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md ${
              error ? 'border-red-500' : ''
            }`}
            placeholder={placeholder}
            id={controlName}
            name={controlName}
            onBlur={onBlur}
            onChange={onChange}
            type='text'
            value={value}
          />
        )}
        {type === 'textarea' && (
          <textarea
            aria-describedby='message-max'
            className={`py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md ${
              error ? 'border-red-500' : ''
            }`}
            placeholder={placeholder}
            id={controlName}
            name={controlName}
            onBlur={onBlur}
            onChange={onChange}
            rows={4}
            value={value}
          />
        )}
        {type === 'select' && (
          <select
            id={controlName}
            name={controlName}
            onBlur={onBlur}
            onChange={onChange}
            className='form-select form-select-lg mb-3 appearance-none block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            aria-label='.form-select-lg example'
          >
            <option selected>Please select the provider</option>
            <option value='0'>SendGrid</option>
            <option value='1'>MailTrap</option>
            <option value='3'>MailChimp</option>
          </select>
        )}
      </div>

      {error ? <ErrorComp errors={error} /> : null}
    </div>
  )
}
