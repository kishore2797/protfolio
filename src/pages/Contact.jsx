import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {

  const formRef = useRef();

  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const [isLoading, setIsLoading] = useState(false)

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Tanuja K',
        from_email: form.email,
        to_email: 'defetron@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(() => {
      showAlert({
        show: true, text: 'Message sent successfully!',
        type: 'success'
      })
      setForm({ name: '', email: '', message: '' })
      setIsLoading(false);
      setTimeout(() => {
        hideAlert();
      }, 3000);
    }).catch((error) => {
      console.log(error);
      showAlert({
        show: true, text: "I didn't receive your message",
        type: 'danger'
      })
      setIsLoading(false);
      setTimeout(() => {
        hideAlert();
      }, 3000);
    })
  }

  return (
    <section className='relative flex flex-col max-container h-full'>
      {alert.show && <Alert {...alert}/>}
      <div className=' flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form className='w-full flex flex-col gap-7 mt-8'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Tanu'
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='Tanu@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows={4}
              className='textarea'
              placeholder='Let me know how I can help you!'
              required
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            className='btn'
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
