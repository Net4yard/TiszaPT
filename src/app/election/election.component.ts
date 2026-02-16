import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-election',
  imports: [],
  templateUrl: './election.component.html',
  styleUrl: './election.component.scss'
})
export class ElectionComponent implements OnInit, OnDestroy {
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  isStarted = false;

  private readonly targetDate = new Date('2026-04-12T06:00:00+02:00');
  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.updateCountdown();
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private updateCountdown(): void {
    const now = new Date();
    const differenceMs = this.targetDate.getTime() - now.getTime();

    if (differenceMs <= 0) {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.isStarted = true;
      return;
    }

    const totalSeconds = Math.floor(differenceMs / 1000);
    this.days = Math.floor(totalSeconds / (24 * 60 * 60));
    this.hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    this.minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    this.seconds = totalSeconds % 60;
    this.isStarted = false;
  }

  formatUnit(value: number): string {
    return value.toString().padStart(2, '0');
  }

}
