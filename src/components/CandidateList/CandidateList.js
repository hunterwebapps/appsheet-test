import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import styles from './CandidateList.module.css';

import { selectValidCandidates, selectCandidatesLoading } from '../../store/candidates/selectors';
import { getCandidates } from '../../store/candidates/actions';

import { Typography } from '@material-ui/core';
import CandidateListItem from './CandidateListItem';

const CandidateList = ({ candidates, getCandidates, loading }) => {
  useEffect(() => {
    getCandidates();
  }, []);

  const header = (
    <div className={styles['header']}>
      <Typography component="h3" variant="h3" color="inherit">
        {loading ? 'Loading...' : 'Candidates'}
      </Typography>
      <Typography component="div" variant="subtitle2" color="inherit">
        {'5 Youngest Candidates, Sorted Alphabetically'}
      </Typography>
    </div>
  );

  const candidateListItems = candidates.map(candidate => (
    <CandidateListItem
      key={candidate.id}
      candidate={candidate}
    />
  ));

  return (
    <div className={styles['container']}>
      {header}
      {candidateListItems}
    </div>
  );
}

const mapStateToProps = state => ({
  candidates: selectValidCandidates(state),
  loading: selectCandidatesLoading(state),
});

const mapDispatchToProps = {
  getCandidates,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(CandidateList));
