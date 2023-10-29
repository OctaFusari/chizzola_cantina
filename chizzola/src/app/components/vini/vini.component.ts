import { Component } from '@angular/core';

@Component({
  selector: 'app-vini',
  templateUrl: './vini.component.html',
  styleUrls: ['./vini.component.css']
})
export class ViniComponent {

  ngOnInit(): void {
    window.addEventListener('scroll', function () {
      const parallaxBg:any = document.querySelector('.parallax-bg');
      const scrollValue = window.scrollY;
      parallaxBg.style.transform = `translateY(${scrollValue * 0.3}px)`; // Adjust the multiplier to control the parallax effect
  }); 
  }

}
