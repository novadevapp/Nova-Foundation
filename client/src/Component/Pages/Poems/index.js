import React, { useState, useEffect } from 'react';
import './style.css';
import PoemList from './PoemList';
import Header from '../../CommonComponent/Header';
import Footer from '../../CommonComponent/Footer';
import Button from '../../CommonComponent/Button';

export default props => {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/v1/poems')
      .then(res => res.json())
      .then(result => {
        if (result.auth === false) {
          return new Promise(async (resolve, reject) => {
            await props.setIsLogged({ auth: false, username: '' });
            props.history.push('/login');
            resolve();
          })
        }
        if (result.error) throw new Error('');
        setPoems(result.data);
        setLoading(true);
      })
      .catch(() => {
        setError('Something Error Please Try Again');
        setLoading(true);
      })
    return () => undefined;
  }, [props]);
  return (
    <div>
      <Header {...props} />
      {loading && error && <p className="error">{error}</p>}
      {loading && (
        <>
          <PoemList poems={poems} {...props} />
          <div className="poem-buttons">
            <Button className="large-back__button" name="Back" onClick={() => props.history.goBack()} />
            <Button className="register__button" name="More Poems" />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};
