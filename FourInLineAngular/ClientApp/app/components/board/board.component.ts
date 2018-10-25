import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: './board.component.html',
	styles: [`
  
		.celldashboard { display: inline-block; padding: 0px; margin: 0px; border: 0px; background-color: transparent; opacity: 1;}
  
  `]
})

export class BoardComponent  implements OnInit {

	public gameActive: number = 1;
	public actualCol = 0;
	public previousCol = 0;

	private myInARow = 4;
	private ROWS = 6;
	private COLS = 7;
	
	private RedNum : number = 1;
	private BluNum : number = 2;
	private whosFirst : number = 0;

	private myImage : any;
	//private redSpot = new Image();
	//private bluSpot = new Image();
	//private emptySpot = new Image();
	//private emptyPiece = new Image();
	//private redPiece = new Image();
	//private bluPiece = new Image();
	//private whosTurn = this.RedNum;
	//private whosTurnSpot = new Image();
	//private whosTurnPiece = new Image();


	constructor() {
	}

	ngOnInit() {
		this.myImage = new Image();
		this.myImage.setAttribute('crossOrigin', 'anonymous');
		this.myImage.src = "images/connect.svg";
		if (this.myImage.complete) {
			this.loadedImage();
		} else {
			this.myImage.addEventListener('load', this.loadedImage);
		}
	}

	public placeTop(col: number): any {
		this.actualCol = col;
		console.log("placeTop: " + col);
		//if (this.gameActive == 1) {
		//	let div = document.getElementById('img' + 0 + '_' + col);
		//	(<HTMLImageElement>div).src = this.whosTurnPiece.src
		//}
		return null;
	}

	public unPlaceTop(col: number): any {
		this.previousCol = col;
		console.log("unPlaceTop: " + col);
		//if (this.gameActive == 1) {
		//	let div = document.getElementById('img' + 0 + '_' + col);
		//	(<HTMLImageElement>div).src = this.emptyPiece.src;
		//}
		return null;
	}

	public dropIt(col: number): any {
		this.actualCol = -1 * col;
		this.previousCol = -1;
		return null;
	}

	private loadedImage() {
		console.log("loadedImage");
	//	this.redPiece.src = this.imgSlice(this.myImage, 0, 0, 100, 100, 50, 50)
	//	this.bluPiece.src = this.imgSlice(this.myImage, 100, 0, 100, 100, 50, 50)
	//	this.emptyPiece.src = this.imgSlice(this.myImage, 200, 0, 100, 100, 50, 50)
	//	this.redSpot.src = this.imgSlice(this.myImage, 0, 100, 100, 100, 50, 50)
	//	this.bluSpot.src = this.imgSlice(this.myImage, 100, 100, 100, 100, 50, 50)
	//	this.emptySpot.src = this.imgSlice(this.myImage, 200, 100, 100, 100, 50, 50)
	//	this.whosTurnSpot.src = this.redSpot.src;
	//	this.whosTurnPiece.src = this.redPiece.src;
	//	this.boardClear();
	}

	//private imgSlice(img : any, x : number, y : number, wd : number, ht : number, toWd : number, toHt : number) : any {
	//	let can = document.createElement("canvas")
	//	let ctx = can.getContext("2d")
	//	can.width = toWd
	//	can.height = toHt
	//	can.style.width = toWd + "px";
	//	can.style.height = toHt + "px";
	//	ctx!.drawImage(img, x, y, wd, ht, 0, 0, toWd, toHt);
	//	return can.toDataURL();
	//}

	//private boardClear() {
	//	for (let col = 0; col < this.COLS; col++) {
	//		for (let row = 0; row <= this.ROWS; row++) {
	//			let div = document.getElementById('img' + row + '_' + col);
	//			if (row == 0) {
	//				(<HTMLImageElement>div).src = this.emptyPiece.src;
	//			} else {
	//				(<HTMLImageElement>div).src = this.emptySpot.src;
	//			}
	//		}
	//	}
	//}


	private playerName(player : number) {
		if (player == this.RedNum) {
			return 'Red'
		} else {
			return 'Blue'
		}
	}

}
