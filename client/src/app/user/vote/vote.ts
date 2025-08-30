import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { ElectionService } from '../../core/services/election.service';
import { ICurrentElection } from '../../core/models/election.model';

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vote.html',
  styleUrl: './vote.scss',
})
export class Vote implements OnInit {
  election: ICurrentElection | null = null;
  hasVoted = false;

  constructor(private electionService: ElectionService, private router: Router) { }

  ngOnInit(): void {
    this.hasVoted = this.electionService.hasVoted;

    this.electionService.getCurrentElection().subscribe({
      next: (data) => {
        // Add computed flag
        const now = new Date();
        const start = new Date(data.startDate);
        const end = new Date(data.endDate);

        data.votingOpen = now >= start && now <= end;

        this.election = data;
      },
      error: (err) => {
        console.error('Error loading election:', err);
      },
    });
  }

  vote(candidateId: number) {
    if (this.hasVoted || !this.election?.votingOpen) return;

    this.electionService.castVote(this.election.id, candidateId).subscribe({
      next: () => {
        alert('✅ Vote submitted successfully!');
        this.electionService.setVoted();
        this.hasVoted = true;
        this.router.navigate(['/user']);
      },
      error: (err) => {
        alert('❌ Error voting: ' + (err.error?.error || 'Unknown error'));
      },
    });
  }

  goBack() {
    this.router.navigate(['/user']);
  }
}
