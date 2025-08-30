import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectionService } from '../../core/services/election.service';
import { ICurrentElection, IUpcomingElection } from '../../core/models/election.model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, DatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit, OnDestroy {
  upcomingElections: IUpcomingElection[] = [];
  currentElection: ICurrentElection | null = null;
  hasVoted = false;

  constructor(private router: Router, private electionService: ElectionService) { }

  ngOnInit(): void {
    this.electionService.getCurrentElection().subscribe({
      next: (data: ICurrentElection) => {
        const now = new Date();
        const start = new Date(data.startDate);
        const end = new Date(data.endDate);
        const isOpen = now >= start && now <= end;

        this.currentElection = {
          ...data,
          votingOpen: isOpen,
        };
      },
      error: (err) => {
        console.error('Error fetching current election', err);
      },
    });

    this.electionService.getUpcomingElections().subscribe({
      next: (data: IUpcomingElection[]) => {
        this.upcomingElections = data.map((e) => ({
          ...e,
          description: 'Election coming soon. Stay tuned.',
        }));
      },
      error: (err) => {
        console.error('Error fetching upcoming elections', err);
      },
    });
  }

  ngOnDestroy(): void {

  }

  voteNow() {
    if (this.hasVoted || !this.currentElection?.votingOpen) return;
    this.router.navigate(['/user/vote']);
  }
}
