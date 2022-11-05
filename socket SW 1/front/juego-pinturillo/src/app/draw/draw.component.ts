import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit, AfterViewInit {
  @ViewChild('canvasRef',{static:false}) canvasRef:any
  public width = 500;
  public height = 450;

  private cx?: CanvasRenderingContext2D;
  private points: Array<any> = [];
  @HostListener('document:mosemove',['$event'])
  onMouseMove = (e:any)=>{
      console.log(e);
      
    // if (e.target.id === 'canvasId') {
    //   this.write(e);
    // }  
  }
  // @HostListener('mouseover')
  // mouseover() {
  //   console.log("OMG It's still here!!!");
  // }
  constructor() { } 

  ngAfterViewInit(): void {
  //  this.render();
  }

  ngOnInit(): void {
    
  }
  private render():any{
    const canvasEl = this.canvasRef.nativeElement;

    this.cx = canvasEl.getContext('2d');

    canvasEl.with = this.width;
    canvasEl.height = this.height;

    this.cx!.lineWidth = 3;

    this.cx!.lineCap = 'round';
    this.cx!.strokeStyle = '#000';
  }
  private write(res:any):any{
    const canvasEl:any = this.canvasRef.nativeElement;
    const rect = canvasEl.getBoundingClientRect();
    const prevPos = {
      x: res.clientX - rect.left,
      y: res.clientY - rect.top
    }
    console.log(prevPos);
   // this.writeSingle(prevPos);
  }
  private writeSingle = (prevPos:any, emit= true)=>{
    this.points.push(prevPos);
    if (this.points.length > 3) {
      const prevPost = this.points[this.points.length - 1]
      const currentPost = this.points[this.points.length - 2]
      console.log(prevPost,currentPost);
     // this.drawOnCanvas(prevPos,currentPost);
     
      
    }
  }
  private drawOnCanvas(prevPos:any,currentPos:any){
    if (!this.cx) {
      return;
    }
    this.cx.beginPath();
    if (prevPos) {
      this.cx.moveTo(prevPos.x,prevPos.y);
      this.cx.lineTo(currentPos.x,currentPos.y);
      this.cx.stroke();
    }
  }

}
