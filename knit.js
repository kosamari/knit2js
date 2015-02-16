// k2, m1L, k1, m1L, k until 3 sts remain,  m1R, k1, m1R, k2

function k(){
    return '|'
}

function m1L(){
    return 'Q'
}
function m1R(){
    return 'p'
}

function rightSide(){
    k();
    k();
    m1L();
    k();
    m1L();
}

function leftSide(){
    m1R();
    k();
    m1R();
    k();
    k();
}

var caston = [0,0,0,0,0]
