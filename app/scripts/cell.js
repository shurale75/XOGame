/**
 * Created by dmitri on 8/28/2016.
 */

function Cell(){
    console.log('CELL')

    this.index;
    this.status;

    this.prototype.changeStatus = function(status){
        this.status = status;
    }
}
