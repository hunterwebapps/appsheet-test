import React from 'react';
import { object } from 'prop-types';
import styles from './CandidateListItem.module.css';

const CandidateListItem = ({ candidate }) => (
  <div className={styles['card']}>
    <div style={{ backgroundImage: `url('${candidate.photo}')` }} className={styles['cover']} />
    <div className={styles['content']}>
      <h5 className={styles['header']}>
        {`${candidate.name}, ${candidate.age}`}
      </h5>
      <h6 className={styles['subheader']}>
        <a className={styles['anchor-unset']} href={`tel:${candidate.number}`}>
          {candidate.number}
        </a>
      </h6>
      <small className={styles['details']}>
        {candidate.bio}
      </small>
    </div>
  </div>
);

CandidateListItem.propTypes = {
  candidate: object.isRequired,
};

export default CandidateListItem;
