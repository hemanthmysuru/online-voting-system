export const environment = {
  production: false,
  baseUrl: 'http://localhost:3000/api',
  endpoints: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    upcomingElections: '/elections/upcoming',
    currentElection: '/elections/current',
    castVote: '/elections/vote',
  },
};
