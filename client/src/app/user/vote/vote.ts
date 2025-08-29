import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vote.html',
  styleUrl: './vote.scss',
})
export class Vote {
  hasVoted = false;

  election = {
    title: 'Mayoral Election - 2025',
    candidates: [
      {
        id: 1,
        name: 'Alice Johnson',
        party: 'Green Party',
        symbol: '🟢',
      },
      {
        id: 2,
        name: 'Bob Smith',
        party: 'Blue Party',
        symbol: '🔵',
      },
      {
        id: 3,
        name: 'Carol Lee',
        party: 'Red Party',
        symbol: '🔴',
      },
    ],
  };

  constructor(private router: Router) {}

  vote(candidateId: number) {
    if (this.hasVoted) return;

    this.hasVoted = true;
    // TODO: Save vote (to API/localStorage/mock service)
    alert(`You voted for candidate ID ${candidateId}`);

    // Optional: navigate away after voting
    this.router.navigate(['/user']);
  }
}
