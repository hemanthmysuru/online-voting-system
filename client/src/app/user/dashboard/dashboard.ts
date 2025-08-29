import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  upcomingElections = [
    {
      title: 'Presidential Election',
      date: '2025-09-15',
      description: 'Vote for the next president of the country.',
    },
    {
      title: 'City Council Election',
      date: '2025-10-05',
      description: 'Local election for city council representatives.',
    },
    {
      title: 'School Board Election',
      date: '2025-11-01',
      description: 'Elect school board members for your district.',
    },
  ];

  currentElection = {
    title: 'Mayoral Election',
    date: '2025-08-30',
    description: 'Vote for the new mayor of your city.',
    votingOpen: true,
  };

  hasVoted = false;

  constructor(private router: Router) {}

  voteNow() {
    if (this.hasVoted) return;
    // Redirect to voting page or open voting modal
    console.log('Navigating to voting page...');
    this.router.navigate(['/user/vote']);
  }
}
