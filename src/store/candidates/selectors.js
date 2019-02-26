const selectCandidates = state => state.candidates.all;

/*
  A valid candidate is considered the 5 youngest with a telephone number, ordered by name.
  We would want a configurable search system that defines different parameters to sort by.
  Need another feature that has inputs, which are stored in the store, and those will be used to filter.
*/
const selectValidCandidates = state => {
  const candidates = selectCandidates(state);
  // I could chain these, but I think this is more readable
  const candidatesWithNumber = candidates.filter(candidate => /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(candidate.number));
  const candidatesByAge = candidatesWithNumber.sort((a, b) => a.age - b.age)
  const candidatesTop5 = candidatesByAge.slice(0, 5);
  const candidatesByName = candidatesTop5.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
  return candidatesByName;
}

const selectCandidatesLoading = state => state.candidates.loading;

export {
  selectCandidates,
  selectValidCandidates,
  selectCandidatesLoading,
};
