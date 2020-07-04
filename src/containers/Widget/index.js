import React, { useEffect, useState } from 'react';
import { getData } from './apis';
import { default_data } from '../../constants';

export default function () {
  const [open, setOpen] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState()

  useEffect(() => {
    setLoading(true)
    getData().then(res => {
      setLoading(false)
      setData(res && res['script test'])
    }).catch(err => {
      setLoading(false)
    });
  }, [])

  return (
    <div className={`custom-widget-container--cus ${open ? '' : 'closed'}`}>
      <div className="widget--cus">
        {(open && !isLoading) ? <div className="main--cus">
          <h1 className="title--cus">{data && data.labels}</h1>
          <div className="text-center--cus">
            <div className="phone--cus">
              <span className="icon--cus"><i className="fa fa-phone-alt" aria-hidden="true"></i></span>
              <p>{data && data.phone_number}</p>
            </div>
          </div>
        </div> : null}
        <span className={`action--cus ${(open && !isLoading) ? '' : 'alt'}`} onClick={() => setOpen(!open)}>
          {
            open ? <i className="fas fa-times"></i> : <i className="fa fa-phone-alt" aria-hidden="true"></i>
          }
        </span>
      </div>
    </div>
  )
}