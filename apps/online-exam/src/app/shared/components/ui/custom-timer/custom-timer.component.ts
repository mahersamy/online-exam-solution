import { Component, input, output, Signal, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-custom-timer',
  imports: [],
  templateUrl: './custom-timer.component.html',
  styleUrl: './custom-timer.component.scss'
})
export class CustomTimerComponent implements OnInit,OnDestroy{
 
  startTime=input.required<number>();
  completed = output();
  
  timeLeftInSeconds!: number;
  intervalId!: NodeJS.Timeout;

  ngOnInit(): void {
    this.startCountdown(this.startTime());
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startCountdown(minutes: number) {
    this.timeLeftInSeconds = minutes * 60;

    this.intervalId = setInterval(() => {
      if (this.timeLeftInSeconds > 0) {
        this.timeLeftInSeconds--;
      } else {
        clearInterval(this.intervalId);
        this.completed.emit();
      }
    }, 1000);
  }

  get formattedTime(): string {
    const min = Math.floor(this.timeLeftInSeconds / 60);
    const sec = this.timeLeftInSeconds % 60;
    return `${this.pad(min)}.${this.pad(sec)}`;
  }

  private pad(num: number): string {
    return num < 10 ? '0' + num : '' + num;
  }
}
