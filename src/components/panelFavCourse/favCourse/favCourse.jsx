import React, { useEffect, useState } from 'react';
import searching from '../../../assets/search.png';
import searching2 from '../../../assets/search2.png';
import date from '../../../assets/date.png';
import 'react-circular-progressbar/dist/styles.css';
import { Formik, Form, Field } from 'formik';
import CardFavCourses from '../cardFavCourse';

const FavCourses = () => {
  const [countSearch, setCountSearch] = useState('');
  const [rengeIs, setRengeIs] = useState(0);

  return (
    <div className='min-w-full rounded-xl mx-auto my-1'>
      <div className='rounded-xl mb-3' style={{ direction: 'rtl' }}>
        <span className='block iranSans my-6 mr-4 text-3xl font-bold text-right' style={{ width: '108px', height: '45px', lineHeight: '45.09px' }}>دوره من</span>
        <div className='min-w-full h-20 rounded-xl flex gap-3 mr-4'>
          <div className='relative' style={{ width: '292px', height: '80px' }}>
            <label htmlFor='reSearch' className='block text-base font-medium' style={{ width: '121px', height: '23px' }}>
              <img src={searching} className='inline-block h-6 w-6 ml-1' alt='' /> جستجو دوره
            </label>
            <Formik
              initialValues={{ searchName: '' }}
              onSubmit={(values) => {
                setCountSearch(values.searchName);
              }}
            >
              <Form>
                <Field
                  className='mt-2 rounded-2xl bg-gray-300 outline-none placeholder-gray-600'
                  style={{ width: '289px', height: '48px', textIndent: '10px' }}
                  name='searchName'
                  placeholder='جست جو کنید ...'
                />
                <button
                  type='submit'
                  className='rounded-2xl absolute left-0'
                  style={{ width: '48px', height: '48px', backgroundColor: '#3772ff', marginRight: '240px', marginTop: '8px' }}
                >
                  <img className='block mx-auto' src={searching2} alt='' />
                </button>
              </Form>
            </Formik>
          </div>
          <div className='relative' style={{ width: '292px', height: '80px' }}>
            <label htmlFor='reRange' className='block text-base font-medium' style={{ width: '121px', height: '23px' }}>
              <img src={date} className='inline-block h-6 w-6 ml-1' alt='' /> تاریخ برگزاری
            </label>
            <input
              type='range'
              id='reRange'
              min={0}
              max={1000}
              value={rengeIs}
              onChange={(e) => setRengeIs(e.target.value)}
              className='mt-2 rounded-2xl bg-gray-300 outline-none'
              style={{ width: '289px', height: '48px', textIndent: '10px' }}
              name='searched'
            />
          </div>
        </div>
      </div>
      <div className='rounded-xl mx-auto relative' style={{ width: '1096px', height: '681px' }}>
        <CardFavCourses countSearch={countSearch} rengeIs={rengeIs} />
      </div>
    </div>
  );
};

export default FavCourses;
