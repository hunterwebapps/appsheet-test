import React from 'react';
import { object } from 'prop-types';
import styles from './CandidateListItem.module.css';

// For bigger projects I would want to wrap this UI dependency and have several variants of our own specific purposes.
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

const CandidateListItem = ({ candidate }) => (
  <Card raised className={styles['card']}>
    <CardMedia
      image={candidate.photo}
      className={styles['cover']}
      title={candidate.name}
    />
    <CardContent className={styles['content']}>
      <Typography component="h5" variant="h5">
        {candidate.name}, {candidate.age}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        <a className={styles['anchor-unset']} href={`tel:${candidate.number}`}>{candidate.number}</a>
      </Typography>
      <Typography component="small" variant="caption" className={styles['align-left']}>
        {candidate.bio}
      </Typography>
    </CardContent>
  </Card>
);

CandidateListItem.propTypes = {
  candidate: object.isRequired,
};

export default CandidateListItem;
