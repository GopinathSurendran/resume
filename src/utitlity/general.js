const gsToDateString = function (ago = false) {
    const d1 = this;
    if (!ago) {
        return d1.toDateString();
    }
    const d2 = new Date();
    const y1 = d1.getFullYear();
    const y2 = d2.getFullYear();
    const m1 = d1.getMonth();
    const m2 = d2.getMonth();

    let dy = y2 - y1;
    let dm;
    if(m2 >= m1){
        dm = m2 -m1;
    } else {
        dm = 11 - m1 + m2;
        dy = dy - 1;
    }
    
    return `${dy} year${dy != 1 ? 's' : ''} and ${dm} month${dm != 1 ? 's' : ''}`
}

Date.prototype.gsToDateString = gsToDateString;
