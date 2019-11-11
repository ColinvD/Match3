class Cell extends Phaser.GameObjects.Image {
  constructor(newColumn, newRow, newTag, ref, size) {
    var x = size + newColumn * size;
    var y = size + newRow * size;
    super(ref, x, y, newTag);
    this.column = newColumn;
    this.row = newRow;
    this.tag = newTag;
    this.name = "( " + this.column + " , " + this.row + " )";
    this.selectable = true;
    this.matched = false;
    this.size = size;
    this.setInteractive();
    ref.add.existing(this).setScale(0.1);
  }

  MoveToNewCell(ref, newColumn, newRow){
    this.column = newColumn;
    this.row = newRow;
    this.name = "( " + this.column + " , " + this.row + " )";
    var x = this.size + this.column * this.size;
    var y = this.size + this.row * this.size;
    var moveAnim = ref.add.tween({
      targets: this,
      props: {
        x: { value: x, duration: 300, ease: 'Liniar' },
        y: { value: y, duration: 300, ease: 'Liniar' }
      }
    });
    //console.log(ref);
    /*moveAnim.to({x,y},200, Phaser.Easing.Liniar.none);
    moveAnim.start();*/
    //this.setPosition(x, y);
  }
}
